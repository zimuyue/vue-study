<template>
  <div class="tab">
    <div class="nav">
      <div
        v-for="(value, key) in navData"
        :key="key"
        :class="['nav-item', { 'active': key === currentTab }]"
        @click="setCurrentTab(key)"
      >{{ value }}</div>
    </div>

    <div class="component">
      <!-- 
        suspense组件就是对异步依赖加载前，等待时设置加载的状态
        通俗点讲可以对异步组件加载前做一些loading加载显示以及错误处理
      -->
      <suspense timeout="0">
        <template #default>
          <component :is="currentComponent"></component>
        </template>
        <template #fallback>
          <loading></loading>
        </template>
      </suspense>
      <!-- <component :is="currentComponent"></component> -->
    </div>
  </div>
</template>

<script>

import { Intro, Article, List } from './components/AsyncComponents';
import Loading from './components/Loading';

export default {
  name: 'App',
  components: {
    Loading
  },
  data () {
    return {
      currentTab: 'intro',
      navData: {
        'intro': 'Intro',
        'list': 'List',
        'article': 'Article'
      }
    }
  },
  computed: {
    currentComponent () {
      switch (this.currentTab) {
        case 'intro':
          return Intro;
        case 'list':
          return List;
        case 'article':
          return Article;
        default:
          break;
      }
    }
  },
  methods: {
    setCurrentTab (tab) {
      this.currentTab = tab;
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    margin: 50px auto;

    .nav {
      height: 50px;
      border-bottom: 1px solid #000;

      .nav-item {
        float: left;
        width: 33.33%;
        height: 100%;
        text-align: center;
        line-height: 50px;

        &.active {
          background-color: #000;
          color: #fff;
        }
      }
    }

    .component {
      padding: 30px;
      box-sizing: border-box;
    }
  }  
</style>
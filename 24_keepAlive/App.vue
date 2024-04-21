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
        keep-alive组件
        组件切换时，缓存组件，保持组件的状态
        避免反复渲染导致性能问题 
      -->

      <!-- 
        书写方式
        组件的 name 属性或局部注册组件名称
        字符串形式，逗号后面不可以有空格
      -->
      <!-- <keep-alive exclude="List,Intro"> -->
      
      <!-- 与 exclude 相反 -->
      <!-- <keep-alive include="List,Intro"> -->
      
      <!-- 可以写数组，注意一定要是数组类型，推荐这种写法 -->
      <!-- <keep-alive :include="['List', 'Intro']"> -->
      
      <!-- 正则匹配 -->
      <!-- <keep-alive :include="/n|c/"> -->

      <!-- 
        max=2 最多可缓存的组件数
        如果达到了 2 个组件，在创建新的组件实例之前
        缓存组件时间最久且没有被访问的组件实例会被销毁
      -->
      <!-- <keep-alive :max="2"> -->
      <keep-alive include="List">
        <!-- 
          动态组件
          在交互中，组件的渲染是不确定的
          根据交互的操作来决定渲染哪个组件
        -->
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import Intro from './components/Intro.vue';
// import Article from './components/Article.vue';
// import List from './components/List.vue';

/*
  Vue@3.2.33
  bug1：异步组件第一次加载时不会走 activated
  它要先从服务器中下载下来，然后挂载到页面中
        
  bug2：使用异步组件时 keep-alive 中 include 包含的组件它不会进行缓存

  以上的两个问题在 Vue@3.2.34 版本中都修复了
*/ 
import { Intro, Article, List } from './components/AsyncComponents';

export default {
  name: 'App',
  components: {
    Intro,
    Article,
    List
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
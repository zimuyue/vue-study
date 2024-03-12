<template>
  <div class="login-tab">
    <div class="login-nav">
      <div
        v-for="tab of tabData"
        :key="tab"
        :class="['nav-item', { active: currentTab === tab }]"
        @click="changeTab(tab)"
      >{{ tab }}</div>
    </div>

    <div class="login-component">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
/**
 * <keep-alive></keep-alive>
 * 
 * 组件切换时，缓存组件，保持组件的状态, 避免反复渲染导致性能问题
 * 
 * 动态组件
 * 
 * <component :is=""></component>
 * 
 * 在交互中，组件的渲染是不确定的，根据交互的操作来决定渲染哪个组件
 * 
 * 异步组件
 * 没有必要在当前进行加载的组件
 * 被分割成代码块文件，按需从服务器上下载并加载
 * 
 * import { defineAsyncComponent } from 'vue';
 * 
 * const { defineAsyncComponenet } = Vue;
 * 
 * AsyncComp: () => import('./xxxxx')
 * AsyncComp: defineAsyncComponent(() => {
 *   return new Promise((resolve, reject) => {
 *     resolve({
 *       data () {  
 *         return {xxxx}
 *       },
 *       template: ``
 *     })
 *   })
 * })
 * 
 * AsyncComp: Vue.defineAsyncComponent(() => import('./xxxx'))
 * 
 * const AsyncComp = Vue.defineAsyncComponent(() => import('./xxxx'))
 * 
 * export default {
 *   components: {
 *     AsyncComp
 *   }
 * }
 * 
 * app.component('async-comp', AsyncComp);
 */

import AccountLogin from './AccountLogin';

// Vue3加载异步组件使用defineAsyncComponent进行引入
const QrcodeLogin = Vue.defineAsyncComponent(() => import('./QrcodeLogin'));
const MobileLogin = Vue.defineAsyncComponent(() => import('./MobileLogin'));

export default {
  name: 'MainLogin',
  components: {
    AccountLogin,
    QrcodeLogin,
    MobileLogin
    // Vue2加载异步组件写法
    // QrcodeLogin: () => import('./QrcodeLogin'),
    // MobileLogin: () => import('./MobileLogin')
  },
  data () {
    return {
      currentTab: 'Account',
      tabData: ['Account', 'Qrcode', 'Mobile']
    }
  },
  methods: {
    changeTab (tab) {
      this.currentTab = tab;
    }
  },
  computed: {
    currentTabComponent () {
      return this.currentTab.toLowerCase() + '-login';
    }
  }
}
</script>

<style lang="scss">
  .login-tab {
    width: 500px;
    margin: 50px auto;
    border: 1px solid #000;

    .login-nav {
      height: 50px;
      border-bottom: 1px solid #000;

      .nav-item {
        float: left;
        width: 33.33%;
        text-align: center;
        line-height: 50px;

        &.active {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
</style>
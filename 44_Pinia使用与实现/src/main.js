const { createApp } = Vue;
const {
  createPinia,
  defineStore
} = Pinia;

/**
 * Pinia是状态管理库
 * 对比Vuex库，Pinia设计团队认为mutation是冗余的
 * 并且它认为在设计store中提倡更加扁平化的管理
 * Vuex中store是采用树状结构，而Pinia认为store都是单独的仓库
 * 内部三个核心内容view -> actions -> state遵循单向数据流
 * 
 * createPinia -> 创建一个统一管理用户定义的store容器 -> pinia
 * defineStore -> 创建拥有state getters actions的store容器
 */

const app = createApp({
  name: 'App',
  template: `
    <div>App</div>
  `
})

app.mount('#app');

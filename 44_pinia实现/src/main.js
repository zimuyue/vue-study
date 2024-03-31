/**
 * Pinia是状态管理库
 * 对比Vuex库，Pinia设计团队认为mutation是冗余的
 * 并且它认为在设计store中提倡更加扁平化的管理
 * Vuex中store是采用树状结构，而Pinia认为store都是单独的仓库
 * 
 * createPinia -> 创建一个统一管理用户定义的store容器 -> pinia
 * defineStore -> 创建拥有state getters actions的store容器
 * 
 * $patch => 更新局部的状态
 * store.$patch({
 *    b: 20,
 *    c: 30
 * })
 * 
 * $reset => 状态回到最初的值（options API）
 * 
 * $subscribe 订阅
 * store.$subscribe(() => {
 *    state状态更新时触发
 * })
 * 
 * $onAction(() => {
 *    调用了action函数的时候，触发onAction => 执行回调函数
 * })
 * 
 * $dispose() => 作用域内响应式停止
 * computed watch watchEffect -> scope.stop()
 */
const { createApp } = Vue;
import './style.css'
import App from './App.vue'
import { createPinia } from './modules/pinia/index.js';
// const { createPinia } = Pinia;

const pinia = createPinia();

console.log(pinia);

pinia.use(function ({ store }) {
  const localState = JSON.parse(localStorage.getItem('PINIA_STATE_' + store.$id) || `{
    "count": 0,
    "todoList": []
  }`);

  store.$state = localState;

  store.$subscribe(({ storeId }, state) => {
    localStorage.setItem('PINIA_STATE_' + storeId, JSON.stringify(state));
  });

  store.$onAction(() => {
    console.log('已调用action');
  });

  return {
    a: 1
  }
})

createApp(App).use(pinia).mount('#app')

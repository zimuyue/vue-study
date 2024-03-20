/**
 * Vue3中想要在Vue全局对象身上挂载属性和方式
 * 使用Vue.config.globalProperties形式，访问到全局属性对象
 * 用于替代Vue2中Vue.prototype的挂载方式
 * 
 * Vue3中想要在setup中使用this
 * 需要调用getCurrentInstance方法，返回instance实例
 * 如果是想要获取全局属性对象身上挂载的属性和方法
 * instance.proxy代理对象或者instance.appContext.config.globalProperties
 * 
 * Vue3中不推荐在setup上使用此方法
 * 因为在setup中编写的是组合式API，不需要去获取实例
 * 完全可以将业务功能封装在外面，拿进来setup中使用
 */

export default {
  install (app) {
    app.provide('globalProperties', {
      a: 1,
      b: 2,
      $http
    });
  }
}

function $http () {
  console.log('http');
}
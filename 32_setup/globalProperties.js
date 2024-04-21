/*
  Vue3 中想要在 Vue 全局对象身上挂载属性和方式
  使用 Vue.config.globalProperties 形式，访问到全局属性对象
  用于替代 Vue2 中 Vue.prototype 的挂载方式

  Vue3 中想要在 setup 中使用 this
  需要调用 getCurrentInstance 方法，返回 instance 实例
  如果是想要获取全局属性对象身上挂载的属性和方法
  通过 instance.proxy 代理对象
  或者 instance.appContext.config.globalProperties

  Vue3 中不推荐在 setup 上使用此方法获取 this
  因为在 setup 中编写的是组合式 API，不需要去获取实例
  完全可以将业务功能封装在外面，拿到 setup 中使用
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
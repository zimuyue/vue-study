/*
  Vue 框架设计将 options 中每个模块功能编写方式都给开发者定义好了
  例如 data method computed watch 等等
  开发者只需要根据 Vue 设计的框架内进行填充内容即可
  这样的模式会产生一个问题，开发者很难在 Vue 框架内扩展自定义功能
  所以要使用原本的 JS 中一些特性和设计模式来优化这种方案

  通过派发器设计模型，来改造组件的逻辑部分

  使用 method 操作 data 数据
  有些时候开发者在使用时并不希望使 method 中逻辑部分过于臃肿
  所以要进行抽离逻辑功能，来达成分离的目标，使得代码更加简单纯粹
  通过 type 类型去触发相应的事件，找到对应的逻辑，逻辑再通过 type 类型
  去触发派发器操作数据的改变
  type -> 事件 -> 逻辑 -> type -> 派发器 -> data
  使 method 内容进行横向拓展，解决臃肿问题

  例如 vuex redux 使用了类似于这种派发器的思想
*/

import router from './router.js';

const app = Vue.createApp({
  name: 'App',
  template: `
    <div>
      <h1>Hello Counter!</h1>
      <router-view></router-view>
    </div>
  `
})

app.use(router).mount('#app');

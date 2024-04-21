/*
  派发器模式
  Vue 框架提供组件化开发模式，数据的双向绑定以及模块化
  Vue 组件内部编写的 script 脚本内容遵循强规范
  将 options API 中每个模块功能编写方式都给开发者定义好了
  例如 data method computed watch 等等
  开发者只需要根据 Vue 设计的框架内进行填充内容即可上手快
  这样的模式会产生一个问题
  开发者很难在 Vue 框架基础上利用自己的思想模式去开发扩展性差
  所以要使用原本的 JS 中一些特性和设计模式来优化这种方案

  本质上操作使用 method 去操作 data 数据
  但是有些时候开发者在使用时并不希望使 method 中逻辑部分过于臃肿
  所以要进行抽离逻辑功能，来达成分离的目标，使得代码更加简单纯粹

  实现目标
  通过一个 type 去触发一个事件，通过事件找到相应的逻辑
  逻辑部分再通过 type 去触发对应的派发器去操作数据的改变

  将 method 内容进行拆分，横向拓展，解决臃肿问题
  例如 vuex redux 都使用了派发器的思想，只不过在原有基础上增加了 store 的功能

  type
  dispatch
  reducer
*/

import router from './router.js';

const app = Vue.createApp({
  name: 'App',
  template: `
    <div>
      <h1>Hello Developer!</h1>
      <router-view></router-view>
    </div>
  `
})

app.use(router).mount('#app');

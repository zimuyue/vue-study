/*
  Vue 是一个渐进式框架，只关心用户界面 view 层的视图渲染
  提供自下而上的开发流程，官方提供了很多的社区生态如 Vuex、vue-router 等等
  这些库你可以选择集成到项目中去，与 Angular 相比 Angular 更像是一个综合性大型框架
  提供自上而下的开发流程，提供项目应用、状态管理，通常用来开发大型项目

  Vue 的核心（系统）模板语法 -> 核心库 -> 编译模板 -> 渲染DOM

  Vue 框架设计采用了 MVVM 模型的策略，完成了数据双向绑定的机制
  我们的业务关注点全部可以放到业务逻辑层
  视图层交给了 ViewModel 帮我们完成数据绑定、渲染和更新

  Vue 将数据与 DOM 进行关联，并建立响应式关联，数据改变，视图更新
*/

/*
  数据绑定 & 数据流
  数据绑定是指数据与视图渲染的直接关系
  1. Reacts 是单向数据绑定，通过绑定 event 事件来更改 state 状态，导致视图更新
  2. Vue 是双向数据绑定，通过绑定 event 事件来更改 data 状态导致视图更新
     另一方面通过 v-model 绑定 input 事件，视图更新导致 data 状态变更

  数据流是指父子组件中数据按照什么方向流动
  Vue/React 都是单向数据流，通过父组件 state 向子组件传递 props 数据
  子组件是无法通过更改 props 导致父组件 state 状态变更，这样是不被允许的
  props: immutable value
  state/data: mutable value
*/

/*
  Vue 组件化系统是 Vue 的核心，通过多个组件实例构建组件树
  Vue 组件系统的构建利用 ES 模块化来创建

  组件化 -> 抽象小型、独立、可预先定义配置的、可复用的组件
  小型 -> 页面的构成拆分成一个一个的小单元
  独立 -> 每一个小单元尽可能都独立开发
  预先定义 -> 小单元都可以先定义好，在需要的时候导入使用
  预先配置 -> 小单元可以接收一些在使用的时候需要的一些配置
  可复用 -> 小单元可以在多个地方使用

  可复用性要适当的考量，有些组件确实是不需要复用，可配置性越高，功能性就越强
  组件最大的作用是独立开发、预先配置，为了更好的维护和扩展
*/

/*
  根组件实例
  本质上就是一个对象 {}
  createApp 执行的时候需要一个根组件 createApp({})
  根组件是 Vue 渲染的起点

  根元素是一个 HTML 元素
  createApp 执行创建 Vue 应用实例时，需要一个 HTML 根元素
  <div id="app"></div>
  将创建好的根组件实例，挂载到对应的 HTML 元素上
*/
const App = {
  data () {
    return {
      title: 'This is a TITLE',
      content: 'This is a CONTENT'
    }
  },
  template: `
    <div>
      <MyTitle :content="content">{{ title }}</MyTitle>
    </div>
  `,
  methods: {
    toLowerCase () {
      this.content = this.content.toLowerCase();
    }
  },
  mounted () {
    console.log('根组件实例', this);
  }
}

/*
  应用实例
  通过 createApp 创建 App 返回一个应用实例
  应用实例主要是用来注册全局组件

  实例上暴露了很多方法
  component 注册组件
  directive 注册指令
  filter    注册过滤器
  use       使用插件
  大多数这样的方法都会返回 createApp 创建出来的应用实例，允许链式操作
*/
const app = Vue.createApp(App);

const app2 = app.component('MyTitle', {
  props: ['content'],
  template: `
    <h1 :title="content">
      <slot></slot>
    </h1>
  `
})

console.log(app2 === app); // true

console.log('应用实例', app2);

/*
  组件实例
  每创建一个组件都会有自己的组件实例
  一个应用中所有的组件都共享一个应用实例
  无论是根组件还是应用内其他的组件，配置选项、组件行为都是一样的

  组件实例可以添加一些属性 property

  data/props/components/methods .......
  this -> $attrs/$emit Vue组件实例内置方法 $
*/
const vm = app.mount('#app');

console.log('组件实例', vm);

/*
  Vue 生命周期函数
  组件实例在创建时经历的过程，对应每个阶段的钩子函数
  首先 Vue 会进行初始化事件和生命周期函数
  调用 beforeCreate 方法，开始进行创建前工作
  初始化注入项以及绑定组件实例的响应式对象
  调用 created 方法，然后去挂载节点
  根据 el 与 template 选项传递，如果有 template 则去编译生成渲染函数
  如果没有 template 则取 el 的 outerHTML 作为模板
  调用 beforeMount 方法，创建 vm.$el 去替换 el，就是整个模板编译的过程
  调用 mounted 方法，挂载完毕

  当组件实例内数据触发更新时，调用 beforeUpdate 方法
  生成虚拟 DOM 树与真实 DOM 进行对比，找出差异化节点，采取就地更新原则
  进行打补丁，最终将真实 DOM 渲染到视图上面，调用 updated 方法
  当组件调用 vm.$destroy 时，调用 beforeDestory 方法
  解除组件绑定的监听器、子组件、事件处理函数，调用 destroyed 方法
  https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
*/

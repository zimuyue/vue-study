/*
  Vue 是一个渐进式框架提供自下而上的开发流程
  官方提供了很多社区生态库例如 Vuex/vue-router 等
  这些第三方库你可以根据需求选择集成到项目中去

  Vue 框架的核心是它强大的模板编译系统
  通过内部核心库去编译模板生成 DOM 树渲染页面

  Vue 框架借鉴了 MVVM 模型的策略
  完成了数据双向绑定的机制，帮助开发人员只关注于数据逻辑层面的开发
  对于如何渲染视图、DOM 如何与数据做关联、绑定事件处理函数都是由 vm 帮我们来做
  大大减小了开发人员的心智分担，便于上手开发，玩具

  Vue 数据绑定是双向的
  通过给 DOM 元素绑定事件处理函数，行为的触发更改 data 数据导致视图的更新
  通过 v-model 绑定 input 事件，视图的变更触发 data 数据的变更

  Vue 数据流动
  Vue 与 React 一样都是遵循单向数据流
  即通过父组件管理 state 状态，向子组件传递 props 数据
  而子组件是不可以通过更改 props 影响父组件 state 状态
  这样是不被允许的，如果是兄弟组件使用相同的 props 数据会导致数据流混乱

  Vue 组件化系统
  通过多个组件实例来构建组件树，使用 ES 模块化来创建管理
  组件是抽象、小型、独立、可预先定义配置的可复用组件
  组件化最大的作用是独立开发、预先配置，为了更好的扩展与维护

  Vue 指令语法
  所有在 Vue 中模版上中 v-* 属性都是指令
  通过指令指示模板应该按照怎样的逻辑进行渲染和绑定行为
  v-if/for/show/model/on/bind/html/once/slot

  Vue 事件修饰符
  目的在与把事件处理函数中非纯逻辑的程序分离出去
  prevent/stop/capture/self/once/passive
*/

/*
  Vue 根组件实例
  本质上就是一个对象 App createApp(App)
  将创建好的根组件实例挂载到对应的 HTML 元素上
  <div id="app"></div>
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
  }
}

/*
  Vue 应用实例
  通过 createApp(App) 执行返回一个应用实例
  应用实例主要是用来注册全局组件，同时对外暴漏了很多方法
  component/directive/filter/use
  这些方法都会返回应用实例允许链式操作
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

console.log('应用实例', app2 === app); // true

/*
  Vue 组件实例
  一个应用中所有的组件都共享一个应用实例
  组件内可配置项 data/props/components/methods
  this -> $attrs/$emit 组件实例内置方法 $
*/
const vm = app.mount('#app');

console.log('组件实例', vm);

/*
  在创建 Vue 应用时都做了哪些事
  在 new Vue(options) 创建应用实例前做一些初始化工作

  beforeCreate()

  初始化事件函数以及向自身原型上挂载一些方法
  通过传递的 options 配置对象中的 data 数据进行代理
  向 vm 身上挂载 $data 好处就是为了避免用户直接操作数据源，防止数据污染

  形成代理对象后，开始对 data 数据绑定响应式
  通过 Object.defineProperty 绑定 getter 与 setter 函数
  getter 函数的触发返回当前的属性值，同时触发依赖收集
  setter 函数的触发更新当前的属性值，通知依赖视图更新
  这里 Vue 使用了消息订阅与发布模式通过 Dep 类对模板中插值语法引用的属性
  进行依赖收集，当数据发生变更时通知对应的回调函数去更新视图

  然后开始初始化 options 中其它的配置，例如 computed/methods/watch

  对 computed 对象中数据绑定响应式，同时解析 computed getter 函数中的依赖项
  对这些依赖项也就是 data 里面的数据进行依赖收集，data 数据的更新调用计算属性的更新
  同时缓存当前的计算结果，下次更新前对比新旧值

  对 methods 对象中的方法进行绑定，将 methods 中方法绑定到 vm 对象身上
  使用户可以直接使用 this.xxx() 来调用方法

  对 watch 对象中的观察数据进行收集，创建一个观察池
  将观察的对应 vm data 属性值添加至池子中，同时记录回调函数
  当观察的 data 数据更新时也就是 setter 函数触发时
  调用用户传递的回调函数传递新旧值，供用户使用

  options 中配置项全部初始化完毕后
  created()
  此时可以在组件中通过 this.xxx 访问 data 中的数据，进行一些副作用操作

  beforeMount()
  准备开始进行模板编译

  将组件中 template 模板解析为 AST 树
  解析 AST 树的目的是 Vue 自身提供了大量的指令语法、自定义指令等
  解析过程通俗点来讲其实就是模板字符串替换，通过内部的一套流程规则进行匹配替换
  例如从起始标签开始匹配，记录当前元素的节点类型、属性、样式等等，最终生成 AST 树

  将 AST 树转为虚拟 DOM 树
  对树中的节点递归拼接 _c _v _s 方法，生成渲染函数
  调用 $mount 方法触发 render

  mounted()
  此时可以通过 this.$refs 访问页面中的真实节点，初识化渲染完成

  数据更新
  beforeUpdate()
  此时访问 data 中的数据还是旧数据

  Vue 会根据 diff 算法进行虚拟 DOM 与真实 DOM 对比，找出差异化的节点
  采取就地更新策略，开始打补丁，最终将真实 DOM 渲染到视图中

  updated()
  此时访问 data 中的数据是更新后的值

  当触发 vm.$destroy()
  beforeDestory()
  这里可以做一些收尾工作，例如解除组件的事件监听器、定时器等一些副作用操作
  此时还可以通过 this.$refs 访问页面中的真实节点

  destroyed()
  实例销毁，生命周期结束
*/

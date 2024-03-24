/**
 * 应用实例
 * 通过createApp创建App返回一个应用实例
 * 应用实例主要是用来注册全局组件
 * 
 * 实例上暴露了很多方法
 * component 注册组件
 * directive 注册指令
 * filter    注册过滤器
 * use       使用插件
 * 大多数这样的方法都会返回createApp创建出来的应用实例，允许链式操作
 */

// const app = Vue.createApp({});

// 返回原本的应用实例
// const app2 = app.component('MyTitle', {
//   data () {
//     return {
//       title: 'I LOVE VUE!!!'
//     }
//   },
//   template: `<h1 v-to-lower-case>{{ title }}</h1>`
// }).directive('toLowerCase', {
//   mounted (el) {
//     el.addEventListener('click', function () {
//       this.innerText = this.innerText.toLowerCase();
//     }, false);
//   }
// }).mount('#app');

// console.log(app2 === app); // true

// app.mount('#app');

// --------------------------------------------------

/**
 * 根组件实例
 * 本质上就是一个对象 {}
 * createApp执行的时候需要一个根组件createApp({})
 * 根组件是Vue渲染的起点
 * 
 * 根元素是一个HTML元素
 * createApp执行创建Vue应用实例时，需要一个HTML根元素
 * <div id="app"></div>
 * 将创建好的根组件实例，挂载到对应的HTML元素上
 */

// const RootComponent = {
//   data () {
//     return {
//       a: 1,
//       b: 2,
//       total: 0
//     }
//   },
//   mounted () {
//     this.plus();
//   },
//   methods: {
//     plus () {
//       this.total = this.a + this.b;
//     }
//   },
//   template: `<h1>{{ a }} + {{b}} = {{ total }}</h1>`
// }

// const app = Vue.createApp(RootComponent);

// --------------------------------------------------

/**
 * 组件实例
 * 每创建一个组件都会有自己的组件实例
 * 一个应用中所有的组件都共享一个应用实例
 * 无论是根组件还是应用内其他的组件，配置选项、组件行为都是一样的
 * 
 * 组件实例可以添加一些属性 property
 * 
 * data/props/components/methods .......
 * this -> $attrs/$emit Vue组件实例内置方法 $
 */

 const MyTitle = {
  props: ['content'],
  template: `
    <h1 :title="content">
      <slot></slot>
    </h1>
  `,
  mounted () {
    console.log(this);
  }
};

const MyAuthor = {
  template: `
    <p>
      Author: <slot></slot>
    </p>
  `
}

const MyContent = {
  template: `
    <p @click="toLowerCase"><slot></slot></p>
  `,
  methods: {
    toLowerCase () {
      this.$emit('to-lower-case');
    }
  }
}

const App = {
  components: {
    /** title  author content  */
    MyTitle,
    MyAuthor,
    MyContent
  },
  data () {
    return {
      title: 'This is a TITLE',
      author: 'Xiaoye',
      content: 'This is a CONTENT'
    }
  },
  template: `
    <div>
      <MyTitle :content="content">{{ title }}</MyTitle>
      <MyAuthor>{{ author }}</MyAuthor>
      <MyContent @to-lower-case="toLowerCase">{{ content }}</MyContent>
    </div>
  `,
  methods: {
    toLowerCase () {
      this.content = this.content.toLowerCase();
    }
  }
}

const app = Vue.createApp(App);

const vm = app.mount('#app');

console.log(vm);

// --------------------------------------------------

/**
 * Vue生命周期函数
 * 组件实例在创建时经历的过程，对应每个阶段的钩子函数
 * 首先Vue会进行初始化事件和生命周期函数
 * 调用beforeCreate方法，开始进行创建前工作
 * 初始化注入项以及绑定组件实例的响应式对象
 * 调用created方法，然后去挂载节点
 * 根据el与template选项传递，如果有template则去编译生成渲染函数
 * 如果没有template则取el的outerHTML作为模板
 * 调用beforeMount方法，创建vm.$el去替换el，就是整个模板编译的过程
 * 调用mounted方法，挂载完毕
 * 当组件实例内数据触发更新时，调用beforeUpdate方法
 * 生成虚拟DOM树与真实DOM进行对比，找出差异化节点，采取就地更新原则
 * 进行打补丁，最终将真实DOM渲染到视图上面，调用updated方法
 * 当组件调用vm.$destroy时，调用beforeDestory方法
 * 解除组件绑定的监听器、子组件、事件处理函数，调用destroyed方法
 * https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
 */

/**
 * 应用实例 和 组件实例 根组件实例
 * 
 * 应用实例
 * createApp -> 创建APP -> 返回一个应用实例
 * 应用实例主要是用来注册全局组件
 */

// Application 应用
// const app = Vue.createApp({});

/**
 * 实例上暴露了很多方法
 * component 注册组件
 * directive 注册指令
 * filter    注册过滤器
 * use       使用插件
 * 
 * 大多数这样的方法都会返回createApp创建出来的应用实例
 * 允许链式操作
 */

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

// console.log(app2 === app);

// app.mount('#app');

// -------------------------

/**
 * 根组件的本质就是一个对象 {}
 * createApp执行的时候需要一个根组件  createApp({})
 * 根组件是Vue渲染的起点
 * 
 * 根元素是一个HTML元素
 * createApp执行创建Vue应用实例时，需要一个HTML根元素
 * <div id="app"></div>
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

/**
 * mount方法执行返回的是根组件实例
 * vm -> ViewModel -> MVVM -> VM
 * Vue不是一个完整的MVVM模型
 */
// const vm = app.mount('#app');

// console.log(vm.a, vm.b, vm.total);
// console.log(app);

// ------------------------------------------

/**
 * 每个组件都有自己的组件实例
 * 一个应用中所有的组件都共享一个应用实例
 * 无论是根组件还是应用内其他的组件，
 * 配置选项、组件行为都是一样的
 * 
 * 组件实例可以添加一些属性 property
 * 
 * data/props/components/methods .......
 * this -> $attrs/$emit Vue组件实例内置方法 $
 */

//  const MyTitle = {
//   props: ['content'],
//   template: `
//     <h1 :title="content">
//       <slot></slot>
//     </h1>
//   `,
//   mounted () {
//     console.log(this);
//   }
// };

// const MyAuthor = {
//   template: `
//     <p>
//       Author: <slot></slot>
//     </p>
//   `
// }

// const MyContent = {
//   template: `
//     <p @click="toLowerCase"><slot></slot></p>
//   `,
//   methods: {
//     toLowerCase () {
//       this.$emit('to-lower-case');
//     }
//   }
// }

// const App = {
//   components: {
//     /** title  author content  */
//     MyTitle,
//     MyAuthor,
//     MyContent
//   },
//   data () {
//     return {
//       title: 'This is a TITLE',
//       author: 'Xiaoye',
//       content: 'This is a CONTENT'
//     }
//   },
//   template: `
//     <div>
//       <my-title :content="content">{{ title }}</my-title>
//       <my-author>{{ author }}</my-author>
//       <my-content @to-lower-case="toLowerCase">{{ content }}</my-content>
//     </div>
//   `,
//   methods: {
//     toLowerCase () {
//       this.content = this.content.toLowerCase();
//     }
//   }
// }

// const app = Vue.createApp(App);

// const vm = app.mount('#app');

// console.log(vm);

// ---------------------

/**
 * 生命周期函数
 * 
 * 组件是有初始化过程的
 * 在这个过程中，Vue提供了很多每个阶段运行的函数
 * 函数会在对应的初始化阶段自动运行
 */

const MyTitle = {
  template: `
    <h1>
      <slot></slot>
    </h1>
  `
};

const MyAuthor = {
  template: `
    <p>
      Author: <slot></slot>
    </p>
  `
}

// const MyContent = {
//   template: `
//     <p><slot></slot></p>
//   `
// }

// const App = {
//   components: {
//     /** title  author content  */
//     MyTitle,
//     MyAuthor,
//     MyContent
//   },
//   data () {
//     return {
//       title: 'This is a TITLE',
//       author: 'Xiaoye',
//       content: 'This is a CONTENT',
//       beforeInit: new Date().getTime()
//     }
//   },
//   template: `
//     <div>
//       <my-title>{{ title }}</my-title>
//       <my-author>{{ author }}</my-author>
//       <my-content>{{ content }}</my-content>
//     </div>
//   `,
//   beforeCreate () {
//     this.beforeInit = new Date().getTime();
//   },
//   mounted () {
//     console.log((new Date().getTime()) - this.beforeInit);
//   }
// }

// Vue.createApp(App).mount('#app');

// data () {
//   return {
//     number: 123
//   }
// }

// <span>{{ number }}</span>

// {
//   'span',
//   null,
//   '123'
// }

// {
//   'span',
//   null,
//   '234'
// }

// 不进行更新渲染

// // span.innerText = 123;

// this.number = 123;
// this.number = 234;
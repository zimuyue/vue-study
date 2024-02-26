/**
 * directive 指令
 * 
 * 所有在Vue中，模版上属性的v-*都是指令
 * 
 * 为什么叫指令？
 * 模板应该按照怎样的逻辑进行渲染和绑定行为
 * 
 * Vue提供了大量的内置指令 
 * v-if v-for v-show v-model v-on v-bind v-html v-once v-slot
 * 
 * 开发者也可以给Vue扩展指令 -> 自定义指令  v-取名
 */

// -----------------------------------------------

/**
 * v-once 一次插值，永不更新  不建议使用
 * 
 */

// const TITLE = 'This is my Title';

// const App = {
//   data () {
//     return {
//       title: 'This is my Title',
//       author: 'ming'
//     }
//   },
//   // v-once影响标签内部所有变量包括嵌套标签
//   // 视图上Vue指定的插入方式的数据变量必须声明在实例上
//   // template: `
//   //   <div>
//   //     <h1 v-once>{{ title }} - <span>{{ author }}</span></h1>
//   //     <button @click="change">Change</button>
//   //   </div>
//   // `,

//   // 使用ES6的方式解决这个问题
//   template: `
//     <div>
//       <h1>${ TITLE } - <span>{{ author }}</span></h1>
//       <button @click="change">Change</button>
//     </div>
//   `,
//   methods: {
//     change () {
//       this.title = 'This is your Title';
//       this.author = 'mingming';
//     }
//   }
// }

// -----------------------------------------------

/**
 * v-html
 * 出于安全原因，插值语法不会解析HTML
 * 因为插值是JS表达式，没有对DOM的操作  rawHTML -> 纯的HTML
 * 
 * 不要试图用v-html做子模板
 * 因为Vue本身有一个底层的编译系统，而不是直接使用字符串来渲染的
 * 子模板放到子组件中，让模板的重用和组合更强大
 * 不要把用户提供的内容为v-html的插值，这种插值容易导致XSS攻击
 * 
 * v-html动态的渲染HTML，使用基本是innerHTML
 * 
 * innerHTML有时候会容易导致XSS攻击
 * 
 */

// 利用innerHTML输入脚本进行攻击
// var text = '<img src="123" onerror="alert(123)" />';
// document.getElementById('app').innerHTML = text;

const App = {
  data () {
    return {
      // title: 'This is my Title',
      title: '<h1>This is my Title</h1>',
    }
  },
  // template: `
  //   <div>
  //     {{ '<h1>' + title + '</h1>' }}
  //   </div>
  // `
  template: `
    <div v-html="title"></div>
  `
}

Vue.createApp(App).mount('#app');

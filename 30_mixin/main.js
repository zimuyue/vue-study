/*
  mixin 混入 options 选项对象
  Vue 会将 mixin 对象与组件或者全局实例，选项进行合并

  注意的点：
  1. 选项中有冲突的时候，组件自身的内容优先
  2. 钩子函数的执行顺序，先 mixin，再执行组件的
  3. 对象的 option, methods, components, directives 
     合并对象时，同名的组件内优先

  缺点：
  1. 用于多个组件的时候，可能会多出很多不必要的选项或属性
     很可能会无限拆分 mixin, 或可能会导致命名冲突
  2. 不是函数，没办法动态传参调整 mixin 的 option 的混入情况
     极大干扰了 mixin 的合理性复用
*/

const testMixin =  {
  data () {
    return {
      title: 'This is TEST',
      content: 'This is CONTENT',
      author: 'Test'
    }
  },
  mounted () {
    console.log('This is TEST MIXIN');
  },
  methods: {
    doMixin () {
      console.log('doMixin');
    },
    doComponent () {
      console.log('do Mixin Component');
    }
  }
}

const app = Vue.createApp({
  name: 'App',
  template: `
    <Test></Test>
  `
});

// 注册全局组件
app.component('Test', {
  name: 'Test',
  mixins: [
    testMixin
  ],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ author }}</p>
      <p>{{ content }}</p>
      <button @click="doComponent">CLICK</button>
    </div>
  `,
  data () {
    return {
      title: 'This is TITLE 1',
      content: 'This is CONTENT 1'
    }
  },
  mounted () {
    console.log('This is TEST 1');
    console.log(this);
  },
  methods: {
    doComponent () {
      console.log('doComponent');
    }
  }
})

// 全局注册mixin
app.mixin(testMixin).mount('#app');

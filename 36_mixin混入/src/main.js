/**
 * mixin混入options选项对象
 * Vue会将mixin对象与组件或者全局实例，选项进行合并
 * 
 * 注意的点：
 * 1. 选项中有冲突的时候，组件自身的内容优先
 * 2. 钩子函数的执行顺序，先mixin，再执行组件的
 * 3. 对象的option, methods, components, directives
 *    合并对象，同名，组件内的优先
 * 
 * 不足：
 * 1. 用于多个组件的时候，可能会多出很多不必要的选项或属性
 *    很可能会无限拆分mixin, 或可能会导致命名冲突
 * 2. 不是函数，没办法动态传参调整mixin的option的混入情况
 *    极大干扰了mixin的合理性复用
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
    <test></test>
  `
});

// 注册全局组件
app.component('test', {
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

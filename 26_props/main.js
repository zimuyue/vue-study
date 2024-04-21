/*
  传递的 attr 书写格式 kebab-case

  单向数据流
  一种组件化中的数据流向的规范
  数据总是从父组件向子组件流动 
  子组件不可以改变父组件流入的数据（属性 props）

  子组件 -> 更改数据 -> 数据属于父组件定义的

  v-bind="obj" => :a="obj.a" :b="obj.b"
  v-bind:obj="obj"
*/

const app = Vue.createApp({
  name: 'App',
  data () {
    return {
      count: 10,
      status: 'success'
    }
  },
  template: `
    <MyButton
      btn-type="warning" 
      :count="count" 
      :status="status"
    >Click</MyButton>
  `
})

app.component('MyButton', {
  name: 'MyButton',
  props: {
    // null undefined 可以通过任何的数据类型检查
    count: Number,
    // 多个类型定义
    status: [ Number, String ],
    // 对象方式定义 prop
    btnType: {
      type: String,
      default: ''
    }
  },
  template: `
    <button :type="btnType" @click="logCount">
      <slot></slot>
    </button>
  `,
  methods: {
    logCount () {
      console.log(this.count + 1);
    }
  }
})

app.mount('#app');

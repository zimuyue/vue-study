/*
  如何利用在组件上传递 attribute 让子组件能够获取并使用他们
  非 props 的 attributes 传递

  单个的根元素
  使用组件时传递的所有属性，都会增加到根元素上
  attributes 继承

  如果不希望子组件中根元素继承传递的属性，可以禁用继承
  inheritAttrs=false

  fallthrough  穿透
*/

const app = Vue.createApp({
  name: 'App',
  data () {
    return {
      selectorValue: '3'
    }
  },
  template: `
    <div>
      <MySelector 
        :value="selectorValue"
        model="123"
        id="mySelector"
        class="my-selector"
        @change="changeOption"
      />
      <LoginBox autofocus />
    </div>
  `,
  methods: {
    changeOption (e) {
      const value = e.target.value;
      console.log(value);
    }
  }
})

app.component('MySelector', {
  name: 'MySelector',
  // v-bind="$attrs"
  // 这样的绑定的方式具有平铺属性的作用
  template: `
    <select v-bind="$attrs">
      <option value="1">选项1</option>
      <option value="2">选项2</option>
      <option value="3">选项3</option>
    </select>
  `
})

app.component('LoginBox', {
  name: 'LoginBox',
  inheritAttrs: false,
  template: `
    <div>
      <input type="text" v-bind="$attrs" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  `
})

app.mount('#app');

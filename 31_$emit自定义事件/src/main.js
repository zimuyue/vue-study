
const app = Vue.createApp({
  name: 'App',
  data () {
    return {
      myName: 'mingming'
    }
  },
  template: `
    <div>
      <counter @add-my-count="addMyCount"></counter>
      <my-input v-model:my-name.prefixer="myName"></my-input>
    </div>
  `,
  methods: {
    addMyCount () {
      console.log('Count!')
    }
  }
})

app.component('counter', {
  name: 'Counter',
  // 事件名：camcelCase
  // 注册自定义事件
  // 更好的记录组件的工作流程
  emits: ['addMyCount'],
  template: `
    <button @click="$emit('addMyCount')">Add my Count</button>
  `
})


app.component('my-input', {
  name: 'MyInput',
  props: {
    myName: String,
    // v-model绑定的值自定义修饰符
    myNameModifiers: {
      default: () => ({})
    }
  },
  created () {
    console.log(123);
    console.log(this.myNameModifiers);
  },
  // v-model默认绑定的事件update
  emits: ['update:myName'],
  methods: {
    emitName (e) {
      let inputValue = e.target.value;

      if (this.myNameModifiers.prefixer && !inputValue.match(/UP主：/)) {
        inputValue = 'UP主：' + inputValue;
      }

      this.$emit('update:myName', inputValue);
    }
  },
  template: `
    <div>
      <h1>{{ myName }}</h1>
      <input type="text" :value="myName" @input="emitName" />
    </div>
  `
})

app.mount('#app');

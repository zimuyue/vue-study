const app = Vue.createApp({
  name: 'App',
  data () {
    return {
      myName: 'ming'
    }
  },
  template: `
    <div>
      <Counter @add-my-count="addMyCount" />
      <MyInput v-model:my-name.prefixer="myName" />
    </div>
  `,
  methods: {
    addMyCount () {
      console.log('Count!')
    }
  }
})

app.component('Counter', {
  name: 'Counter',
  // 事件名：camcelCase
  // 注册自定义事件
  // 更好的记录组件的工作流程
  emits: ['addMyCount'],
  template: `
    <button @click="$emit('addMyCount')">Add my Count</button>
  `
})


app.component('MyInput', {
  name: 'MyInput',
  props: {
    myName: String,
    // v-model 绑定的值自定义修饰符
    myNameModifiers: {
      default: () => ({})
    }
  },
  created () {
    console.log(123);
    console.log(this.myNameModifiers);
  },
  // v-model 默认绑定的事件 update
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

/*
  ref -> reference 引用
  引用 DOM 节点、引用组件实例
  尽量避免去使用 ref，因为这样的方式直接去操作 DOM 并不符合 MVVM 设计规范
*/

const app = Vue.createApp({
  name: 'App',
  template: `
    <MyTest ref="myTest" />
  `,
  // beforeCreate () {
  //   console.log(this.$refs);
  // },
  // created () {
  //   console.log(this.$refs);
  // },
  // beforeMount () {
  //   console.log(this.$refs);
  // },
  mounted () {
    // 只有当组件节点挂载后才能取到绑定的 refs

    // $refs 本身并不是响应式的，所以不要在模板中使用
    // 不要在计算属性中访问
    console.log(this.$refs);

    // 不要尝试去更改 ref
    // ref 提供给你获取 DOM 节点或组件实例引用
    // [Vue warn] Set operation on key "myTest" failed: target is readonly. 
    const oLink = document.createElement('a');
    oLink.innerText = 'Google';
    oLink.href = 'https://www.google.com';
    // this.$refs.myTest = oLink;

    console.log('mounted:', this.$refs.myTest);
    
    this.$nextTick(() => {
      console.log('$nextTick:', this.$refs.myTest);
    });
  },
  methods: {
    handleClick () {
      // 通过 $refs 直接操作子组件内数据
      this.$refs.myTest.count ++;
      console.log(this.$refs.myTest.count);
    }
  }
})

app.component('MyTest', {
  name: 'MyTest',
  template: `
    <button @click="handleLog">点击</button>
  `,
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleLog () {
      this.addCount();
    },
    addCount () {
      this.count ++;
      console.log(this.count);
    }
  }
})

app.mount('#app');

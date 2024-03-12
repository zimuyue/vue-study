<template>
  <div ref="loginBox">
    <p v-if="showWhat === 'input'">
      Username: <input type="text" ref="myRef" />
    </p>
    <p v-else-if="showWhat === 'link'">
      <a href="https://www.google.com" ref="myRef">Google</a>
    </p>
    <p>
      Password: <input type="password" />
    </p>
  </div>
  <div>
    <my-test ref="myTest"></my-test>
    <button @click="handleClick">click</button>

    <login-board :needReset="true"></login-board>
  </div>
</template>

<script>
/**
 * ref -> reference 引用
 * 引用DOM节点、引用组件实例
 * 尽量避免去使用ref，因为这样的方式直接去操作DOM并不符合MVVM设计规范
 * 
 */

import MyTest from './components/MyTest';

import LoginBoard from './components/LoginBoard';

export default {
  name: 'App',
  components: {
    MyTest,
    LoginBoard
  },
  data () {
    return {
      showWhat: 'input'
    }
  },
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
    // 只有当组件节点挂载后才能取到绑定的refs
    console.log(this.$refs);

    // 不要尝试去更改ref, ref提供给你获取DOM节点或组件实例引用
    // [Vue warn] Set operation on key "myRef" failed: target is readonly. 
    const oLink = document.createElement('a');
    oLink.innerText = 'Google';
    oLink.href = 'https://www.google.com';
    // this.$refs.myRef = oLink;

    console.log(this.$refs.myRef);
    this.showWhat = 'input';
    
    this.$nextTick(() => {
      console.log(this.$refs.myRef);
    });

    // 通过$refs获取DOM元素的偏移量
    this.$refs.myRef.focus();
    console.log(this.$refs.loginBox.offsetHeight);
    
    // $refs本身并不是响应式的，所以不要在模板中使用
    // 不要在计算属性中访问
    console.log(this.$refs);
  },
  methods: {
    handleClick () {
      // 通过$refs直接操作子组件内数据
      this.$refs.myTest.count ++;
      console.log(this.$refs.myTest.count);
    }
  }
}
</script>

<style>

</style>
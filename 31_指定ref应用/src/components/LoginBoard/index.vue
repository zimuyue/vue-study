<template>
  <div>
    <div class="input-box">
      Username: 
      <my-input
        type="text"
        placeholder="Username"
        @set-value="setValue"
        name="username"
        ref="username"
      ></my-input>
    </div>
    <div class="input-box">
      Password: 
      <my-input
        type="password"
        placeholder="Password"
        @set-value="setValue"
        name="password"
        ref="password"
      ></my-input>
    </div>
    <div class="input-box">
      <my-button
        type="success"
        @click="loginAction"
      >Login</my-button>
    </div>
  </div>
</template>

<script>

import MyInput from './MyInput';
import MyButton from './MyButton';

export default {
  name: 'LoginBoard',
  props: ['needReset'],
  components: {
    MyInput,
    MyButton
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginAction () {
      // console.log(this.$refs.username);
      // console.log(this.$refs.password);
      const username = this.$refs.username.value;
      const password = this.$refs.password.value;
      console.log(username, password);

      this.$emit('login', {
        username,
        password
      })
      
      if (this.needReset) {
        this.$refs.username.resetInput();
        this.$refs.password.resetInput();
      }
      
    },
    setValue ({ name, value }) {
      this[name] = value;
    }
  }
}
</script>

<style>

</style>
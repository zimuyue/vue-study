<template>
  <div class="mobile-login">
    <div class="input-box">
      <input type="number" v-model="phoneNumber" placeholder="Mobile phone number" />
    </div>
    <div class="input-box">
      <input type="password" v-model="passcode" placeholder="Mobile passcode" />
      <button class="passcode-btn">Send</button>
    </div>
    <div class="input-box">
      <button>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileLogin',
  data () {
    return {
      phoneNumber: '',
      passcode: ''
    }
  }
}
</script>

<style lang="scss">
 .mobile-login {
    padding: 30px;
    box-sizing: border-box;

    .input-box {
      position: relative;
      height: 34px;
      margin-top: 20px;

      .passcode-btn {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        width: 90px;
      }

      input,
      button {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
</style>
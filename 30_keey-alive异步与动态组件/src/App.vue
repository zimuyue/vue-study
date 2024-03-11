<template>
  <main-login></main-login>
</template>

<script>

/**
 * 登录
 * 
 * 账号密码、扫二维码、手机号
 * 
 * Tab -> 账号密码
 * 
 * 3个选项
 * 
 * 一个组件容器
 * 
 */

import MainLogin from './components/MainLogin'

export default {
  name: 'App',
  components: {
    MainLogin
  }
}
</script>

<style>

</style>
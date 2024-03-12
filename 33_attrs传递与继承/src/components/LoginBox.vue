<template>
  <div>
    <input type="text" v-bind="$attrs" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  inheritAttrs: false
}
</script>

<style>

</style>
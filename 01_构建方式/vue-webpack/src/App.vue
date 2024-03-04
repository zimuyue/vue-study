<template>
  <div class="container">{{ title }}</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Hello Vue!'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #782;
  transition: all .1s;
}
</style>


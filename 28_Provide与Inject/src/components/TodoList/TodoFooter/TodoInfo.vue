<template>
  <span>共 {{ todoLen.value }} 条</span>
</template>

<script>
export default {
  name: 'TodoInfo',
  // 来自于index.vue
  inject: ['todoLen']
}
</script>

<style>

</style>
<template>
  <span>共 {{ todoLen.value }} 条</span>
</template>

<script>
export default {
  name: 'TodoInfo',
  inject: ['todoLen']
}
</script>

<style>

</style>
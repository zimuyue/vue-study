<template>
  <span
    :style="{ textDecoration: item.completed ? 'line-through' : '' }"
  >{{ item.content }}</span>
</template>

<script>
export default {
  name: 'TodoContent',
  props: ['item']
}
</script>

<style>

</style>
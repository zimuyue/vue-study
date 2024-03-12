<template>
  <div>
    <!-- 事件名：camcelCase -->
    <button @click="$emit('switchMyLight')">Switch my light</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  // 注册自定义事件
  // 更好的记录组件的工作流程
  emits: ['switchMyLight']
}
</script>

<style>

</style>
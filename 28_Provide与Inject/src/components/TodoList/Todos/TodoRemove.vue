<template>
  <button @click="removeTodo(item.id)">删除</button>
</template>

<script>
export default {
  name: 'TodoRemove',
  props: ['item'],
  methods: {
    removeTodo (id) {
      this.$emit('removeTodo', id);
    }
  }
}
</script>

<style>

</style>
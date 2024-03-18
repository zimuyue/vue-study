<template>
  <button @click="addTodo">添加</button>
</template>

<script>
export default {
  name: 'TodoButton',
  methods: {
    addTodo () {
      this.$emit('addTodo');
    }
  }
}
</script>

<style>

</style>
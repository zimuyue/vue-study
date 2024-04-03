<template>
  <input 
    type="checkbox"
    :checked="item.completed"
    @click="todoCheck(item.id)"
  />
</template>

<script>
export default {
  name: 'TodoCheck',
  props: ['item'],
  methods: {
    todoCheck (id) {
      this.$emit('todoCheck', id);
    }
  }
}
</script>

<style>

</style>
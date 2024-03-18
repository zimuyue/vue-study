<template>
  <div>
    <todo-info></todo-info>
    <todo-clear
      @remove-all="removeAll"
    ></todo-clear>
  </div>
</template>

<script>

import TodoInfo from './TodoInfo';
import TodoClear from './TodoClear';

export default {
  name: 'TodoFooter',
  components: {
    TodoInfo,
    TodoClear
  },
  methods: {
    removeAll () {
      this.$emit('removeAll');
    }
  }
}
</script>

<style>

</style>
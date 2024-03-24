<template>
  <li>
    <TodoCheck
      :item="item"
      @todo-check="todoCheck"
    />
    <TodoContent :item="item" />
    <TodoRemove
      :item="item"
      @remove-todo="removeTodo"
    />
  </li>
</template>

<script>

import TodoCheck from './TodoCheck';
import TodoContent from './TodoContent';
import TodoRemove from './TodoRemove';

export default {
  name: 'TodoItem',
  props: ['item'],
  components: {
    TodoCheck,
    TodoContent,
    TodoRemove
  },
  methods: {
    todoCheck (id) {
      this.$emit('toggleCompleted', id);
    },
    removeTodo (id) {
      this.$emit('removeTodo', id);
    }
  }
}
</script>

<style>

</style>
<template>
  <li>
    <todo-check
      :item="item"
      @todo-check="todoCheck"
    ></todo-check>
    <todo-content
      :item="item"
    ></todo-content>
    <todo-remove
      :item="item"
      @remove-todo="removeTodo"
    ></todo-remove>
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
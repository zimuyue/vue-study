<template>
  <div>
    <ul v-if="todoLen.value > 0">
      <todo-item
        v-for="item of data"
        :key="item.id"
        :item="item"
        @toggle-completed="toggleCompleted"
        @remove-todo="removeTodo"
      ></todo-item>
    </ul>
    <p v-else>- 当前没有数据 -</p>
  </div>
</template>

<script>

import TodoItem from './TodoItem';

export default {
  name: 'Todos',
  props: ['data'],
  inject: ['todoLen'],
  components: {
    TodoItem
  },
  methods: {
    toggleCompleted (id) {
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
<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model.trim="todoText"
      placeholder="Input what you wanna add!"
    />
  </form>
</template>

<script>
import { ADD } from '../../actions/todoList.js';

export default {
  name: 'TdForm',
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      if (this.todoText.length === 0) {
        return;
      }
      this.$emit('dispatch', ADD, {
        id: Date.now(),
        value: this.todoText,
        completed: false
      })
      this.todoText = '';
    }
  }
}
</script>
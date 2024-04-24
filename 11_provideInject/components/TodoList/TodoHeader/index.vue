<template>
  <div>
    <TodoInput
      ref="todoInput"
      @change-content="changeContent"
    />
    <TodoButton @add-todo="addTodo" />
  </div>
</template>

<script>
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';

export default {
  name: 'TodoHeader',
  components: {
    TodoInput,
    TodoButton
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    changeContent (content) {
      this.content = content;
    },
    addTodo () {
      this.$emit('addTodo', {
        id: new Date().getTime(),
        content: this.content,
        completed: false
      });

      this.$refs.todoInput.reset();
    }
  }
}
</script>
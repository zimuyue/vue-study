<template>
  <div>
    <todo-header
      @add-todo="addTodo"
    ></todo-header>
    <todos
      :data="todoList"
      @toggle-completed="toggleCompleted"
      @remove-todo="removeTodo"
    ></todos>
    <todo-footer
      @remove-all="removeAll"
    ></todo-footer>
  </div>
</template>

<script>

import TodoHeader from './TodoHeader';
import Todos from './Todos';
import TodoFooter from './TodoFooter';

export default {
  name: 'TodoList',
  components: {
    TodoHeader,
    Todos,
    TodoFooter
  },
  // provide: {
  //   placeholder: this.placeholder
  // },
  // provide () {
  //   return {
  //     placeholder: this.placeholder
  //   }
  // },
  provide () {
    return {
      placeholder: Vue.computed(() => this.placeholder),
      todoLen: Vue.computed(() => this.todoList.length)
    }
  },
  // provide () {
  //   return {
  //     todoListIns: this
  //   }
  // },
  data () {
    return {
      todoList: [],
      placeholder: '请输入内容'
    }
  },
  mounted () {
    setTimeout(() => {
      this.placeholder = 'Please input something!!'
    }, 1000);
  },
  methods: {
    addTodo (todo) {
      this.todoList.push(todo);
    },
    toggleCompleted (id) {
      this.todoList = this.todoList.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
    removeTodo (id) {
      this.todoList = this.todoList.filter(item => item.id !== id);
    },
    removeAll () {
      this.todoList = [];
    }
  }
}
</script>

<style>

</style>
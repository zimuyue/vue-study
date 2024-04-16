<template>
  <div>
    <TodoHeader @add-todo="addTodo" />
    <Todos
      :data="todoList"
      @toggle-completed="toggleCompleted"
      @remove-todo="removeTodo"
    />
    <TodoFooter @remove-all="removeAll" />
  </div>
</template>

<script>

import Todos from './Todos';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';

export default {
  name: 'TodoList',
  components: {
    Todos,
    TodoHeader,
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
      // 通过计算属性来实现 provide 数据响应式
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
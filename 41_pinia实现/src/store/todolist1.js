import { defineStore } from '../modules/pinia/index.js';
// const { createPinia } = Pinia;

export default defineStore('todolist1', { // function useStore() {}
  state: () => ({
    todoList: [],
    count: 0
  }),
  getters: { // computed   const count = computed(() => this.todoList.length)
    length () {
      return this.todoList.length;
    },
    doubleCount () {
      return this.count * 2;
    }
  },
  actions: {
    /*
      {
        id: Timestamp
        content: string
        completed: boolean
      }
      
      this => this -> store
    */
    addTodo (todo) {
      this.todoList.unshift(todo);
    },
    toggleTodo (id) {
      this.todoList = this.todoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    },
    removeTodo (id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    }
  }
});
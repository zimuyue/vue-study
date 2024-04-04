import { defineStore } from '../modules/pinia/index.js';
// const { createPinia } = Pinia;
const { computed, ref } = Vue;

/**
 * {
 *   store: {
 *     "todolist1" => store,
 *     "todolist2" => store
 *   }
 * }
 */

export default defineStore('todolist2', () => {
  const todoList = ref([]);
  const count = ref(0);
  const length = computed(() => todoList.value.length);
  const doubleCount = computed(() => count.value * 2);

  function addTodo (todo) {
    todoList.value.unshift(todo);
  }  
  
  function toggleTodo (id) {
    todoList.value = todoList.value.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })
  }

  function removeTodo (id) {
    todoList.value = todoList.value.filter(todo => todo.id !== id);
  }

  return {
    count,
    doubleCount,
    length,
    todoList,
    addTodo,
    toggleTodo,
    removeTodo
  }
});
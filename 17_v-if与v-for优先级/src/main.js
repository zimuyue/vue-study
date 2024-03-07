/**
 * v-if和v-for
 * 
 * 不推荐在同一元素上使用v-if和v-for
 */

const App = {
  data () {
    return {
      todoList: [
        {
          id: 1,
          content: 'CONTENT 1',
          completed: false
        },
        {
          id: 2,
          content: 'CONTENT 2',
          completed: true
        },
        {
          id: 3,
          content: 'CONTENT 3',
          completed: false
        },
      ]
    }
  },
  /**
   * 如果v-for与v-if用于一个元素的使用，v-if的优先级高于v-for
   * 
   * v-if -> todo x
   * v-for -> todo
   * 
   * 在渲染期间，属性todo确实被访问了
   * todo并没有定义在实例上
   */

  /**
   * <!-- <ul v-if="todoList.length > 0"> -->
    <ul v-if="listHasItem">
      <!--<li 
        v-for="todo of todoList" :key="todo.id"
        v-if="!todo.completed"
      >
        {{ todo.content }}
      </li>-->

      <!-- <template v-for="todo of todoList" :key="todo.id">
        <li
          v-if="!todo.completed"
        >{{ todo.content }}</li>
      </template> -->

      <!-- <li
        v-for="todo of NotCompletedTodoList"
        :key="todo.id"
      >
        {{ todo.content }}
      </li> -->

      <!-- <li v-for="todo of todoList" v-if="todoList.length > 0">
        {{ todo.content }}
      </li> -->
      
      <!--<template v-if="todoList.length > 0">
        <li v-for="todo of todoList">
          {{ todo.content }}
        </li>
      </template>-->

      <!-- <li v-for="todo of todoList">
        {{ todo.content }}
      </li> -->

      <!--<li v-for="todo of NotCompletedTodoList" :key="todo.id">
        {{ todo.content }}
      </li>-->

      <--<template v-for="todo of todoList" :key="todo.id">
        <li
          v-if="!todo.completed"
        >{{ todo.content }}</li>
      </template>-->
   * 
   */
  template: `
    <ul>
      <li 
        v-for="todo of todoList" :key="todo.id"
        v-if="todoList.length !== 0"
      >
        {{ todo.content }}
      </li>
    </ul>
  `,
  // computed: {
  //   NotCompletedTodoList () {
  //     return this.todoList.filter(item => !item.completed);
  //   },
  //   listHasItem () {
  //     return this.todoList.length > 0;
  //   }
  // }
}

// const vm = Vue.createApp(App).mount('#app');

/**
 * 逻辑层级来看
 * 
 * if > for
 * 
 * if => 渲染不渲染
 * 
 * for => 怎么渲染
 * 
 * 性能问题
 * 
 */

const vm = new Vue({
  el: '#app',
  template: `
    <ul>
      <li 
        v-for="todo of todoList" :key="todo.id"
        v-if="todoList.length !== 0"
      >
        {{ todo.content }}
      </li>
    </ul>
  `,
  data () {
    return {
      todoList: [
        {
          id: 1,
          content: 'CONTENT 1',
          completed: false
        },
        {
          id: 2,
          content: 'CONTENT 2',
          completed: true
        },
        {
          id: 3,
          content: 'CONTENT 3',
          completed: false
        },
      ]
    }
  },
})

console.log(vm.$options.render);


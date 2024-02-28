/**
 * Vue组件化 -> 核心 组件系统
 * Vue利用ES模块化 -> Vue组件系统的构建
 * 
 * 组件化 - 抽象小型、独立、可预先定义配置的、可复用的组件
 * 小型 -> 页面的构成拆分成一个一个的小单元
 * 独立 -> 每一个小单元尽可能都独立开发
 * 预先定义 -> 小单元都可以先定义好，在需要的时候导入使用。
 * 预先配置 -> 小单元可以接收一些在使用的时候需要的一些配置
 * 可复用 -> 小单元可以在多个地方使用
 * 
 * 可复用性要适当的考量 - 有些组件确实是不需要复用 - 可配置性越高，功能性就越强
 * 组件最大的作用的独立开发、预先配置 - 为了更好的维护和扩展
 * 
 * 组件的嵌套形成了一个组件树
 */

/**
 * {
 *   id: new Date().getTime(),
 *   content: inputValue,
 *   completed: false
 * }
 * 
 * TodoList 组件
 *   data
 *      todoList
 *   methods: 
 *      removeTodo        id
 *      addTodo           inputValue
 *      changeCompleted   id
 *   todo-form  view
 *   todo-list  ul  view
 *     todo-item v-for  view
 */

const { createApp } = Vue;

const TodoList = {
  data () {
    return {
      todoList: [
        {
          id: 1,
          content: '123',
          completed: false
        },
        {
          id: 2,
          content: '234',
          completed: false
        },
        {
          id: 3,
          content: '345',
          completed: false
        },
      ]
    }
  },
  methods: {
    removeTodo (id) {
      this.todoList = this.todoList.filter(item => item.id !== id);
    },
    addTodo (value) {
      // console.log(value);
      this.todoList.push({
        id: new Date().getTime(),
        content: value,
        completed: false
      });
    },
    changeCompleted (id) {
      this.todoList = this.todoList.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    }
  }
}

const app = createApp(TodoList);

app.component('todo-form', {
  data () {
    return {
      inputValue: ''
    }
  },
  template: `
    <div>
      <input type="text" placeholder="请填写" v-model="inputValue" />
      <button @click="addTodo">增加</button>
    </div>
  `,
  methods: {
    addTodo () {
      this.$emit('add-todo', this.inputValue);
      this.inputValue = '';
    }
  }
});

app.component('todo-item', {
  props: ['todo'],
  template: `
    <li>
      <input
        type="checkbox"
        :checked="todo.completed"
        @click="changeCompleted(todo.id)"
      />
      <span
        :style="{
          textDecoration:
            todo.completed
            ? 'line-through'
            : 'none'
        }"
      >
        {{ todo.content }}
      </span>
      <button @click="removeTodo(todo.id)">删除</button>
    </li>
  `,
  methods: {
    changeCompleted (id) {
      this.$emit('change-completed', id);
    },
    removeTodo (id) {
      this.$emit('remove-todo', id);
    }
  }
})

app.mount('#app');
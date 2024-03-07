const TodoList = {
  data () {
    return {
      todoList: [
        /**
         * {
         *   id: new Date().getTime()   代码生成
         *   content: input content,    input text
         *   completed: false, 初始false input checkbox
         * }
         */
      ],
      inputValue: ''
    }
  },
  template: `
    <div>
      <div>
        <input 
          type="text" 
          placeholder="Typing..."
          v-model="inputValue"
        />
        <button @click="addTodo">ADD</button>
      </div>
      <div>
        <ul>
          <template v-if="todoList.length > 0">
            <li v-for="todo of todoList" :key="todo.id">
              <input 
                type="checkbox" 
                :checked="todo.completed"
                @click="toggleTodo(todo.id)"
              />
              <span
                :style="{
                  textDecoration: todo.completed ? 'line-through' : ''
                }"
              >{{ todo.content }}</span>
              <button @click="deleteTodo(todo.id)">DEL</button>
            </li>
          </template>
          <template v-else>
            <li>- No data available -</li>
          </template>
        </ul>
      </div>
    </div>
  `,
  methods: {
    addTodo () {
      
      const _inputValue = this.inputValue.trim();

      if (_inputValue.length === 0) {
        return;
      }

      const hasThisContent = this.todoList.some(todo => todo.content === _inputValue);

      if (hasThisContent) {
        alert('This content existed in todoList');
        return;
      }

      this.todoList.push({
        id: new Date().getTime(),
        content: _inputValue,
        completed: false
      });

      this.inputValue = '';
    },
    deleteTodo (id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
    toggleTodo (id) {
      this.todoList = this.todoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        };

        return todo;
      })
    }
  }
}

export default TodoList;
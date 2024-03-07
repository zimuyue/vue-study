/**
 * 事件处理 -> 绑定事件处理函数
 * 
 * 事件是不需要绑定的
 * 浏览器 -> 自带了许多事件
 * 每个事件可以绑定处理器 -> 处理函数
 * 
 * 事件 -> 用户行为 -> 触发 -> 执行事件对应的的处理函数
 * 
 * 事件 -> 处理函数 -> 进行绑定行为
 * 事件的触发 -> 执行其绑定的处理函数
 * 
 */

// var obj = {
//   a: 1,
//   b: 2
// }

// function test () {
//   console.log(this);
// }

// document.addEventListener('click', test.bind(obj));

/**
 * 绑定事件处理函数 -> x 执行事件处理函数
 * 执行事件处理函数的时机 -> 当前绑定事件处理的事件被触发的时候
 * 
 */

/**
 * const  -> 不变的量
 * let -> 针对可变的量
 * 
 * let -> 方便 、 随时可变（程序的扩展） 一派
 * const -> 不可变的量（符合编程的规则或规范）-> 程序扩展的时候   一派
 */

/**
 * v-on:'eventType' -> v-on:click="" --->  @click=""
 * 
 */

import TodoList from './TodoList';

const App = {
  components: {
    TodoList
  },
  data () {
    return {
      // count: 0,
      // log: []
    }
  },
  template: `
    <TodoList />
    <!-- 绑定JavaScript表达式（逻辑简单） -->
    <!-- 极度不推荐 -->
    <!-- <div>
      <h1>{{ count }}</h1>
      <button @click="count += 1">ADD</button>
      <button @click="count -= 1">MINUS</button>
    </div> -->
    
    <!-- 绑定处理函数（逻辑较为复杂） -->
    <!-- <div>
      <h1>{{ count }}</h1>
      <button @click="addCount">ADD</button>
      <button @click="minusCount">MINUS</button>
    </div> -->
    
    <!-- 内联绑定处理函数 -->
    <!-- 调用：这里不会执行methods里对应的方法，调用的目的是为了传入实参 -->
    <!-- <div>
      <h1>{{ count }}</h1>
      <button @click="addCount(2)">ADD</button>
      <button @click="minusCount(1)">MINUS</button>
    </div> -->

    <!-- 内联绑定处理函数 -->
    <!-- $event是vue封装的事件对象 变量名不可变，vue中的特殊变量 -->
    <!-- <div>
      <h1>{{ count }}</h1>
      <button @click="addCount(2, $event)">ADD</button>
      <button @click="minusCount(1, $event)">MINUS</button>
    </div> -->
    
    <!-- 多事件处理函数绑定 -->
    <!-- <div>
      <h1>{{ count }}</h1>
      <button @click="addCount(2), setLog('ADD', 2)">ADD</button>
      <button @click="minusCount(1), setLog('MINUS', 1)">MINUS</button>
    </div> -->
  `,

  /**
   * function ($event) {
   *   addCount($event, 2);
   * }
   * 
   * 
   * function ($event) {
   *   return addCount;
   * }
   */
  methods: {
    // addCount () {
    //   this.count += 1;
    //   this.setLog('ADD', 1);
    //   console.log(this.log);
    // },
    // minusCount () {
    //   this.count -= 1;
    //   this.setLog('MINUS', 1);
    //   console.log(this.log);
    // },

    // addCount (num) {
    //   this.count += num;
    //   this.setLog('ADD', num);
    //   console.log(this.log);
    // },
    // minusCount (num) {
    //   this.count -= num;
    //   this.setLog('MINUS', num);
    //   console.log(this.log);
    // },

    // addCount (num, e) {
    //   console.log(e);
    //   this.count += num;
    //   this.setLog('ADD', num);
    //   console.log(this.log);
    // },
    // minusCount (num, e) {
    //   console.log(e);
    //   this.count -= num;
    //   this.setLog('MINUS', num);
    //   console.log(this.log);
    // },
    
    // addCount (num) {
    //   this.count += num;
    //   console.log(this.log);
    // },
    // minusCount (num) {
    //   this.count -= num;
    //   console.log(this.log);
    // },

    // setLog (eventName, num) {
    //   this.log.push({
    //     eventName,
    //     number: num,
    //     dateTime: new Date()
    //   })
    // }
  }
}

Vue.createApp(App).mount('#app');
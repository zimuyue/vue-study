const MyComponent = {
  props: {
    num: Number
  },
  template: `
    <span>{{ num }}</span>
  `
}

const App = {
  components: {
    MyComponent
  },
  data () {
    return {
      list: [
        {
          id: 1,
          value: 'item-1'
        },
        {
          id: 2,
          value: 'item-2'
        },
        {
          id: 3,
          value: 'item-3'
        },
      ],
      tempArr: [1,9,3],
      isLogin: false
    }
  },
  template: `
    <div>
      <ul>
        <li v-for="(item, index) of list" :id="item.id" :key="index">
          <span>{{ item.value }}</span>
          <MyComponent :num="tempArr[index]" />
          <input type="text" />
          <button @click="deleteItem(index)">DELETE</button>
        </li>
      </ul>

      <div v-if="isLogin">
        <span>欢迎</span>
        <a href="#">Xiaoyesensen</a>
      </div>

      <div v-else>
        <a href="javascript:;" @click="isLogin = true">登录</a>
        <a href="#">注册</a>
      </div>
    </div>
  `,
  /**
   * item-2 DELETE -> 'item-3' -> 'item-2' -> DELETE item-3 li
   * vue就地更新策略，当触发item-2删除时，其实并不是将item-2直接删除
   * 而是将item-2内发生变化的节点中innerText就地更新，然后删除最后一项
   * 好处是可以在渲染dom时，最小化的节省开销
   * 
   * 如果在v-for中使用输入类控件或者子组件，输入的值vue是无法进行跟踪的
   * 但是如果在循环的节点中设置了key属性，指定唯一id，vue就可以准确的检测到删除的节点
   * 输入的状态就可以实现跟踪，这也证明了为什么不要在v-for中使用操作数据时，避免使用index的问题
   */
  methods: {
    deleteItem (index) {
      this.list.splice(index, 1);
    }
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app');

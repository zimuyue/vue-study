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
      tempArr: [1, 9, 3],
    }
  },
  /*
    vue 就地更新策略
    当触发 item-2 删除时，其实并不是将 item-2 直接删除
    而是将 item-2 内发生变化的节点中 innerText 就地更新，然后删除最后一项
    好处是可以在渲染 dom 时，最小化的节省开销
    
    如果在 v-for 中使用输入类控件或者子组件，输入的值 vue 是无法进行跟踪的
    但是如果在循环的节点中设置了 key 属性，指定唯一 id，vue 就可以准确的检测到删除的节点
    输入的状态就可以实现跟踪，同时这也证明了为什么不要在 v-for 中操作数据时，避免使用 index 的问题
  */
  template: `
    <div>
      <ul>
        <li v-for="(item, index) of list" :key="index">
          <span>{{ item.value }}</span>
          <MyComponent :num="tempArr[index]" />
          <input type="text" />
          <button @click="deleteItem(index)">DELETE</button>
        </li>
      </ul>
    </div>
  `,
  methods: {
    deleteItem (index) {
      this.list.splice(index, 1);
    }
  }
}

Vue.createApp(App).mount('#app');

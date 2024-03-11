/**
 * Vue数组变更检测
 * Object.defineProperty -> 没办法监听下列方法对数组的操作变更
 * push pop shift unshift splice sort reverse
 * Vue对数组的变化更新方式，是将这些方法进行封装重写，实现数组数据响应式
 * 而另一些数组方法是返回新数组的，直接替换原数组
 */

var ArrayPrototype = Array.prototype;

var ARR_METHODS = [
  'pop',
  'push',
  'shift',
  'sort',
  'splice',
  'unshift',
  'reverse'
];

ARR_METHODS.forEach(method => {
  method = function (...arg) {
    ArrayPrototype[method].call(this, arg);
      //  视图更新....
  }
})


const App = {
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },
  template: `
    <div>
      <span v-for="n of list" :key="n">{{ n }}</span>
      <div>
        <button @click="operateNumber">Operate Number</button>
      </div>
    </div>
  `,
  methods: {
    operateNumber () {
      // this.list.push(this.list[this.list.length - 1] + 1);
      // this.list.pop();
      // this.list.shift();
      // this.list.unshift(0);
      // this.list.splice(2, 2);
      // this.list.sort((a, b) => b - a);
      // this.list.reverse();
      
      // 替换数组是否会重新渲染整个DOM列表 （性能担忧）
      // 不一定，Vue在对DOM操作的时候进行了大量的新旧节点信息的对比算法
      // Vue会将DOM重新渲染的程度最小化，做到已有的DOM节点最大化复用
      // this.list = this.list.concat(this.list[this.list.length - 1] + 1);
      // this.list = this.list.slice(2, 4);
      // this.list = this.list.map(item => item + 1);
    }
  }
}

Vue.createApp(App).mount('#app');

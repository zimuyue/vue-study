/**
 * 数组变更的检测
 */

// var vm = {
//   data: {
//     a: 1,
//     b: 2,
//     list: [1, 2, 3, 4, 5]
//   }
// }

// for (var key in vm.data) {
//   (function (key) {
//     Object.defineProperty(vm, key, {
//       get () {
//         console.log('数据获取');
//         return vm.data[key];
//       },
//       set (newValue) {
//         console.log('数据设置');
//         vm.data[key] = newValue;
//         // 视图更新操作  ？？？？
//       }
//     })
//   })(key)
// };

// console.log(vm.a);

// vm.b = 3;
// console.log(vm.b);

// vm.list = [2, 3, 4, 5, 6];
// console.log(vm.list);

// 没办法监听到set
/**
 * 数据变化了
 * 视图能不能变化呢？这个属性的set有没有执行
 * 
 * 不返回新数组
 * Object.defineProperty -> 没办法监听下列方法对数组的操作变更
 */
// vm.list.push(6);
// vm.list.pop();
// vm.list.shift();
// vm.list.splice(2, 1);
// vm.list.sort((a, b) => b - a);
// vm.list.reverse();
// Vue对以上方法进行了包裹封装

// console.log(vm.list);

// var ArrayPrototype = Array.prototype;

// var ARR_METHODS = [
//   'pop',
//   'push',
//   'shift',
//   'sort',
//   'splice',
//   'unshift',
//   'reverse'
// ];

// ARR_METHODS.forEach(method => {
//   method = function (...arg) {
//     ArrayPrototype[method].call(this, arg);
       // 视图更新....
//   }
// })

// const vm = new Vue({
//   el: '#app',
//   template: `<div></div>`,
//   data () {
//     return {
//       list: [1,2,3,4,5]
//     }
//   }
// })

// console.log(vm.list);

// 有些数组方法是会返回新的数组用于替换原数组
// vm.list = vm.list.concat(7);
// vm.list = vm.list.slice(1);
// vm.list = vm.list.filter(item => item % 2 === 0);

// console.log(vm.list);

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

/**
 * div
 *    h1
 *    p
 * 
 * div
 *    h1 x
 * 
 */

Vue.createApp(App).mount('#app');


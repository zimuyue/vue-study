/*
  计算属性：解决模板中复杂的逻辑运算及复用的问题
  计算属性只在内部逻辑依赖的数据发生变化的时候才会被再次调用
  计算属性会缓存其依赖的上一次计算出的数据结果
  多次复用一个相同值的数据，计算属性只调用一次
  https://cn.vuejs.org/guide/essentials/computed.html
*/
import Vue from './vue.js';

var vm = new Vue({
  el: '#app',
  template: `
    <span>{{ a }}</span>
    <span>+</span>
    <span>{{ b }}</span>
    <span>=</span>
    <span>{{ total1 }}</span>
  `,
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  computed: {
    total1 () {
      console.log('total1 computed total');
      return this.a + this.b;
    },
    // total2: {
    //   get () {
    //     console.log('total2 computed total');
    //     return this.a + this.b;
    //   }
    // }
  }
});

console.log(vm);

console.log(vm.total1);
console.log(vm.total1);
console.log(vm.total1);
console.log(vm.total1);
console.log(vm.total1);

vm.a = 100;
vm.b = 200;

// console.log(vm.total2);
// console.log(vm.total2);
// console.log(vm.total2);
// console.log(vm.total2);
// console.log(vm.total2);
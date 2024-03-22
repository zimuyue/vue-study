/**
 * watch 侦听器
 *    关注点在数据更新：给数据增加侦听器，当数据更新时，侦听器函数执行
 *           特点：数据更新时，需要完成什么样的逻辑
 * computed 计算属性
 *    关注点在模板：抽离复用模板中的复杂的逻辑运算
 *           特点：当函数内的依赖更新后，重新调用
 * https://cn.vuejs.org/guide/essentials/watchers.html
 */

import Vue from '../modules/vue/index.js';

const vm = new Vue({
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  computed: {
    // descriptor.value
    total () {
      console.log('Computed');
      return this.a + this.b;
    },
    // descriptor.value.get
    // total: {
    //   get () {
    //     console.log('Computed');
    //     return this.a + this.b;
    //   }
    // }
  },
  watch: {
    total (newValue, oldValue) {
      console.log('total', newValue, oldValue);
    },
    a (newValue, oldValue) {
      console.log('a', newValue, oldValue);
    },
    b (newValue, oldValue) {
      console.log('b', newValue, oldValue);
    }
  }
});

console.log(vm);

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);

vm.a = 100;

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);

vm.b = 200;

console.log(vm.total);
console.log(vm.total);
console.log(vm.total);

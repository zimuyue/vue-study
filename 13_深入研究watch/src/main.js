/**
 * watch 侦听器
 *    关注点在数据更新：给数据增加侦听器，当数据更新时，侦听器函数执行
 *           特点：数据更新时，需要完成什么样的逻辑
 * computed 计算属性
 *    关注点在模板：抽离复用模板中的复杂的逻辑运算
 *           特点：当函数内的依赖更新后，重新调用
 * 
 */

// const App = {
//   data () {
//     return {
//       a: 1,
//       b: 2,
//       type: 'plus'
//     }
//   },
//   template: `
//     <div>
//       <h1>计算属性结果：{{ result }}</h1>
//       <p>
//         <span>{{ a }}</span>
//         <span>{{ sym }}</span>
//         <span>{{ b }}</span>
//         <span>=</span>
//         <span>{{ result }}</span>
//       </p>
//       <div>
//         <input type="number" v-model="a" />
//         <input type="number" v-model="b" />
//       </div>
//       <div>
//         <button @click="compute('plus')">+</button>
//         <button @click="compute('minus')">-</button>
//         <button @click="compute('mul')">*</button>
//         <button @click="compute('div')">/</button>
//       </div>
//     </div>
//   `,
//   computed: {
//     sym () {
//       switch (this.type) {
//         case 'plus':
//           return '+';
//         case 'minus':
//           return '-';
//         case 'mul':
//           return '*';
//         case 'div':
//           return '/';
//         default:
//           break;
//       }
//     },
//     result: {
//       get () {
//         const a = Number(this.a);
//         const b = Number(this.b);

//         switch (this.type) {
//           case 'plus':
//             return a + b;
//           case 'minus':
//             return a - b;
//           case 'mul':
//             return a * b;
//           case 'div':
//             return a / b;
//           default:
//             break;
//         }
//       }
//     },
//   },
//   watch: {
//     result (newValue, oldValue) {
//       //console.log('result', newValue, oldValue);
//       var finalResult = this.formatResult();
//       console.log(finalResult);
//     },
//     a (newValue, oldValue) {
//       console.log('a', newValue, oldValue);
//     },
//     b (newValue, oldValue) {
//       console.log('b', newValue, oldValue);
//     },
//     type (newValue, oldValue) {
//       console.log('type', newValue, oldValue);
//     }
//   },
//   methods: {
//     compute (type) {
//       this.type = type;
//     },
//     formatResult () {
//       return {
//         'Number_a': this.a,
//         'Number_b': this.b,
//         'Cal_type': this.type,
//         'Computed_result': this.result
//       }
//     }
//   }
// }

// const vm = Vue.createApp(App).mount('#app');

import Vue from '../modules/vue';

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



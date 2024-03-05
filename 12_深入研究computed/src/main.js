/**
 * 计算属性：解决模板中复杂的逻辑运算及复用的问题
 * 计算属性只在内部逻辑依赖的数据发生变化的时候才会被再次调用
 * 计算属性会缓存其依赖的上一次计算出的数据结果
 * 多次复用一个相同值的数据，计算属性只调用一次
 */

// const App = {
//   data () {
//     return {
//       studentCount: 0
//     }
//   },
//   /**
//    * 1、模板逻辑样式尽可能的绝对分离
//    * 2、逻辑运算结果需要被复用
//    */ 
//   template: `
//     <h1>{{ studentCountInfo }}</h1>
//     <h2>{{ studentCountInfo }}</h2>
//     <button @click="addStudentCount">ADD STUDENT COUNT</button>
//   `,
//   computed: {
//     studentCountInfo () {
//       console.log('Invoked');
//       return this.studentCount > 0 
//                                ? ('学生数：' + this.studentCount) 
//                                : '暂无学生';
//     }
//   },
//   methods: {
//     addStudentCount () {
//       this.studentCount = 0;
//     }
//   }
// }

const App = {
  data () {
    return {
      a: 1,
      b: 2,
      type: 'plus'
    }
  },
  template: `
    <div>
      <h1>计算属性结果：{{ result }}</h1>
      <h2>方法计算结果：{{ getResult() }}</h2>
      <p>
        <span>{{ a }}</span>
        <span>{{ sym }}</span>
        <span>{{ b }}</span>
        <span>=</span>
        <span>{{ result }}</span>
        <span>({{ getResult() }})</span>
      </p>
      <div>
        <input type="number" v-model="a" />
        <input type="number" v-model="b" />
      </div>
      <div>
        <button @click="compute('plus')">+</button>
        <button @click="compute('minus')">-</button>
        <button @click="compute('mul')">*</button>
        <button @click="compute('div')">/</button>
      </div>
    </div>
  `,
  computed: {
    // 默认为GETTER
    sym () {
      switch (this.type) {
        case 'plus':
          return '+';
        case 'minus':
          return '-';
        case 'mul':
          return '*';
        case 'div':
          return '/';
        default:
          break;
      }
    },
    result: {
      get () {
        console.log('computed result');
        const a = Number(this.a);
        const b = Number(this.b);

        switch (this.type) {
          case 'plus':
            return a + b;
          case 'minus':
            return a - b;
          case 'mul':
            return a * b;
          case 'div':
            return a / b;
          default:
            break;
        }
      }
    },
    calData: {
      get () {
        return {
          a: 'number a:' + this.a,
          b: 'number b:' + this.b,
          type: 'computed type:' + this.type,
          result: 'computed result:' + this.result
        }
      },
      set (newValue) {
        this.a = Number(newValue.a.split(':')[1]);
        this.b = Number(newValue.b.split(':')[1]);
        this.type = newValue.type.split(':')[1];
      }
    }
  },
  methods: {
    compute (type) {
      this.type = type;
    },
    getResult () {
      console.log('method result');
      const a = Number(this.a);
      const b = Number(this.b);

      switch (this.type) {
        case 'plus':
          return a + b;
        case 'minus':
          return a - b;
        case 'mul':
          return a * b;
        case 'div':
          return a / b;
        default:
          break;
      }
    }
  }
}

const vm = Vue.createApp(App).mount('#app');

vm.calData = {
  a: 'number a:100',
  b: 'number b:200',
  type: 'computed type:div'
}

console.log(vm);

// import Vue from '../modules/vue';

// var vm = new Vue({
//   el: '#app',
//   template: `
//     <span>{{ a }}</span>
//     <span>+</span>
//     <span>{{ b }}</span>
//     <span>=</span>
//     <span>{{ total }}</span>
//   `,
//   data () {
//     return {
//       a: 1,
//       b: 2
//     }
//   },
//   computed: {
//     // total () {
//     //   console.log('computed total');
//     //   return this.a + this.b;
//     // },
//     total: {
//       get () {
//         console.log('computed total');
//         return this.a + this.b;
//       }
//     }
//   }
// });

// console.log(vm);

// console.log(vm.total);
// console.log(vm.total);
// console.log(vm.total);
// console.log(vm.total);
// console.log(vm.total);

// vm.a = 100;
// vm.b = 200;

// console.log(vm.total);
// console.log(vm.total);
// console.log(vm.total);
// console.log(vm.total);
// console.log(vm.total);
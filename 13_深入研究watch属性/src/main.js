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

/**
 * [
 *   {
 *     id: 1 ~,
 *     question: 'xxxxxxxx',
 *     items: [2, 3, 5, 6]
 *     answer: 2
 *   }
 * ]
 * 
 * data: {
 *   order: 0,
 *   questionData: 试题数据
 *   myAnswer: items index,
 *   myResults: [
 *     {
 *       qid,
 *       question,
 *       myAnswer: items[index],
 *       rightAnswer: items[index],
 *       isRight: myAnswer == answer
 *     }
 *   ]
 * }
 * 
 * 视图：什么时候显示试题（切换）？什么时候显示答案集？
 * myResults.length
 * 
 * 试题
 * 
 * 编号
 * 题目
 * 4个选项（点击）-> selectAnswer -> 取到index -> 赋值给order 
 * 切换order -> 上传该题的order myAnswer -> 获取新order对应的题
 * 如果切换到最后一道 -> 返回myResults
 */

// import qs from 'qs';

// const App = {
//   data () {
//     return {
//       order: 0,
//       questionData: {},
//       myAnswer: -1,
//       myResults: []
//     }
//   },
//   template: `
//     <div>
//       <div v-if="myResults.length > 0">
//         <h1>考试结果</h1>
//         <ul>
//           <li
//             v-for="(item, index) of myResults"
//             :key="item.qid"
//           >
//             <h2>编号{{ item.qid }}：</h2>
//             <p>题目：{{ item.question }}</p>
//             <p>你的答案：{{ item.myAnswer }}</p>
//             <p>正确答案：{{ item.rightAnswer }}</p>
//             <p>正确：{{ isRightText(item.isRight) }}</p>
//           </li>
//         </ul>
//       </div>
//       <div v-else>
//         <h1>编号{{ questionData.id }}：</h1>
//         <p>{{ questionData.question }}</p>
//         <div>
//           <button
//             v-for="(item, index) of questionData.items"
//             :key="item"
//             @click="selectAnswer(index)"
//           >{{ item }}</button>
//         </div>
//       </div>
//     </div>
//   `,
//   mounted () {
//     this.getQuestion(this.order);
//   },
//   watch: { // 给数据增加侦听器
//     order (newOrder, oldOrder) {
//       this.uploadAnswer(oldOrder, this.myAnswer);
//       this.getQuestion(newOrder);
//     }
//   },
//   computed: {
//     isRightText () {
//       return function (isRight) {
//         return isRight ? '是' : '否';
//       }
//     }
//   },
//   methods: {
//     getQuestion (order) {
//       axios.post('http://localhost:8888/getQuestion', qs.stringify({
//         order
//       })).then(res => {
//         const result = res.data;
//         if (res.data.errorCode) {
//           this.myResults = result.data;
//           return;
//         }
        
//         this.questionData = result.data;
//       })
//     },
//     uploadAnswer (order, myAnswer) {
//       axios.post('http://localhost:8888/uploadAnswer', qs.stringify({
//         order,
//         myAnswer
//       })).then(res => {
//         console.log(res.data);
//       })
//     },
//     selectAnswer (index) {
//       this.myAnswer = index;
//       this.order += 1;
//     }
//   }
// };

//const vm = Vue.createApp(App).mount('#app');

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



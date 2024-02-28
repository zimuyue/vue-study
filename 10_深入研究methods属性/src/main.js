/**
 * methods
 * 向组件实例添加方法
 * 
 */

// var app = Vue.createApp({
//   data () {
//     return {
//       title: 'This is my TITLE'
//     }
//   },
//   template: `
//     <h1>{{ title }}</h1>
//     <h2>{{ yourTitle() }}</h2>
//     <h3>{{ myTitle() }}</h3>
//     <button @click="changeTitle('This is your TITLE')">CHANGE TITLE</button>
//   `,
//   methods: {
//     /**
//      * 1. Vue创建实例时，会自动为methods绑定当前实例this
//      *    保证在事件监听时，回调始终指向当前组件实例
//      *    方法要避免使用箭头函数，箭头函数会阻止Vue正确绑定组件实例this
//      */

//     /**
//      * 
//      * @click="changeTitle('This is your TITLE')"
//      * 
//      * 函数名 + () 不是执行符号，传入实参的容器
//      * 
//      * onclick = "() => changeTitle('This is your TITLE')"
//      * 
//      * onClick = { () => changeTitle('This is your TITLE') }
//      * onCLick = { changeTitle.bind(this, This is your TITLE) }
//      */
//     changeTitle (title) {
//       this.title = title;
//     },
//     /**
//      * 
//      * 模板直接调用的方法尽量避免副作用操作
//      * 
//      */
//     yourTitle () {
//       return 'This is your TITLE';
//     },
//     myTitle () {
//       return this.title;
//     }
//   }
// });

// const vm = app.mount('#app');

// // 实例中直接挂载methods中的每一个方法
// // methods相当一个容器最终这些方法都是要挂载到实例身上
// console.log(vm);
// console.log(vm.methods);

// lodash  常用JS工具库

// const List = {
//   data () {
//     return {
//       teachers: []
//     }
//   },
//   template: `
//     <div>
//       <table border="1">
//         <thead>
//           <tr>
//             <td>ID</td>
//             <td>姓名</td>
//             <td>学科</td>
//           </tr>
//         </thead>
//         <tbody v-if="teachers.length > 0">
//           <tr v-for="item of teachers" key="item.id">
//             <td>{{ item.id }}</td>
//             <td>{{ item.name }}</td>
//             <td>{{ item.subject }}</td>
//           </tr>
//         </tbody>
//         <tbody v-else>
//           <tr>
//             <td colspan="3">暂无数据</td>
//           </tr>
//         </tbody>
//       </table>
//       <button @click="debounceGetData">GET TEACHERS'DATA</button>
//     </div>
//   `,
//   created () {
//     this.debounceGetData = _.debounce(this.getData, 1000);
//   },
//   unmounted () {
//     this.debounceGetData.cancel();
//   },
//   methods: {
//     async getData () {
//       const result = await axios('http://localhost:8081/getTeachers');
//       this.teachers = result.data;

//       // axios('http://localhost:8081/getTeachers').then(res => {
//       //   this.teachers = res.data;
//       //   console.log(this.teachers);
//       // })
//     }
//   }
// }

// Vue.createApp(List).mount('#app');

var Vue = (function () {
  
  function Vue (options) {
    this.$data = options.data();
    this._methods = options.methods;

    this._init(this);
  }

  Vue.prototype._init = function (vm) {
    initData(vm);
    initMethods(vm);
  }

  function initData (vm) {
    for (var key in vm.$data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get: function () {
            return vm.$data[key];
          },
          set: function (newValue) {
            vm.$data[key] = newValue;
          }
        })
      })(key);
    }
  }

  function initMethods (vm) {
    for (var key in vm._methods) {
      vm[key] = vm._methods[key];
    }
  }

  return Vue;
})();

var vm = new Vue({
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  methods: {
    increaseA (num) {
      this.a += num;
    },
    increaseB (num) {
      this.b += num;
    },
    getTotal () {
      console.log(this.a + this.b);
    }
  }
});

console.log(vm);

vm.increaseA(1);
vm.increaseA(1);
vm.increaseA(1);
vm.increaseA(1);
// a 5

vm.increaseB(2);
vm.increaseB(2);
vm.increaseB(2);
vm.increaseB(2);
// b 10

vm.getTotal(); //  15




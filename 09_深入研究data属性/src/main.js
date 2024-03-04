/**
 * data必须是一个函数
 * 
 * Vue在创建实例的过程中调用data函数
 * 返回数据对象，通过响应式包装存储在实例的$data上
 * 并且实例可以直接越过$data访问属性
 */

// const app = Vue.createApp({
//   data () {
//     return {
//       title: 'This is my Title'
//     }
//   },
//   template: `
//     <h1>{{ title }}</h1>
//     <h2>{{ author }}</h2>
//   `
// })

// const vm = app.mount('#app');

// console.log(vm);
// console.log(vm.$data.title);
// 可以越过$data取属性值，底层是将$data进行proxy代理过的
// 并且会在data身上添加get与set的属性描述符
// console.log(vm.title);

// $data是响应式数据对象
// 这样添加的属性$data身上是没有的，无法对属性进行跟踪
// vm.author = 'ming';
// 如果是直接在$data添加属性，虽然会被添加到$data中
// 但是在页面渲染时引用会造成警告，依旧需要让你定义在data中
// Property "author" was accessed during render but is not defined on instance.
// vm.$data.author = 'ming';
// 以 $,_,__ 开头的属性都是Vue提供的内置API
// 开发者要尽量避免使用这些前缀命名定义自己的属性和方法名
// console.log(vm.$data);


// data为什么必须要是一个函数
// Vue要确保你编写的每一个组件实例都是独一无二的
// 避免使用同一个实例对象，造成私有属性的污染
let data = function () {
  return {
    a: 1,
    b: 2
  }
}

let vm1 = new Vue({
  data: data
})

let vm2 = new Vue({
  data: data
})

function Vue (options) {
  this.$data = options.data();

  let _this = this;

  for(let key in this.$data){
    // 如果不使用IIFE这里会形成闭包函数
    // 引用的永远是最后一个key值，所以要进行变量隔离
    (function (k) {
      // 独立作用域
      // k -> 当前作用域的临时的局部变量
      // Object.defineProperty兼容到IE8
      // Object.defineProperty(_this, k, {
      //   get () {
      //     return _this.$data[k];
      //   },
      //   set (newVal) {
      //     _this.$data[k] = newVal;
      //   }
      // })

      // 还可以使用Object.prototype中__defineGetter__属性
      // 兼容性非常好，但是目前已被弃用了
      _this.__defineGetter__(k, function () {
        return _this.$data[k];
      })
      _this.__defineSetter__(k, function (newVal) {
        _this.$data[k] = newVal;
      })
    })(key)
  }
}

vm1.b = 3;
console.log(vm1, vm2);

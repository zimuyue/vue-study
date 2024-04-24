/*
  data 必须是一个函数
  Vue 要确保你编写的每一个组件实例都是独一无二的
  避免使用同一个实例对象，造成私有属性的污染
*/
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
    // 如果不使用 IIFE 这里会形成闭包函数
    // 引用的永远是最后一个 key 值，所以要进行变量隔离
    (function (k) {
      // 独立作用域
      // k -> 当前作用域的临时的局部变量
      // Object.defineProperty 兼容到 IE8

      // 为当前应用实例添加响应式属性
      // 通过 $data 代理来获取值
      Object.defineProperty(_this, k, {
        get () {
          return _this.$data[k];
        },
        set (newVal) {
          _this.$data[k] = newVal;
        }
      })
    })(key)
  }
}

vm1.b = 3;
console.log(vm1, vm2);

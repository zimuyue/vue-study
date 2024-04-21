/*
  methods
  向组件实例添加方法
  Vue 创建实例时，会自动为 methods 绑定当前实例 this
  保证在事件监听时，回调始终指向当前组件实例
  方法要避免使用箭头函数，箭头函数会阻止 Vue 正确绑定组件实例 this
  模板中直接调用的方法尽量避免副作用操作

  methods 相当一个容器最终这些方法都是要挂载到实例身上
*/
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

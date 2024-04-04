/*
  Vue 在 2 版本基础上增加了 CompositionAPI
  也可以称为函数 API，原本的 OptionsAPI 还可以继续使用

  组合式 API 的好处可以进行抽离，对于封装集成是非常友好的
  更好的将业务功能进行细粒化拆分
*/

// Vue2 响应式方式
const data = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3, 4, 5]
}

// observer(data);

function observer (data) {
  for (let key in data) {
    defineReactive(data, key, data[key]);
  }
}

function defineReactive (data, key, value) {
  if (Array.isArray(value)) {
    // 设置数组原型
    // key.__proto__ = customArray.prototype
    return;
  }

  if (typeof value === 'object') {
    observer(value);
  }

  Object.defineProperty(data, key, {
    get () {
      return value;
    },
    set (newVal) {
      return value = newVal;
    }
  })
}

// Vue3 响应式优点不用逐个属性定义 get 和 set 函数
// Proxy 是针对源对象的一个代理引用，属于引用容器
// 当源对象数据发生变更时，代理引用也会发生变化
function _reactive (data) {
  return new Proxy(data, {
    get (target, key) {
      console.log('proxy get', key);
      const value = Reflect.get(target, key);
      return (value !== null && typeof value === 'object') ? _reactive(value) : value;
    },
    set (target, key, value) {
      console.log('proxy set', key);
      return Reflect.set(target, key, value);
    }
  })
}

const $data = _reactive(data);
$data.b.c = 100;
console.log($data);

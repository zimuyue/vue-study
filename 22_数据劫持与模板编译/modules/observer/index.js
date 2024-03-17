import { newArrMethods } from "./array";
import { isObject, isArray, setConstantProperty } from '../utils';

class Observer {
  
  constructor(data) {
    setConstantProperty(data, '__ob__', this);

    if (isArray(data)) {
      // 如果数据对象是数组结构
      // 将数组对象的原型对象去继承重构数组方法的原型
      data.__proto__ = newArrMethods;
      this.observeArr(data);
    } else {
      this.walk(data);
    }
  }

  // 通过walk方法对data中的每一个属性递归添加响应式劫持
  walk (data) {
    const keys = Object.keys(data);

    keys.map((key) => {
      defineReactive(data, key, data[key]);
    });
  }

  // 区分数组，同时迭代数组中元素，如果是对象则添加响应式劫持
  observeArr (data) {
    data.map((item) => {
      observe(item);
    });
  }
}

function defineReactive (data, key, value) {
  observe(value);
  Object.defineProperty(data, key, {
    get () {
      console.log('响应式获取：' + value);
      return value;
    },
    set (newValue) {
      if (value === newValue) return;
      console.log('响应式设置：' + key + ' = ' + newValue);
      observe(newValue);
      value = newValue;
    }
  }) 
}

function observe (data) {
  if (!isObject(data) || data.__ob__) { 
    return data;
  }

  // 对data数据添加观察者
  new Observer(data);
}

export {
  observe
}
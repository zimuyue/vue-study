import Dep from './Dep.js';

const dep = new Dep();

console.log(dep.effectMap);

export function reactive (data) {
  return new Proxy(data, {
    get (target, key) {
      const value = Reflect.get(target, key);

      // 当访问对象属性时触发依赖收集
      dep.collect(target, key);

      return value !== null && typeof value === 'object' ? reactive(value) : value;
    },
    set (target, key, value) {
      const oldValue = target[key];
      const res = Reflect.set(target, key, value);

      // 通知依赖进行执行对应的回调函数
      dep.notify(target, key, value, oldValue);
      return res;
    }
  })
}
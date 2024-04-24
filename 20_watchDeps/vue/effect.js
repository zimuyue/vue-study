import Dep from './Dep.js';
import ComputedRef from './ComputedRef.js';

export function watch (depFn, callback) {
  Dep.effectCB = callback;
  depFn();
  Dep.effectCB = null;
}

export function watchEffect (callback) {
  Dep.effectCB = callback;
  callback();
  Dep.effectCB = null;
}

export function computed (callback) {
  Dep.effectCB = callback; // 记录副作用函数
  const value = callback(); // 执行 callback 触发依赖收集
  const computedRef = new ComputedRef(value);

  // 当 notify 时，将 dep 中 cb 函数中记录对应的 computed 实例
  // 数据发生变更时，更新对应的 value
  callback.computedRef = computedRef;
  Dep.effectCB = null;
  return computedRef;
}

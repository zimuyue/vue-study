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
  Dep.effectCB = callback;
  const value = callback();
  const computedRef = new ComputedRef(value);

  // 当notify时，将dep中cb函数中记录对应的computed实例
  // 数据发生变更时，更新对应的value
  callback.computedRef = computedRef;
  Dep.effectCB = null;
  return computedRef;
}

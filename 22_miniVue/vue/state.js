import { observe } from "./observer/index.js";
import { proxy } from './utils.js';

function initState (vm) {
  const options = vm.$options;

  if (options.props) {
    initProps(vm);
  }

  if (options.methods) {
    initMethods(vm);
  }

  if (options.data) {
    initData(vm);
  }

  if (options.computed) {
    initComputed(vm);
  }

  if (options.watch) {
    initWatch(vm);
  }
}

function initProps (vm) {}

function initMethods (vm) {}

function initData (vm) {
  let data = vm.$options.data;

  // vue 对 data 数据为什么要添加一层 _data 代理？
  // 答：当用户传入的 data 数据，vue 不希望我们对数据源的直接操作
  //    而是通过代理者模式来添加一个代理对象，当我们去操作 data 数据时
  //    其实都是在操作 _data 的代理对象
  //    还有一个原因是用户传递的 data 是函数也可能是对象
  vm._data = data = typeof data === 'function' ? data.call(vm) : data;
  
  // 代理模式
  for (let key in data) {
    proxy(vm, '_data', key);
  }
  
  // 观察者模式
  // 添加观察者，当数据变化去更新模板视图，而不是简单的更新数据
  // 发生的操作的方式即可能是对对象的操作，也可能是对数组的操作
  // vue 要对这两种形式做区分，vue2 中采用 defineProperty 的方式，这个方法仅是对对象属性的一些操作
  // 是无法检测到数组发生变化的情况，所以 vue 要对改变源数组的方法进行重新封装
  observe(data);
}

function initWatch (vm) {}

function initComputed (vm) {}

export {
  initState
}
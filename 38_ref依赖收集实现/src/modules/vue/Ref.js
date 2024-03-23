import { update } from './render.js';

export default class Ref {
  constructor (initialValue) {
    this.deps = new Set(); // 依赖收集项，收集模板中依赖数据的DOM元素
    this._defaultValue = initialValue; // 默认初始化值，不变的
    this._value = initialValue; // 可变项
  }

  get value () {
    return this._value;
  }

  set value (newValue) {
    this._value = newValue;
    // 当数据发生变更时，更新依赖项，渲染模板
    update(this);
  }

  $reset () {
    this.value = this._defaultValue;
  }
}

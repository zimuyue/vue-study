export default class ComputedRef {
  constructor (initialValue) {
    this._value = initialValue; // 默认值
  }

  get value () {
    return this._value;
  }

  set value (newValue) {
    this._value = newValue;
  }
}
const originArrMethods = Array.prototype,
      // 根据数组原型对象创建继承实例
      newArrMethods = Object.create(originArrMethods);

const ARR_METHODS = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice'
];

ARR_METHODS.map((method) => {
  newArrMethods[method] = function (...args) {
    const result = originArrMethods[methods].apply(this, args),
          ob = this.__ob__;

    let newArr;

    // vue中不仅要对原数组方法进行封装
    // 还需要将向新数组新增加的元素，添加响应式劫持
    switch (method) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args.slice(2);
        break;
      default:
        break;
    }

    if (newArr) ob.observeArr(newArr);

    return result;
  }
})

export {
  newArrMethods
}
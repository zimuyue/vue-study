const originArrMethods = Array.prototype,
      // 根据数组原型对象创建继承实例
      newArrMethods = Object.create(originArrMethods);

/*
  Vue 数组变更检测
  Object.defineProperty -> 没办法监听下列方法对数组的操作变更
  push pop shift unshift splice sort reverse
  Vue 对数组的变化更新方式，是将这些方法进行封装重写，实现数组数据响应式
  而另一些数组方法是返回新数组的，直接替换原数组
*/

const ARR_METHODS = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice'
];

/*
  替换数组是否会重新渲染整个 DOM 列表 （性能担忧）
  不一定，Vue 在对 DOM 操作的时候进行了大量的新旧节点信息的对比算法
  Vue 会将 DOM 重新渲染的程度最小化，做到已有的 DOM 节点最大化复用
*/

ARR_METHODS.map((method) => {
  newArrMethods[method] = function (...args) {
    const result = originArrMethods[methods].apply(this, args),
          ob = this.__ob__;

    let newArr;

    // vue 中不仅要对原数组方法进行封装
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
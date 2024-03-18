export default {
  a: 1,
  b: 2
}

export function plus (a, b) {
  return a + b;
}

export function minus (a, b) {
  return a - b;
}

// console.log('This is a UtilsModule');

// ------------------------

// function plus (a, b) {
//   return a + b;
// }

// function minus (a, b) {
//   return a - b;
// }

// 注意这种写法导出的是一个模块并不是对象
// export {
//   plus,
//   minus
// }

// 使用default默认导出的写法
// 是指将一个对象作为模块导出
// export default {
//   plus,
//   minus
// }
/**
 * ES6  ES2015
 * ES MODULE ES模块化   关键字import export
 * 
 * script type="module"
 * 
 * 初始化加载
 * 静态的导入：import xxx from './xxx'  依赖type="module"
 * 
 * 按需加载
 * 动态的导入：import('./xxx')  不依赖type="module"
 * 
 * script type="module": 运行在支持ES2015标准的浏览器上 忽略 nomodule
 * script nomodule: 运行在不支持ES2015标准的浏览器上，忽略 type="module"
 * 
 */

// import { plus as computePlus, minus } from './utils.js';

// import utils from './utils.js';

// const { plus, minus } = utils;

// 命名空间 -> 对象
// 将整个模块导入进来并设置别名
// import * as utils from './utils.js';

// const { plus, minus } = utils;

// import { plus, minus } from './utils.js';

// const res1 = plus(1, 2);
// const res2 = minus(1, 2);

// console.log(res1, res2);

// 副作用导入
// 模块内部存在将要执行的代码
// import './utils.js';

// 默认导出的，导入时必须先声明
// import utils, { plus, minus } from './utils.js';

// import utils, * as computedMethods from './utils.js';

// const { a, b } = utils;
// const { plus, minus } = computedMethods;

// const res1 = plus(a, b);
// const res2 = minus(a, b);

// console.log(res1, res2);

/**
 * 静态导入  import xxx from './xxx';
 * 动态导入  import()
 * 
 *    import关键字 ()不是调用方法
 *    typeof a  => typeof(a) 
 * 
 * 什么时候使用动态导入
 * 1. 静态导入太多了，有一些不需要马上加载的模块
 * 2. 异步模块导入
 * 3. 存在副作用的模块
 * 
 * import './utils'; => import('./utils');
 * 
 */

// import('./utils.js').then(module => {
//   const { a, b } = module.default;
//   const { plus, minus } = module;

//   const res1 = plus(a, b);
//   const res2 = minus(a, b);

//   console.log(res1, res2);
// });

(async () => {
  // 不能直接使用default，default作为关键字
  // 将default进行重命名就可以使用
  const { default: { a, b }, plus, minus } = await import('./utils.js');

  const res1 = plus(a, b);
  const res2 = minus(a, b);

  console.log(res1, res2);
})();

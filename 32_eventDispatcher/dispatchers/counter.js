import reducer from '../reducers/counter.js';
import { PLUS, MINUS } from '../actions/counter.js';

// dispatcher 根据类型来管理具体分发哪个事件
export default (ctx) => {
  const {
    plus,
    minus
  } = reducer(ctx.$data);

  return function (type, ...args) {
    switch (type) {
      case PLUS:
        ctx.result = plus(...args);
        break;
      case MINUS:
        ctx.result = minus(...args);
        break;
      default:
        break;
    }
  }
}

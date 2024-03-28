const { effectScope, ref } = Vue;

import { piniaSymbol } from './utils.js';

export default function createPinia () {
  // pinia中可以对state停止响应式
  // 通过effectScope创建一个独立的作用域来暂停活跃state对象
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  const store = new Map();

  return {
    state,
    store,
    scope,
    install
  }
}

function install (app) {
  app.provide(piniaSymbol, this);
}

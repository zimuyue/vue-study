import { piniaSymbol } from "./global.js";

const { effectScope, ref } = Vue;

export default function createPinia () {
  /**
   * {
   *   state
   * }
   */
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  const store = new Map();
  const plugins = [];

  function use (cb) {
    plugins.push(cb);
    return this;
  }

  return {
    use,
    store,   // _s
    state,
    scope,  // _e
    plugins, // _p
    install
  }
}

function install (app) {
  app.provide(piniaSymbol, this);
}
import { mergeObject, subscription } from "./utils.js";

const { watch } = Vue;

export let actionList = [];

export function createPatch (pinia, id) {
  return function $patch (stateOrFn) {
    if (typeof stateOrFn === 'function') {
      /**
       * {
       *   todolist1: {}
       *   todolist2: {}
       * }
       */
      stateOrFn(pinia.state.value[id]);
    } else {
      mergeObject(pinia.state.value[id], stateOrFn);
    }
  }
}

export function createReset (store, stateFn) {
  return function $reset () {
    const initialState = stateFn ? stateFn() : {};

    store.$patch(state => {
      Object.assign(state, initialState);
    })
  }
}

export function createSubscribe(pinia, id, scope) {
  return function $subscribe (cb, options = {}) {
    scope.run(() => watch(pinia.state.value[id], state => {
      cb({ storeId: id }, state);
    }, options))
  }
}

export function createOnAction () {
  return function $onAction (cb) {
    subscription.add(actionList, cb);
  }
}

export function createDispose(pinia, id, scope) {
  return function $dispose () {
    actionList = [];
    /**
     * Map {   delete(key)
     *   todolist1 => { .... },
     *   todolist2 => { .... }
     * }
     */
    pinia.store.delete(id);
    scope.stop();
  }
}

export function createState (pinia, id) {
  const store = pinia.store.get(id);

  Object.defineProperty(store, '$state', {
    get () {
      return pinia.state.value[id];
    },
    set (newState) {
      store.$patch(state => Object.assign(state, newState));
    }
  })
}
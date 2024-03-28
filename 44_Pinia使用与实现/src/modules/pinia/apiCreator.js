import {
  mergeObject,
  subscription
} from './utils.js';

const { watch } = Vue;

export const actionList = [];

export function createPatch (pinia, id) {
  return function  $patch (stateOrFn) {
    if (typeof stateOrFn === 'function') {
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

export function createSubscribe (pinia, id, scope) {
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

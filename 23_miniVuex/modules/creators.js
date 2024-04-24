import { forEachValueKey } from './utils.js';

const { computed, reactive } = Vue;

export function createState (store, state) {
  const _state = typeof state === 'function' ? state() : state;
  store._state = reactive({ data: _state });
}

export function createMutations (store, mutations) {
  forEachValueKey(mutations, (mutationFn, mutationKey) => {
    // 创建 mutation 函数
    // commit(type, payload) -> this._mutations[type](payload);
    store._mutations[mutationKey] = (payload) => {
      // 包装函数的目的达成
      mutationFn.apply(store, [store.state, payload]);
    }
  })
}

export function createActions (store, actions) {
  forEachValueKey(actions, (actionFn, actionKey) => {
    store._actions[actionKey] = (payload) => {
      actionFn.apply(store, [store, payload]);
    }
  })
}

export function createGetters (store, getters) {
  store.getters = {};
  forEachValueKey(getters, (getterFn, getterKey) => {
    // 包装响应式计算属性
    const getterFnComputed = computed(() => getterFn(store.state, getters));
    Object.defineProperty(store.getters, getterKey, {
      get () {
        return getterFnComputed.value;
      }
    })
  })
}

export function createCommit (store, commit) {
  store.commit = function (type, payload) {
    commit.apply(store, [type, payload]);
  }
}

export function createDispatch (store, dispatch) {
  store.dispatch = function (type, payload) {
    dispatch.apply(store, [type, payload]);
  }
}
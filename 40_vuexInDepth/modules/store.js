import {
  createState,
  createMutations,
  createActions,
  createGetters,
  createCommit,
  createDispatch
} from './creators.js';

const { inject } = Vue;

class Store {
  constructor (options) {
    const { 
      state,
      getters,
      mutations,
      actions
    } = options;

    const store = this;
    const { commit, dispatch } = store;

    // 隔离属性 -> 避免用户操作导致污染
    // 包装 data 是为了避免在 Vuex 中使用 replaceState 方法
    // 产生一个 new_state 又要调用 reactive(new_state)
    createState(store, state);

    store._mutations = Object.create(null);
    store._actions = Object.create(null);

    // 创建包装函数
    // 使得 mutations 内方法在调用时可以接收 state 参数
    // actions 内方法接收 store 参数
    createMutations(store, mutations);
    createActions(store, actions);
    createGetters(store, getters);

    // 将原型对象身上的方法添加至实例对象上
    createCommit(store, commit);
    createDispatch(store, dispatch);
  }

  get state () {
    return this._state.data;
  }

  commit (type, payload) {
    this._mutations[type](payload);
  }

  dispatch (type, payload) {
    this._actions[type](payload);
  }

  install (app) {
    app.provide('store', this);
    app.config.globalProperties.$store = this;
  }
}


export function createStore (options) {
  // 工厂模式 -> 每次调用都会产生一个新的 store
  return new Store(options);
}

export function useStore () {
  return inject('store');
}
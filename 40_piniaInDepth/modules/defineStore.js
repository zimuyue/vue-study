import { piniaSymbol } from "./global.js";

import {
  getArgs,
  isComputed,
  isFunction,
  subscription
} from "./utils.js";

import {
  actionList,
  createOnAction,
  createPatch,
  createReset,
  createDispose,
  createSubscribe,
  createState
} from "./apiCreator.js";

const {
  computed,
  effectScope,
  inject,
  isReactive,
  isRef,
  reactive,
  toRefs
} = Vue;

function createAPIs (pinia, id, scope) {
  return {
    $patch: createPatch(pinia, id),
    $subscribe: createSubscribe(pinia, id, scope),
    $onAction: createOnAction(),
    $dispose: createDispose(pinia, id, scope)
  }
}

export default function defineStore (...args) {
  const {
    id,
    options,
    setup
  } = getArgs(args);

  const isSetup = isFunction(setup);
  
  /*
    1. pinia 导入
    2. 判断 pinia.store => id
       没有 => 创建 store
       有 => 返回
  */
  function useStore () { // 创建 store
    const pinia = inject(piniaSymbol);

    if (!pinia.store.has(id)) {
      if (isSetup) {
        // pinia.store => id => store(setup)
        createSetupStore(pinia, id, setup);
      } else {
        createOptionStore(pinia, id, options);
      }
    }
    
    // store => Map => get set has
    return pinia.store.get(id);
  }

  return useStore;
}

function createSetupStore (pinia, id, setup) {
  const setupStore = setup();
  let store;
  let storeScope;

  const result = pinia.scope.run(() => {
    storeScope = effectScope();
    store = reactive(createAPIs(pinia, id, storeScope));
    return storeScope.run(() => compileSetup(pinia, id, setupStore));
  });

  return setStore(pinia, id, store, result);
}

function compileSetup (pinia, id, setupStore) {
  !pinia.state.value[id] && (pinia.state.value[id] = {});
  

  // ref  reactive   computedx  methods x
  for (let key in setupStore) {
    const el = setupStore[key];

    if ((isRef(el) && !isComputed(el)) || isReactive(el)) {
      /*
        pinia {
          state: {
            "todolist1": {
              todoList: []
            }
          }
        }
      */
      pinia.state.value[id][key] = el;
    }
  }

  return {
    ...setupStore
  }
}

// ----------------------------------------

function createOptionStore (pinia, id, options) {
  const {
    state,
    getters,
    actions
  } = options;

  let store;
  let storeScope;

  const result = pinia.scope.run(() => {
    storeScope = effectScope();
    store = reactive(createAPIs(pinia, id, storeScope));
    return storeScope.run(() => compileOptions(pinia, id, store, {
      state,
      getters,
      actions
    }))
  });

  return setStore(pinia, id, store, result, options.state);
}

function compileOptions(pinia, id, store, {
  state,
  getters,
  actions
}) {
  const storeState = createStoreState(pinia, id, state);
  const storeGetters = createStoreGetters(store, getters);
  const storeActions = createStoreActions(store, actions);

  return {
    ...storeState,
    ...storeGetters,
    ...storeActions
  }
}

function createStoreState (pinia, id, state) {
  pinia.state.value[id] = state ? state() : {};
  /*
    {
       todolist1: ref(pinia.state.value['todolist1'])
       todolist2: ref(pinia.state.value['todolist2'])
    }
  */
  return toRefs(pinia.state.value[id]);
}

function createStoreGetters (store, getters) {
  /*
    getters: {
      count () {
       // this => store
        return this.todoList.length
      }
    }
  */

  // [ count, count1, ]

  /*
    {
      count: computed(() => getters.count.call(store))
    }
  */
  return Object.keys(getters || {}).reduce((wrapper, getterName) => {
    wrapper[getterName] = computed(() => getters[getterName].call(store));
    return wrapper;
  }, {});
}

function createStoreActions (store, actions) {
  return Object.keys(actions || {}).reduce((wrapper, actionName) => {
    wrapper[actionName] = function () {
      let res;
      const afterList = [];
      const errorList = [];
      
      subscription.triggle(actionList, { after, onError });

      try {
        // addTodo toggleTodo removeTodo
        res = actions[actionName].apply(store, arguments);
      } catch (e) {
        // 所有的onError的回调
        subscription.triggle(errorList, e);
      }
      
      // addTodo => promise
      if (res instanceof Promise) {
        return res.then(r => {
          return subscription.triggle(afterList, r);
        }).catch(e => {
          subscription.triggle(errorList, e);
          return Promise.reject(e);
        })
      }
      
      // 所有的after的回调
      subscription.triggle(afterList, res);
      return res;

      function after (cb) {
        afterList.push(cb);
      }

      function onError (cb) {
        errorList.push(cb);
      }
    }
    return wrapper;
  }, {});
}

// -------------------------------

function setStore (pinia, id, store, result, stateFn) {
  pinia.store.set(id, store);
  store.$id = id;
  stateFn && (store.$reset = createReset(store, stateFn));
  Object.assign(store, result);
  createState(pinia, id);
  runPlugins(pinia, store);
  return store;
}

function runPlugins (pinia, store) {
  pinia.plugins.forEach(plugin => {
    const res = plugin({ pinia, store });

    if (res) {
      Object.assign(store, res);
    }
  })
}

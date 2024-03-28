import {
  getArgs,
  piniaSymbol,
  isFunction,
  isComputed,
  subscription
} from './utils.js';

import {
  actionList,
  createOnAction,
  createPatch,
  createReset,
  createSubscribe
} from './apiCreator.js';

const {
  inject,
  reactive,
  effectScope,
  isRef,
  isReactive,
  computed,
  toRefs
} = Vue;

function createAPIs (pinia, id, scope) {
  return {
    $patch: createPatch(pinia, id),
    $subscribe: createSubscribe(pinia, id, scope),
    $onAction: createOnAction()
  }
}


export default function defineStore (...args) {
  const {
    id,
    options,
    setup
  } = getArgs(args);

  const isSetup = isFunction(setup);
  
  // 创建store
  function useStore () {
    const pinia = inject(piniaSymbol);
    // 如果没有store就去创建
    if (!pinia.store.has(id)) {
      if (isSetup) {
        createSetupStore(pinia, id, setup);
      } else {
        createOptionStore(pinia, id, options);
      }
    }
    return pinia.store.get(id);
  }

  return useStore;
}

function createSetupStore (pinia, id, setup) {
  const setupStore = setup();

  let store,
      storeScope;

  const result = pinia.scope.run(() => {
    storeScope = effectScope();
    store = reactive(createAPIs(pinia, id, storeScope));
    return storeScope.run(() => complieSetup(pinia, id, setupStore));
  })

  return setStore(pinia, id, store, result);
}

function setStore (pinia, id, store, result, stateFn) {
  pinia.store.set(id, store);
  store.$id = id;
  stateFn && (store.$reset = createReset(store, stateFn));
  Object.assign(store, result);
  return store;
}

function complieSetup (pinia, id, setupStore) {
  !pinia.state.value[id] && (pinia.state.value[id] = {});

  for (let key in setupStore) {
    const el = setupStore[key];

    if ((isRef(el) || !isComputed(el)) || isReactive(el)) {
      pinia.state.value[id][key] = el;
    }
  }

  return {
    ...setupStore
  }
}

function createOptionStore (pinia, id, options) {
  const {
    state,
    getters,
    actions
  } = options;

  let store,
      storeScope;
  
  const result = pinia.scope.run(() => {
    storeScope = effectScope();
    store = reactive(createAPIs(pinia, id, storeScope));
    return storeScope.run(() => complieOptions(pinia, id, store, {
      state,
      getters,
      actions
    }));
  })

  return setStore(pinia, id, store, result, state);
}

function complieOptions (pinia, id, store, {
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
  return toRefs(pinia.state.value[id]);
}

function createStoreGetters (store, getters) {
  return Object.keys(getters || {}).reduce((wrapper, getterName) => {
    wrapper[getterName] = computed(() => getters[getterName].call(store));
    return wrapper;
  }, {})
}

function createStoreActions (store, actions) {
  return Object.keys(actions || {}).reduce((wrapper, actionName) => {
    wrapper[actionName] = function () {
      let res;

      const afterList = [],
            errorList = [];

      subscription.triggle(actionList, { after, onError });

      try {
        res = actions[actionName].apply(store, arguments);
      } catch (e) {
        subscription.triggle(errorList, e);
      }

      if (res instanceof Promise) {
        return res.then(r => {
          return subscription.triggle(afterList, r);
        }).catch(e => {
          subscription.triggle(errorList, e);
          return Promise.reject(e);
        })
      }

      function after (cb) {
        afterList.push(cb);
      }

      function onError (cb) {
        errorList.push(cb);
      }

      subscription.triggle(afterList, res);
      return res;
    }
    return wrapper;
  }, {})
}

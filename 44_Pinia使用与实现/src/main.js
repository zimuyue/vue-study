const { createApp } = Vue;
const {
  // createPinia,
  storeToRefs
} = Pinia;

import { createPinia } from './modules/pinia/index.js';

import {
  useCounterStore,
  useConfigStore
} from './store.js';

// pinia是一个对象用来管理所有创建出来的store -> _s Map
const pinia = createPinia();

console.log('pinia:', pinia);

/**
 * Pinia是状态管理库
 * 对比Vuex库，Pinia设计团队认为mutation是冗余的
 * 并且它认为在设计store中提倡更加扁平化的管理
 * Vuex中store是采用树状结构，而Pinia认为store都是单独的仓库
 * 
 * createPinia -> 创建一个统一管理用户定义的store容器 -> pinia
 * defineStore -> 创建拥有state getters actions的store容器
 */

const app = createApp({
  name: 'App',
  template: `
    <div>
      <div>
        <h1>{{ count }}</h1>
        <h2>{{ doubleCount }}</h2>
        <button @click="increment">Click!</button><br />
        <button @click="handlePatch">Patch!</button><br />
      </div>
      <div>
        <h2>{{ aside }}</h2>
        <h3>{{ totalCount }}</h3>
        <button @click="addAside">Add!</button>
        <button @click="handleReset">Reset!</button>
      </div>
    </div>
  `,
  setup () {
    const store = useCounterStore();
    const { count, doubleCount } = storeToRefs(store);
    const { increment } = store;

    const cStore = useConfigStore();
    const { addAside } = cStore;

    const handlePatch = () => {
      store.$patch({ count: 100 });
    }

    const handleReset = () => {
      cStore.$reset();
    }

    store.$subscribe((info, state) => {
      console.log(info, state);
    })

    cStore.$onAction(({ after, onError }) => {
      console.log('before:', cStore.aside);

      after(() => {
        console.log('after:', cStore.aside);
      })

      onError((err) => {
        console.log('error:', err);
      })
    })

    return {
      count,
      doubleCount,
      increment,
      handlePatch,
      ...storeToRefs(cStore),
      addAside,
      handleReset
    }
  }
})

app.use(pinia).mount('#app');

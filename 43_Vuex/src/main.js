const { createApp } = Vue;
const { useStore } = Vuex;

import store from './store/index.js';

import * as TYPES from './store/types.js';

/**
 * Vuex 是一个中心状态管理库
 * 用于集中化管理应用中所有组件的共享状态
 * 它遵循单向数据流，由组件实例派发 dispatch 方法调用对应的 actions
 * 再通过 actions 去 commit mutations 来改变 state 状态
 * state 状态发生变更时，触发组件实例的渲染
 * 
 * Vuex 是借鉴 Redux 的产物
 * 不同点，Vuex 可以直接在组件中 commit mutations
 * 因为 actions 并不是必要的选项，主要作为触发异步行为的方法
 */

const app = createApp({
  name: 'App',
  template: `
    <div>
      <h1>{{ zstore.state.count }}</h1>
      <h2>{{ zstore.getters.checkCount }}</h2>
      <button @click="handleAddCount">Click!</button>
    </div>
  `,
  setup () {
    const zstore = useStore();

    console.log(zstore);

    const handleAddCount = () => {
      zstore.dispatch(TYPES.ADD_COUNT, zstore.state.count + 1);
    }

    return {
      zstore,
      handleAddCount
    }
  }
})

app.use(store).mount('#app');

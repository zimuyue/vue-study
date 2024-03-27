const { createApp } = Vue;
// const { useStore } = Vuex;

import store from './store/index.js';

import * as TYPES from './store/types.js';

import { useStore } from './modules/vuex/index.js';

/**
 * Vuex是一个中心状态管理库
 * 用于集中化管理应用中所有组件的共享状态
 * 它遵循单向数据流，由组件实例派发dispatch方法调用对应的actions
 * 再通过actions去commit mutations来改变state状态
 * state状态发生变更时，触发组件实例的渲染
 * 
 * Vuex是借鉴Redux的产物
 * 不同点，Vuex可以直接在组件中commit mutations
 * 因为actions并不是必要的选项，主要作为触发异步行为的方法
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

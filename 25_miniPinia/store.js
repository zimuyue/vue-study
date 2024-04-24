// const { defineStore } = Pinia;
import { defineStore } from './modules/pinia/index.js';

const { ref, computed } = Vue;

// setups
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment () {
    count.value ++;
  }

  return {
    count,
    doubleCount,
    increment
  }
})

export const useConfigStore = defineStore('config', {
  state: () => ({
    aside: 120
  }),
  getters: {
    totalCount () {
      return this.aside * 10;
    }
  },
  actions: {
    addAside () {
      this.aside += 10;

      // throw new Error('increment error!');
    }
  }
})

const { createStore } = Vuex;

import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  actions,
  mutations,
  getters
})

export default store;
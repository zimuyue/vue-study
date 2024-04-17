// const { createStore } = Vuex;
import { createStore } from '../modules/index.js';

import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const store = createStore({
  state: {
    count: 0
  },
  actions,
  mutations,
  getters
})

export default store;
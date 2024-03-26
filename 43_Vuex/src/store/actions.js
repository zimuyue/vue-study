import * as TYPES from './types.js';

export default {
  [TYPES.ADD_COUNT] (store, payload) {
    store.commit(TYPES.ADD_COUNT, payload);
  }
}
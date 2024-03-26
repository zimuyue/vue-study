import * as TYPES from './types.js';

export default {
  [TYPES.ADD_COUNT] (state, payload) {
    state.count = payload;
  }
}
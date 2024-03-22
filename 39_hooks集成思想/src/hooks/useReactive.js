const { reactive, toRefs } = Vue;

export default function useReactive(initialState) {
  const state = reactive(initialState);
  const stateRefs = toRefs(state);

  const setState = (key, value) => {
    if (({}).toString.call(key) === '[object Object]') {
      for (let k in key) {
        if (initialState.hasOwnProperty(k)) {
          state[k] = key[k];
        }
      }
    } else {
      if (typeof value === 'function') {
        state[key] = value(state[key]);
      } else {
        state[key] = value;
      }
    }
  }

  return [
    state,
    stateRefs,
    setState
  ]
}
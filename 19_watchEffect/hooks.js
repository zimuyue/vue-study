const { 
  ref,
  reactive,
  toRefs
} = Vue;

export function useState (initialState) {
  const state = ref(initialState);
  const stateSetter = (newState) => {
    state.value = typeof newState === 'function' ? newState(state) : newState;
  }
  return [
    state,
    stateSetter
  ]
}

export function useReactive (initialState) {
  const state = reactive(initialState);
  for(let key in state){
    state[`set${ key.slice(0, 1).toUpperCase() }${ key.slice(1) }`] = function (newState) {
      state[key] = typeof newState === 'function' ? newState(state) : newState;
    }
  }
  return [
    state,
    toRefs(state)
  ]
}

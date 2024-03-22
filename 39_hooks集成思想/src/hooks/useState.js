const { ref } = Vue;

export default function useState (initialState) {
  const _state = createState(initialState);
  const _setState = createStateSetter(_state);

  return [
    _state,
    _setState
  ]
}

function createState (initialState) {
  return ref(initialState);
}

function createStateSetter (state) {
  return function (newValue) {
    if (typeof newValue === 'function') {
      state.value = newValue(state);
    } else {
      state.value = newValue;
    }
  }
}

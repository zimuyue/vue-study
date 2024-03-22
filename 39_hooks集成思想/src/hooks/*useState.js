const { ref } = Vue;

/**
 * React中需要states与stateSetters来记录状态
 * 因为在React当中没有ref这种的API，都是基础值类型
 */

const states = []; // 记录状态
const stateSetters = []; // 记录操作状态的方法

let stateIndex = 0; // 由于闭包特性，需要记录调用useState对应的值

export default function useState (initialState) {
  states[stateIndex] = createState(initialState, stateIndex);
  
  if (!stateSetters[stateIndex]) {
    stateSetters.push(createStateSetter(stateIndex));
  }

  const _state = states[stateIndex];
  const _setState = stateSetters[stateIndex];

  stateIndex ++;

  // return数组是因为外界解构时可以直接对其重命名
  // 如果是对象的方式，还需要进行重命名映射，麻烦
  return [
    _state,
    _setState
  ]
}

function createState (initialState, stateIndex) {
  const state = ref(initialState);
  return states[stateIndex] !== undefined ? states[stateIndex] : state;
}

function createStateSetter (stateIndex) {
  return function (newValue) {
    if (typeof newValue === 'function') {
      states[stateIndex].value = newValue(states[stateIndex]);
    } else {
      states[stateIndex].value = newValue;
    }
  }
}

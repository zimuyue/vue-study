const { isRef } = Vue;

export function getArgs (args) {
  let id;
  let options;
  let setup;

  if (isString(args[0])) {
    id = args[0];

    if (isFunction(args[1])) {
      setup = args[1];
    } else {
      options = args[1];
    }
  } else {
    options = args[0];
    id = args[0].id;
  }

  return {
    id,
    options,
    setup
  }
}

export function isString (value) {
  return typeof value === 'string';
}

export function isFunction (value) {
  return typeof value === 'function';
}

export function isComputed (value) {
  return !!(isRef(value) && value.effect);
}

export function isObject (value) {
  return typeof value === 'object' && value !== null;
}

export function mergeObject (targetState, newState) {
  for (let k in newState) {
    const oldVal = targetState[k];
    const newVal = newState[k];

    if (isObject(oldVal) && isObject(newVal)) {
      targetState[k] = mergeObject(oldVal, newVal);
    } else {
      targetState[k] = newVal;
    }
  }

  return targetState;
}

export const subscription = {
  add (list, cb) {
    list.push(cb);
  },
  triggle (list, ...args) {
    list.forEach(cb => cb(...args));
  }
}
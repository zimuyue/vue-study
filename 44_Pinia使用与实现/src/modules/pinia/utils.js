const { isRef } = Vue;

export const piniaSymbol = Symbol('pinia'); // 防止全局变量污染

export function getArgs (args) {
  let id,
      options,
      setup;

  // defineStore('counterStore', {});
  // defineStore('counterStore', () => {});
  // defineStore({});

  if (isString(args[0])) {
    id = args[0];

    if (isFunction(args[1])) {
      setup = args[1];
    } else {
      options = args[1];
    }

  } else {
    id = args[0].id;
    options = args[0];
  }

  return {
    id,
    options,
    setup
  }
}

export function isString (val) {
  return typeof val === 'string';
}

export function isFunction (val) {
  return typeof val === 'function';
}

export function isComputed (val) {
  return !!(isRef(val) && val.effect);
}

export function isObject (val) {
  return typeof val === 'object' && val !== null;
}

export function mergeObject (targetState, newState) {
  for (let key in newState) {
    const oldVal = targetState[key],
          newVal = newState[key];

    if (isObject(oldVal) && isObject(newVal)) {
      targetState[key] = mergeObject (oldVal, newVal);
    } else {
      targetState[key] = newVal;
    }
  }
  return targetState;
}

export const subscription = {
  add (list, cb) {
    list.push(cb);
  },
  triggle (list, args) {
    list.forEach(cb => cb(args));
  }
}

function proxy(vm, target, key) {
  // 这里绑定 vm 是指
  // 我们可以通过在 methods 方法中直接去使用 this.a
  // 这样就实现了代理对象的意义，因为我们并不想这样使用 this.data.a 或者 this._data.a
  // 尤大更希望我们可以直接使用 this.a，这样设计的方式很细节
  Object.defineProperty(vm, key, {
    get() {
      return vm[target][key];
    },
    set(newValue) {
      if (vm[target][key] === newValue) return;
      vm[target][key] = newValue;
    }
  })
}

function isObject (value) {
  return typeof value === 'object' && value !== null;
}

function isArray (value) {
  return Array.isArray(value);
}

function setConstantProperty (data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: false,
    configurable: false,
    value
  });
}

export {
  proxy,
  isObject,
  isArray,
  setConstantProperty
}
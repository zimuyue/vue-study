function proxy(vm, target, key) {
  // 这里绑定vm是指
  // 我们可以通过在methods方法中直接去使用this.a
  // 这样就实现了代理对象的意义，因为我们并不想这样使用this.data.a或者this._data.a
  // 尤大更希望我们可以直接使用this.a，这样设计的方式很细节
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
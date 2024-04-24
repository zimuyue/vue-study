export default class Dep {
  constructor () {
    this.effectMap = new WeakMap();
  }

  // 记录副作用回调函数
  static effectCB = null;

  /*
    依赖收集
    WeakMap -> 弱引用
    {
      { a, b, c: {..d.} }: Map {
        {..d.}: Set [ cb, cb ]
        a: Set [cb, cb]
        b: Set [cb, cb]
      },
      { a, b, c: {..d.} }: Map {
        {..d.}: Set [ cb, cb ]
        a: Set [cb, cb]
        b: Set [cb, cb]
      }
    }
  */
  collect (target, key) {
    const { effectCB } = Dep;
    
    if (effectCB) {
      let depMap = this.effectMap.get(target);

      // Map {}
      if (!depMap) {
        depMap = new Map();
        this.effectMap.set(target, depMap);
      }

      let deps = depMap.get(key);

      // Set []
      if (!deps) {
        deps = new Set();
        depMap.set(key, deps);
      }

      // key: Set [cb]
      deps.add(effectCB);
    }
  }

  notify (target, key, value, oldValue) {
    const depMap = this.effectMap.get(target);

    if (!depMap) {
      return;
    }

    // Set [cb, cb]
    const deps = depMap.get(key);

    deps.forEach(dep => {
      const newValue = dep(value, oldValue);

      if (dep.computedRef) {
        dep.computedRef.value = newValue; 
      }
    })
  }
}

import { reactive } from './reactive.js';
import Computed from './Computed.js';
import Watcher from './Watcher.js';

class Vue {
  constructor (options) {
    const { data, computed, watch } = options;
    this.$data = data();
    this.init(this, computed, watch);
  }

  init (vm, computed, watch) {
    // 初始化响应式数据
    this.initData(vm);
    const computedIns = this.initComputed(vm, computed);
    const watcherIns = this.initWatcher(vm, watch);

    this.$computed = computedIns.update.bind(computedIns);
    this.$watch = watcherIns.invoke.bind(watcherIns);
  }

  initData (vm) {
    // 数据响应式
    // 传递两个回调函数 get 与 set
    reactive(vm, (key, value) => {
      //console.log(key, value);
    }, (key, newValue, oldValue) => {
      if (newValue === oldValue) {
        return;
      }
      //console.log(key, newValue, oldValue);
      this.$computed(key, this.$watch);
      this.$watch(key, newValue, oldValue);
    })
  }

  initComputed (vm, computed) {
    // 枚举 computed -> 增加 computedData
    // 返回实例 -> 实例里有 update -> 更新 computedData 的 value
    const computedIns = new Computed();

    for (let key in computed) {
      computedIns.addComputed(vm, computed, key);
    }

    return computedIns;
  }

  initWatcher (vm, watch) {
    // 枚举 wathcer -> 增加侦听器
    // 返回实例 -> 实例里有调用 watch 的方法 -> 执行侦听器
    const watcherIns = new Watcher();

    for (let key in watch) {
      watcherIns.addWatcher(vm, watch, key);
    }

    return watcherIns;
  }
}

export default Vue;

/**
 * Vue
 * 
 * data -> data() -> vm.$data -> reactive -> vm.xxx
 *     get vm[key] -> vm.$data[key]
 *     set vm[key] -> vm.$data[key] = newValue
 *        ? -> updateComputedProp -> value
 *        ? -> updateWatchProp -> callback
 *     
 * computed -> props -> {
 *   value -> get -> value
 *   get -> method
 *   dep -> [ a, b ]
 * }
 * 
 * watch -> props -> fn -> data set -> call fn
 * 
 */
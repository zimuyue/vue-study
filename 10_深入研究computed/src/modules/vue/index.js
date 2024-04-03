var Vue = (function () {

  var reg_var = /\{\{(.+?)\}\}/g,
      computedData = {},
      dataPool = {};

  var Vue = function (options) {
    this.$el = document.querySelector(options.el);
    this.$data = options.data();

    // 调用初始化方法
    this._init(this, options.computed, options.template);
  }

  Vue.prototype._init = function (vm, computed, template) {
    // 对实例中 data 设置响应式绑定
    dataReactive(vm);
    // 对 computed 中的属性设置响应式绑定
    computedReactive(vm,computed);
    // 触发渲染函数
    render(vm, template);
  }

  function render (vm, template) {
    var container = document.createElement('div'),
        _el = vm.$el;
    
    container.innerHTML = template;

    var domTree = _compileTemplate(vm, container);

    _el.appendChild(domTree);
  }

  function update (vm, key) {
    dataPool[key].textContent = vm[key];
  }

  // 编译模板生成 DOM 树节点
  function _compileTemplate (vm, container) {
    var allNodes = container.getElementsByTagName('*'),
        nodeItem = null;

    // 遍历所有节点，匹配绑定插值表达式的节点替换属性值
    for (var i = 0; i < allNodes.length; i ++) {
      nodeItem = allNodes[i];

      var matched = nodeItem.textContent.match(reg_var);
      
      if (matched) {
        nodeItem.textContent = nodeItem.textContent.replace(reg_var, function (node, key) {
          dataPool[key.trim()] = nodeItem;
          return vm[key.trim()];
        })
      }
    }

    return container;
  }

  function dataReactive (vm) {
    var _data = vm.$data;

    for (var key in _data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get () {
            return _data[key];
          },
          set (newValue) {
            _data[key] = newValue;
            update(vm, key);
            _updateComputedData(vm, key, function (key) {
              update(vm, key);
            })
          }
        })
      })(key);
    }
  }

  function computedReactive (vm, computed) {
    _initComputedData(vm, computed);

    // 对 computed 属性添加响应式绑定
    for (var key in computedData) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get () {
            return computedData[key].value;
          },
          set (newValue) {
            computedData[key].value = newValue;
          }
        }) 
      })(key);
    }
  }

  // 将 computed 中的属性数据进行依赖收集
  // 通过获取属性描述符信息，记录 value 函数或者 get 函数，同时记录模板中依赖
  function _initComputedData (vm, computed) {
    for (var key in computed) {
      var descriptor = Object.getOwnPropertyDescriptor(computed, key),
          descriptorFn = descriptor.value.get ? descriptor.value.get : descriptor.value;

      /**
       * total: {
       *   value: 函数执行返回的结果
       *   get: get
       *   dep: ['a', 'b']
       * }
       */
      
      computedData[key] = {};
      computedData[key].value = descriptorFn.call(vm);
      computedData[key].get = descriptorFn.bind(vm);
      computedData[key].dep = _collectDep(descriptorFn);
    }
  }

  // 模板中引用 computed 中的依赖收集
  function _collectDep (fn) {
    // 将 computed 函数转为字符串匹配依赖属性
    var _collection = fn.toString().match(/this.(.+?)/g);
    
    if (_collection.length > 0) {
      for (var i = 0; i < _collection.length; i ++) {
        _collection[i] = _collection[i].split('.')[1];
      }
    }

    return _collection;
  }

  function _updateComputedData (vm, key, update) {
    var _dep = null;

    for (var _key in computedData) {
      _dep = computedData[_key].dep;

      // 遍历依赖列表触发更新
      for (var i = 0; i < _dep.length; i ++) {
        // 只有当对应的属性值发生变更时才去触发更新
        // 实现计算属性数据的缓存
        if (_dep[i] === key) {
          vm[_key] = computedData[_key].get();
          update(_key);
        }
      }
    }
  }

  return Vue;
})();

export default Vue;

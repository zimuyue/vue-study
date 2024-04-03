/**
 * showPool   Map { dom: {} }
 * 
 * [
 *   [
 *     dom,
 *     {
 *       type: if/show
 *       prop: data
 *     }
 *   ]
 * ]
 * 
 * eventPool   Map { dom: {} }
 * 
 * [
 *   [
 *     dom,
 *     handler
 *   ]
 * ]
 */

var Vue = (function () {
  function Vue (options) {
    
    // 生命周期函数
    var recycles = {
      beforeCreate: options.beforeCreate.bind(this),
      created: options.created.bind(this),
      beforeMount: options.beforeMount.bind(this),
      mounted: options.mounted.bind(this)
    }

    // 挂载前触发 beforeCreate
    recycles.beforeCreate();

    // el
    this.$el = document.querySelector(options.el);
    this.$data = options.data();

    // 调用初始化方法
    this._init(this, options.template, options.methods, recycles);
  }

  Vue.prototype._init = function (vm, template, methods, recycles) {

    recycles.created();

    // 创建容器盒子保存模板
    var container = document.createElement('div');
    container.innerHTML = template;
    
    // 初始化记录绑定显示与隐藏的节点容器
    // 初始化记录绑定事件的节点容器
    var showPool = new Map();
    var eventPool = new Map();

    // 设置数据响应式
    initData(vm, showPool);
    // 对模板中每一个节点进行解析方法、隐藏与现实、事件绑定
    initPool(container, methods, showPool, eventPool);
    // 根据初始化事件池中对应的 DOM 元素绑定相应的事件
    bindEvent(vm, eventPool);
    // 触发渲染函数
    render(vm, showPool, container, recycles);
  }

  function initData (vm, showPool) {
    var _data = vm.$data;

    for (var key in _data) {
      (function (key) {
        Object.defineProperty(vm, key, {
          get: function () {
            return _data[key];
          },
          set: function (newValue) {
            // this.isShowImg1 = true
            _data[key] = newValue;
            update(vm, key, showPool);
          }
        })
      })(key);
    }
  }

  function initPool (container, methods, showPool, eventPool) {
    var _allNodes = container.getElementsByTagName('*');
    var dom = null;

    for (var i = 0; i < _allNodes.length; i ++) {
      dom = _allNodes[i];

      // 循环每一个节点添加至容器中，保存设置的变量数据
      var vIfData = dom.getAttribute('v-if');
      var vShowData = dom.getAttribute('v-show');
      var vEvent = dom.getAttribute('@click');

      if (vIfData) {
        showPool.set(
          dom,
          {
            type: 'if',
            prop: vIfData
          }
        );
        dom.removeAttribute('v-if');
      } else if (vShowData) {
        showPool.set(
          dom,
          {
            type: 'show',
            prop: vShowData
          }
        );
        dom.removeAttribute('v-show');
      }

      if (vEvent) {
        eventPool.set(
          dom, 
          methods[vEvent]
        );
        dom.removeAttribute('@click');
      }
    }
  }

  function bindEvent (vm, eventPool) {
    for (var [ dom, handler ] of eventPool) {
      vm[handler.name] = handler;
      dom.addEventListener('click', vm[handler.name].bind(vm), false);
    }
  }

  function render (vm, showPool, container, recycles) {
    var _data = vm.$data;
    var _el = vm.$el;

    for (var [ dom, info ] of showPool) {
      switch (info.type) {
        // 对于绑定 v-if 的元素去创建注释节点，替换到模板中
        case 'if':
          info.comment = document.createComment(['v-if']);
          !_data[info.prop] && dom.parentNode.replaceChild(info.comment, dom);
          break;
        // 对于绑定 v-show 的元素设置 style.display 属性控制显示隐藏
        case 'show':
          !_data[info.prop] && (dom.style.display = 'none');
          break;
        default:
          break;
      }
    }

    recycles.beforeMount();
    _el.appendChild(container);
    recycles.mounted();
  }

  function update (vm, key, showPool) {
    var _data = vm.$data;

    for (var [ dom, info ] of showPool) {
      if (info.prop === key) {
        switch (info.type) {
          case 'if':
            !_data[key] ? dom.parentNode.replaceChild(info.comment, dom)
                        : info.comment.parentNode.replaceChild(dom, info.comment);
            break;
          case 'show':
            !_data[key] ? (dom.style.display = 'none')
                        : (dom.removeAttribute('style'));
            break;
          default:
            break;
        }
      }
    }
  }

  return Vue;
})();

export default Vue;
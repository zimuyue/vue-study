import { initState } from "./state.js";
import { compileToRenderFunction } from './compiler/index.js';
import { mountComponent } from './lifecycle.js';

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;

    vm.$options = options;

    initState(vm);

    if (vm.$options.el) {
      // 挂载函数 -> Vue.prototype.$mount
      vm.$mount(vm.$options.el);
    }
  }

  Vue.prototype.$mount = function (el) {
    const vm = this,
          options = vm.$options;
    
    // 获取要挂载的 DOM 节点
    el = document.querySelector(el),
    vm.$el = el;

    if (!options.render) {
      let template = options.template;

      if (!template && el) {
        template = el.outerHTML;
      }

      // 解析模板生成渲染函数
      const render = compileToRenderFunction(template);
      options.render = render;
    }

    mountComponent(vm);
  } 
}

export {
  initMixin
}
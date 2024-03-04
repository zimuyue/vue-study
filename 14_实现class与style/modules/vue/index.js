import { reactive } from './reactive';
import { isObject } from './utils';
import { compileAttr } from './compile';

class Vue {
  constructor (options) {
    const { el, data, template } = options;

    this.$data = data();
    this.$el = document.querySelector(el);
    this.$stylePool = new Map();

    this.init(this, template);
  }

  init (vm, template) {
    this.initData(vm);
    this.render(vm, template);
  }

  initData (vm) {
    const _data = vm.$data;

    if (isObject(_data)) {
      reactive(vm, _data);
    }
  }

  render (vm, template) {
    const container = document.createElement('div');
    container.innerHTML = template;
    this.compileAttrs(vm, container);
    this.$el.appendChild(container);
  }

  compileAttrs (vm, container) {
    const allNodes = [...container.getElementsByTagName('*')];

    allNodes.forEach(el => {
      const attrs = [...el.attributes];

      attrs.forEach(attr => {
        const { name, value } = attr;
        compileAttr(vm, el, name, value);
      });

      el.removeAttribute(':class');
      el.removeAttribute(':style');
    });
  }
}

export default Vue;
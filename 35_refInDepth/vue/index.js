import { ref, createRefs } from './hooks.js';
import { render } from './render.js';
import { bindEvent } from './event.js';

function createApp (el, { refs, methods }) {
  const $el = document.querySelector(el);
  const allNodes = $el.querySelectorAll('*');
  const refsMap = createRefs(refs, allNodes); // 根据 refs 集合收集 deps

  // 收集好依赖后进行渲染
  render(refsMap);
  // 一定要改变 this 指向，因为在调用方法时内部 this 要指向数据源
  bindEvent.apply(refs, [methods, allNodes]);
}

export {
  ref,
  createApp
}
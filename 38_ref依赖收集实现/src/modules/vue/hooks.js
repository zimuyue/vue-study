import Ref from './Ref.js';

const reg_var = /\{\{(.+?)\}\}/;

export function ref (value) {
  return new Ref(value);
}

export function createRefs (refs, nodes) {
  nodes.forEach(el => {
    // 循环每一个节点，将每个节点插值语法中引用的ref值，进行依赖收集
    if (reg_var.test(el.textContent)) {
      // 匹配后去除空格 -> '{{ title }}' -> ' title '
      const refKey = el.textContent.match(reg_var)[1].trim();
      // refs中包含数据项，则进行依赖收集
      if (refs[refKey]) {
        refs[refKey].deps.add(el);
      }
    }
  })
  return refs;
}

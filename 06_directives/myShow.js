// https://cn.vuejs.org/guide/reusability/custom-directives.html
export default (el, bindings) => {
  // 如果 mounted 和 updated 内部逻辑一样
  // 可以直接对外暴露一个函数，重复内部逻辑操作
  const isShow = bindings.value;
  // 直接操作 DOM
  el.style.display = isShow ? '' : 'none';
}

// https://cn.vuejs.org/guide/reusability/custom-directives.html

// export default {
//   mounted,
//   updated
// }

// function mounted (el, bindings) {
//   const isShow = bindings.value;
//   el.style.display = isShow ? '' : 'none';
// }

// function updated (el, bindings) {
//   const isShow = bindings.value;
//   el.style.display = isShow ? '' : 'none';
// }

export default (el, bindings) => {
  // 如果mounted和updated内部逻辑一样
  // 可以直接对外暴露一个函数，重复内部逻辑操作
  const isShow = bindings.value;
  // 直接操作DOM
  el.style.display = isShow ? '' : 'none';
}

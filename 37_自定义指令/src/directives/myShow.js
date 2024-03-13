// export default {
//   // created,
//   // beforeMount,
//   mounted,
//   // beforeUpdate,
//   updated,
//   // beforeUnmount,
//   // Unmounted
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

/**
 * el: 被绑定指令的元素，DOM对象 （对象） {}
 * 
 * bindings
 * arg: 指令的参数 -> myShow:abc -> abc
 * dir: 指令对象里的所有属性
 * instance: 使用指令的组件实例
 * modifiers: 指令的修饰符集合
 * oldValue: 更新前的指令绑定的值, beforeUpdate, updated
 * value: 当前指令绑定的值
 * 
 * vnode: 绑定指令元素的虚拟节点
 * prevNode: 上一个虚拟节点，beforeUpdate  updated
 */

// 在绑定元素attr或监听事件绑定事件处理之前
function created (el, bindings, vnode, prevNode) {
  console.log('created', el, bindings, vnode, prevNode);
}

// 当指令第一次绑定到元素并且在挂载父组件之前调用
function beforeMount (el, bindings, vnode, prevNode) {
  console.log('beforeMount', el, bindings, vnode, prevNode);
}

// 在绑定元素的父组件被挂载前调用 
function mounted (el, bindings, vnode, prevNode) {
  console.log('mounted', el, bindings, vnode, prevNode);
}

// 在更新包含组件的VNode之前调用
function beforeUpdate (el, bindings, vnode, prevNode) {
  console.log('beforeUpdate', el, bindings, vnode, prevNode);
}

// 在包含组件的VNode以及子组件的VNode更新后调用
function updated (el, bindings, vnode, prevNode) {
  console.log('updated', el, bindings, vnode, prevNode);
}

// 卸载绑定元素的父组件之前调用
function beforeUnmount (el, bindings, vnode, prevNode) {
  console.log('beforeUnmount', el, bindings, vnode, prevNode);
}

// 当指令与元素解除绑定且父组件卸载了，只调用一次
function Unmounted (el, bindings, vnode, prevNode) {
  console.log('Unmounted', el, bindings, vnode, prevNode);
}


/**
 * <my-c v-test></my-c>
 * 1. v-bind="$attr" -> 不会传递
 * 2. 绑定在组件，应用在组件的根元素
 */

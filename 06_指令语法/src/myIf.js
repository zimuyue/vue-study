export default {
  mounted,
  updated
}

function mounted (el, bindings) {
  const isShow = bindings.value;
  el.commentNode = document.createComment('v-my-if');
  !isShow && el.parentNode.replaceChild(el.commentNode, el);
}

function updated (el, bindings) {
  const isShow = bindings.value,
        oldIsShow = bindings.oldValue;

  /*
    如果该元素绑定了其它指令并触发组件 updated 的 VNode 更新
    将会导致该元素绑定的其它指令也会触发更新
    所以通过新旧值对比，当新值不等于旧值才去触发更新
  */
  if (isShow !== oldIsShow) {
    isShow ? el.commentNode.parentNode.replaceChild(el, el.commentNode)
           : el.parentNode.replaceChild(el.commentNode, el);
  }
}

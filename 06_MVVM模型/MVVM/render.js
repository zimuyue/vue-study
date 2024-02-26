import { eventFormat, stateFormat } from ".";
import { bindEvent } from "./compiler/event";
import { statePool } from "./compiler/state";

// 2.
// 用户传入的应用实例对象大致分为三个部分
// 需要解析的模板字符串、状态数据、实例方法
// 触发渲染函数

// 4.
// 根据对应标记的元素进行绑定事件
export function useDOM ({ template, state, methods }, rootDOM) {
  rootDOM.innerHTML = render(template, state);
  bindEvent(methods);
}

// 3.
// 渲染函数中内部做的事情分为两个部分
// 
// 解析模板中绑定事件函数的DOM元素并为其打上标记
// 打标记的目的 -> 是为了后续在调用方法时确认与绑定事件的DOM元素是一致的
// 因为VM在记录事件的时候需要做到该事件与对应的DOM元素做到一一对应
// 
// 解析模板中绑定变量的DOM元素并为其打上标记
// 
export function render (template, state) {
  
  template = eventFormat(template);
  template = stateFormat(template, state);

  return template;
}

export function update (statePool, key, value) {
  const allElements = document.querySelectorAll('*');
  let oItem = null;

  statePool.forEach(item => {
    if (item.state[item.state.length - 1] === key) {
      for (let i = 0; i < allElements.length; i ++) {
        oItem = allElements[i];

        const _mark = parseInt(oItem.dataset.mark);

        if (item.mark === _mark) {
          oItem.innerHTML = value;
        }
      }
    }
  })
}
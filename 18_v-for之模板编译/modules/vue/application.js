import { compileTemplate } from "./compile";

const domNodePool = [];

export function createApp (options) {
  
  for (let option in options) {
    switch (option) {
      // 匹配配置项中components列表
      // 初始化组件实例配置
      case 'components':
        initComponent(options[option]);
        break;
      default:
        break;
    }
  }

  return {
    mount
  }
}

function initComponent (components) {
  for (let component of components) {
    // 触发组件函数获取组件模板以及组件实例状态
    let [ template, state ] = component();
    // 解析组件模板生成HTML节点
    const node = compileTemplate(template, state);
    domNodePool.push(node);
  }

  console.log(domNodePool);
}

function mount (el) {
  const app = document.querySelector(el);
  const oFrag = document.createDocumentFragment();

  domNodePool.forEach(node => {
    oFrag.appendChild(node);
  });

  app.appendChild(oFrag);
}
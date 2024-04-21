import App from './App';

Vue.createApp(App).mount('#app');

/*
  Vue 通过底层核心系统将用户编写的 template 模板，解析为 AST 树
  为了将 template 上编写的指令语法、插值语法、自定义事件等等一系列操作
  通过 JS 逻辑进行转换并过滤掉这些书写方式，生成干净的 AST 树
  然后将 AST 树生成虚拟 DOM 树，最终将 vDOM 转换为 rDOM 真实节点

  每一次视图要更新时
  将 old vNode 虚拟节点进行 diff 算法对比，找出发生节点的变化
  采用就地更新策略，进行 patch 打补丁，更新 rDOM 真实节点

  keep-alive 组件作用
  当视图发生变化，缓存当前组件的 vNode，组件不再进行 unmount
  使用 activated 和 deactivated 控制组件的激活与停用
*/

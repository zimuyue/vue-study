import App from './App';

Vue.createApp(App).mount('#app');

/**
 * Vue通过底层核心系统将用户编写的template模板，解析为AST树
 * 为了将template上编写的指令语法、插值语法、自定义事件等等一系列操作
 * 通过JS逻辑进行转化并过滤掉这些书写方式，生成干净的AST树
 * 然后将AST树生成虚拟DOM树，最终将vDOM转化为rDOM真实节点
 * 
 * 每一次视图要更新时
 * 将old vNode虚拟节点进行diff算法对比，找出发生节点的变化
 * 采用就地更新策略，进行patch打补丁，更新rDOM真实节点
 * 
 * keep-alive组件作用
 * 当视图发生变化，缓存当前组件的vNode，组件不再进行unmount
 * 使用activated和deactivated控制组件的激活与停用
 */

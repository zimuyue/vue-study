import App from './App';

Vue.createApp(App).mount('#app');

/**
 * template -> AST树（v-if  v-for  v-show @click）-> JS逻辑/过滤掉
 * 干净的AST树 -> vNode虚拟节点 -> vDOM -> rDOM
 * 
 * 每一次视图要更新
 * 
 * 更新内容 -> vNode -> old vNode -> compare -> diff -> patch
 * -> 更新rDOM描述 -> 根据patch -> 更新真实DOM
 * 
 * 视图要变化 -> vNode -> 有/没有
 *           没有 -> 重新组装vNode -> 更新DOM
 *           有   -> 现成的vNode -> 更新DOM   keep-alive
 *                   缓存当前组件的vNode
 *                   不经过unmount
 * 
 *           缓存的是组件的实例 -> 有什么？vNode
 * 
 * 
 * vDOM  Virtual DOM
 * vNode Virtual Node
 * rDOM  Real DOM
 * rNode Real Node
 */

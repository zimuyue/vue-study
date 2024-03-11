import App from './App';

Vue.createApp(App).mount('#app');


/**
 * provide 提供 / inject  注入
 * 
 * 组件化
 * 
 * 项目 -> 视图为线索
 * 切割成无数的碎片
 * 
 * 碎片 -> 组成我们想要的样子和功能
 * 碎片 -> 在其他不同的碎片中进行依赖，最终组合成一个页面交互的整体
 * 这个整体 -> 组件树
 * 
 * 组件A -> 其他任何组件进行依赖 -> 复用特性
 * 组件A -> 数据来源是依赖组件提供的 -> 可配置性
 * 原则上 -> 组件可以无限极的被依赖 -> 数据就可以无限极的被传递下去 -> 单向数据流
 * 导致了 -> 数据将穿过所有依赖关系中的组件，造成了 -> 许多层组件并未使用的数据出现
 * 组件中对属性要进行强制注册
 * 
 * 组件依赖关系要变得简单 -> 组件之间的嵌套关系不能过渡深 -> 组件化设计的时候 -> 组件的扁平化
 * 
 * Provide  Inject就来解决这个问题
 * 
 * 父组件 -> provide
 * 子组件 -> inject
 * 绑定的时候并不是响应式
 * 
 * 父组件是不知道谁使用了我的provide数据
 * 子组件也不知道谁提供了这个数据
 * 
 * 第一，在一个组件体系下，如果有深度嵌套
 * 
 * Page -> SideBar -> list -> item -> link
 * index ---index------------------>  link
 *          provide                   inject
 * 
 * 第二，在一个组件体系下，多层级多个组件使用的时候
 * 
 * TodoList -> TodoFooter -> TodoStastics
 * TodoList -> todos      -> Item
 * todoList ->  len       ->  len
 * 
 * Provide len ---------------> len
 * 
 */


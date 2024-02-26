# 渐进式框架
Angular 是一个综合性框架，类似于一个大型的开发平台
提供自上而下的开发流程，提供项目应用、状态管理，用来开发大型项目

React 是一个渐进式框架，只关心用户界面 View 视图层的数据渲染
Redux、react-router 都是社区开发者提供 React 团队并不关心插件的集成

Vue 也是一个渐进式框架，只关心用户界面 View 视图层的数据渲染
但是 Vue 官方提供了更多的社区生态 Vuex、vue-router 直接可以在框架中选择集成


## 数据绑定 & 数据流

数据绑定是指数据与视图渲染的直接关系

React 单向数据绑定，通过绑定 event 事件来更改 state 状态导致视图更新

Vue 双向数据绑定，通过绑定 event 事件来更改 data 状态导致视图更新
另一方面通过 v-model 绑定 input 事件，视图更新导致 data 状态变更

数据流是指父子组件中数据按照什么方向流动

Vue/React 都是单向数据流，通过父组件 state 向子组件传递 props 数据
子组件是无法通过更改 props 导致父组件 state 状态变更，这样是不被允许的
props: immutable value
state/data: mutable value

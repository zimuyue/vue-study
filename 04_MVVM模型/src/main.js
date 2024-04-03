/*
  MVVM 模型就是要将 View 层与 Modal 层连接起来
  而连接的桥梁就是 ViewModal 深度思考如何设计 vm

  1. 首先要做的是对 state 状态的响应式绑定
  通过 proxy 添加 getter 和 setter 函数来实现对状态的响应式追踪

  2. 通过应用入口函数，接收用户传入的配置项 options
  根据传入 template 模板进行模板编译，调用渲染函数
  
  3. 渲染函数中内部做的事情分为两个部分
  解析模板中绑定事件函数的 DOM 元素并为其打上标记
  打标记的目的 -> 是为了后续在调用方法时确认与绑定事件的 DOM 元素是一致的
  因为 VM 在记录事件的时候，需要将该事件与对应的 DOM 元素做到一一对应

  解析模板中绑定变量的 DOM 元素并为其打上标记

  4. 当数据发生变更时触发对应的 setter 函数
  调用 update 方法找出标记的节点更新页面视图
*/
import { useDOM, useReactive } from './mvvm/index.js';

function App () {
  
  const state = useReactive({
    count: 0,
    name: 'Xiaoyesensen'
  });

  const add = (num) => {
    state.count += num;
  }

  const minus = (num) => {
    state.count -= num;
  }

  const changeName = (name) => {
    state.name = name;
  }

  return {
    template: `
      <h1>{{ count }}</h1>
      <h2>{{ name }}</h2>
      <button onClick="add(2)">+</button>
      <button onClick="minus(1)">-</button>
      <button onClick="changeName('小野森森')">Change Name</button>
    `,
    state,
    methods: {
      add,
      minus,
      changeName
    }
  }
}

useDOM(
  App(), // template, state, methods
  document.querySelector('#app')
)
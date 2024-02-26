/**
 * MVC -> 驱动被MVC分离成三部分
 * 跟我们普通M V的逻辑混合在一起了
 * 
 * MVVM -> 驱动VM -> ViewModel 
 * M -> Model 数据保存和处理的层
 * V -> 视图
 */

import { useDOM, useReactive } from './MVVM';

function App () {
  
  // 5.
  // 为用户状态数据绑定 getter 与 setter 函数
  // getter 对状态数据递归添加数据劫持 proxy
  // setter 对状态数据的修改，当状态数据发生变更时
  // 对比新旧值然后调用更新函数，对视图的更新
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

// 1.
// 用户根据提供的入口函数传入应用实例进行解析
// 将解析好的HTML文档模板字符串挂载到对应的DOM元素上
useDOM(
  App(), // template, state, methods
  document.querySelector('#app')
)
import Vue from './vue/index.js';

/*
  通过模板编译方式将 template 转化为真实 DOM
  1. 获取到 template
  2. template -> AST树

  AST Abstract syntax tree  抽象语法树
  源代码的抽象语法结构的树状描述

  3. AST -> render 函数 ->  _c _v _s
  4. render 函数 -> 虚拟节点
  5. 设置 PATCH -> 打补丁到真实DOM
*/

const vm = new Vue({
  el: '#app',
  template: `
    <div style="color:red;font-size:20px;">
      hello {{ name }}
      <h1>{{ name }}</h1>
      <ul>
        <li style="color: green">{{ age }}</li>
        <li>{{ info.job }}</li>
      </ul>
    </div>
  `,
  data () {
    return {
      name: 'ming',
      age: 26,
      info: {
        job: 'teacher',
        students: [
          {
            id: 1,
            name: '小张'
          },
          {
            id: 2,
            name: '小王'
          }
        ]
      },
      hobby: ['piano', 'travel', 'film']
    }
  }
})

console.log(vm);

/*
  Vue 为什么要生成 AST 树
  因为 Vue 核心库中有很多设计的指令语法、插值语法、自定义指令等等
  要先将模板解析为 AST 树之后，再去生成虚拟 DOM

  下面这些库都是使用了 AST 树结构
  将代码进行转换，本质上其实就是字符串匹配拼接

  webpack import -> require()
  ts -> js
  eslint
*/
const vNode = {
  tag: 'div',
  type: 1,
  attrs: [
    {
      name: 'id',
      value: 'app'
    },
    {
      name: 'style', 
      value: {
        color: 'red', 
        fontSize: '20px'
      }
    }
  ],
  children: [
    {
      type: 3, 
      text: 'hello'
    },
    {
      type: 1,
      tag: 'h1',
      attrs: null,
      children: [
        {
          type: 3,
          text: '{{name}}'
        }
      ]
    }
  ]
}
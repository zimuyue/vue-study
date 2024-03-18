/**
 * 通过模板编译方式将template转化为真实DOM
 * 1、获取到template
 * 2、template -> AST树
 * 
 * AST Abstract syntax tree  抽象语法树
 * 源代码的抽象语法结构的树状描述
 * 
 * 3、AST -> render函数 ->  _c _v _s
 * 4、render函数 -> 虚拟节点
 * 5、设置PATCH -> 打补丁到真实DOM
 */

const AST = {
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "fn"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
}

/**
 * Vue为什么要生成AST树
 * 因为Vue核心库中有很多设计的指令语法、插值语法、自定义指令等等
 * 要先将模板解析为AST树之后，再去生成虚拟DOM
 *
 * 下面这些库都是使用了AST树结构
 * 将代码进行转换，本质上其实就是字符串匹配拼接
 *
 * webpack import -> require()
 * ts -> js
 * eslint
 */

/**
  <div id="app" style="color: red;font-size: 20px;">
    hello {{name}}
    <h1>{{ name }}</h1>
    <ul>
      <li style="color: green">{{ age }}</li>
      <li>{{ info.job }}</li>
    </ul>
  </div>
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
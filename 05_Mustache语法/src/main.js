/*
  Mustache 插值表达式语法

  tempalate 其实就是 HTML 字符串，Vue 通过内部核心库去编译模板
  解析模板中的插值表达式、绑定的属性和指令语法，生成 AST 树，组成虚拟 DOM
  将虚拟 DOM 树解析为真实 DOM，然后进行渲染
  
  虚拟 DOM 树存在的意义就是为了对比新老树节点是否需要更新

  模板中直接写 HTML 都是能够被 HTML 解析器解析的
*/

var data = {
  title: 'This is Github Mustache'
}

var html = Mustache.render(
  `<h1>{{ title }}</h1>`,
  data
)

document.getElementById('app').innerHTML = html;

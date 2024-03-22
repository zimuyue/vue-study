/**
 * 模板语法
 * tempalate其实就是HTML字符串，Vue通过内部核心库去编译模板
 * 解析模板中的插值表达式、绑定的属性和指令语法，生成AST树，组成虚拟DOM
 * 将虚拟DOM树解析为真实DOM，然后进行渲染
 * 虚拟DOM树存在的意义就是为了对比新老树节点是否需要更新
 * 
 * 模板中直接写HTML都是能够被HTML解析器解析的
 */

// 插值表达式 Mustache
// import Mustache from 'mustache';

var data = {
  title: 'This is Github Mustache'
}

var html = Mustache.render(
  `<h1>{{ title }}</h1>`,
  data
)

document.getElementById('app').innerHTML = html;

// Vue.createApp(App).mount('#app');

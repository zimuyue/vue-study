/**
 * 模板语法
 * 
 * tempalate -> HTML字符串 -> Vue特性 -> 表达式/属性/指令
 * 
 * Vue的模板都是基于HTML
 * 
 * 模板中直接写HTML都是能够被HTML解析器解析的
 * 
 * Vue -> 表达式/自定义属性/指令
 * 
 * Vue是一套模板编译系统
 * 
 * 开发者写template -> 分析HTML字符串 -> AST树 
 * -> 表达式/自定义属性/指令 -> 虚拟DOM树 -> 解析为真实DOM -> render
 * 
 * 虚拟DOM树存在的意义就是为了对比新老树节点是否需要更新
 */


/**
 * 插值表达式
 * 
 * Mustache
 */

// import Mustache from 'mustache';

// var data = {
//   title: 'This is Github Mustache'
// }

// var html = Mustache.render(
//   `<h1>{{ title }}</h1>`,
//   data
// )

// document.getElementById('app').innerHTML = html;

const { h } = Vue;

const App = {
  data () {
    return {
      title: 'This is Vue Mustache',
      author: 'Ming',
      dateTime: new Date(),
      content: 'Vue study'
    }
  },
  // template: `
  //   <div>
  //     <h1 class="title">{{ title }}</h1>
  //     <p>
  //       <span class="author">{{ author }}</span> - {{ dateTime }}
  //     </p>
  //     <p v-bind:title="content">{{ content }}</p>
  //   </div>
  // `,
  render () {
    return h(
      'div',
      {},
      [
        h(
          'h1',
          { class: 'title' },
          this.title
        ),
        h(
          'p',
          {},
          [
            h(
              'span',
              { class: 'author' },
              this.author
            ),
            ` - ${this.dateTime}`
          ]
        ),
        h(
          'p',
          { title: this.content },
          this.content
        )
      ]
    )
  }
}

Vue.createApp(App).mount('#app');

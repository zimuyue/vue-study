/**
 * 渲染函数 -> render函数
 * 
 * h函数的名称是createElement，意思是创建虚拟节点
 * 通过创建VNode组件实例，生成Virtual Node虚拟节点
 * 将多个虚拟节点组成虚拟DOM树，虚拟DOM树是对真实DOM树的描述
 * 
 * h函数的参数
 * h(component, description, children)
 * 
 * h函数的好处
 * 动态创建组件和元素，不需要在模板中硬编码，从而实现更加灵活的方式渲染界面
 * 
 * h函数的缺点
 * 可读性差，难以维护
 */

// Vue2的写法

// new Vue({
//   render (h) {
//     return h(App);
//   }
// }).$mount('#app');

/**
 <div class="app">
    <div class="article-box">
      <h1 class="title">{{ title }}</h1>
      <p>{{ author }} - <span class="date-time">{{ dateTime }}</span></p>
      <p class="content">{{ content }}</p>
    </div>
  </div>
*/

const { createApp, h } = Vue;

const app = createApp({
  name: 'App',
  data () {
    return {
      title: 'This is TITLE',
      author: 'Xiaoyesensen',
      dateTime: '2022-04-17',
      content: 'This is CONTENT.'
    }
  },
  render () {
    return h(
      // 渲染的标签名称
      'div',
      // 标签属性
      {
        class: 'app3'
      },
      h(
        'div',
        {
          class: 'article-box'
        },
        // 标签内存在多个HTML元素使用数组的形式
        [
          h(
            'h1',
            {
              class: 'title'
            },
            this.title
          ),
          h(
            'p',
            {},
            [
              // 渲染插值文本
              this.author + ' - ',
              h(
                'span',
                {
                  class: 'date-time'
                },
                this.dateTime
              )
            ]
          ),
          h(
            'p',
            {
              class: 'content'
            },
            this.content
          )
        ]
      )
    );
  }
});

app.mount('#app');

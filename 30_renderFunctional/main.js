/*
  渲染函数 -> render 函数

  h 函数的名称是 createElement 创建虚拟节点
  通过创建 VNode 组件实例，生成 Virtual Node 虚拟节点
  将多个虚拟节点组成虚拟 DOM 树，虚拟 DOM 树是对真实 DOM 树的描述

  h 函数的参数
  h(component, description, children)

  h 函数的好处
  动态创建组件和元素，不需要在模板中硬编码，从而实现更加灵活的方式渲染界面

  h 函数的缺点
  可读性差，难以维护

  https://cn.vuejs.org/guide/extras/render-function.html
*/

const { 
  createApp, 
  h,
  resolveComponent,
  resolveDynamicComponent
} = Vue;

const app = createApp({
  name: 'App',
  data () {
    return {
      title: 'This is TITLE',
      content: 'This is CONTENT',
      isOpen: false,
      listMap: [1, 2, 3]
    }
  },
  render () {
    // 标签、属性、子集
    // return h('h1', { class: 'title' }, this.title);

    // 没有 props 时默认第二个参数是 children
    // 推荐使用 {} 或 null 占位
    // return h('h1', this.title);
    // return h('h1', null, this.title);

    // 渲染多个子元素时使用数组形式
    // return h('h1', [
    //   this.title,
    //   h('span', this.content)
    // ])

    // 全局注册的组件
    // return h(resolveComponent('MyTest'))

    // 局部注册可以直接使用h函数或者 resolveComponent
    // return h('MyTest')

    // v-if 渲染
    // return h('h1', [
    //   this.isOpen ?
    //   h('span', this.title) :
    //   h('p', this.content)
    // ])

    // v-for 渲染
    // return h('ul', [
    //   ...this.listMap.map(item => {
    //     return h('li', null, item)
    //   })
    // ])

    // v-slot 渲染
    // return h(resolveComponent('MySlot'), null, {
    //   default: () => 'My Slot',
    //   title: () => this.title,
    //   content: (props) => h('p', props.content)
    // })
  }
})

app.component('MyTest', {
  name: 'MyTest',
  render () {
    return h('div', 'My Test Component')
  }
})

app.component('MySlot', {
  name: 'MySlot',
  render () {
    // console.log(this.$slots)
    return h('div', null, [
      h('h1', this.$slots.default()), // 默认插槽
      h('h2', this.$slots.title()), // 具名插槽
      h('h2', this.$slots.content({ // 作用域插槽
        content: 'My Slot Content'
      }))
    ])
  }
})

app.mount('#app');

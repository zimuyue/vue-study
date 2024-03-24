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
 * 
 * https://cn.vuejs.org/guide/extras/render-function.html
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

    // 没有props时默认第二个参数是children
    // 推荐使用{}或null占位
    // return h('h1', this.title);
    // return h('h1', null, this.title);

    // 渲染多个子元素时使用数组形式
    // return h('h1', [
    //   this.title,
    //   h('span', this.content)
    // ])

    // 全局注册的组件
    // return h(resolveComponent('MyTest'))

    // 局部注册可以直接使用h函数或者resolveComponent
    // return h('MyTest')

    // v-if渲染
    // return h('h1', [
    //   this.isOpen ?
    //   h('span', this.title) :
    //   h('p', this.content)
    // ])

    // v-for渲染
    // return h('ul', [
    //   ...this.listMap.map(item => {
    //     return h('li', null, item)
    //   })
    // ])

    // v-slot渲染
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

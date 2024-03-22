import Counter from './Counter.vue';

/**
 * 组件化拆分
 *  页面组件 indexPage 块组件容器
 *  块组件 -> 组件出口 + 子组件
 * 
 *  数据保存 + 逻辑
 *  Counter -> index + Result + Button
 * 
 *  视图 -> 数据 -> 属性
 *  方法 -> 事件传递 -> 块组件
 */

const IndexPage = {
  name: 'IndexPage',
  components: { Counter },
  template: `
    <counter />
  `
}

export default IndexPage;
// 块组件 index 组件出口
import Counter from './Counter.vue';

const IndexPage = {
  name: 'IndexPage',
  components: { Counter },
  template: `
    <Counter />
  `
}

export default IndexPage;
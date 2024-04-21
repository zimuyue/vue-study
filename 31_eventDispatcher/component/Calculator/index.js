// 块组件 index 组件出口
import Calculator from './Calculator.vue';

const IndexPage = {
  name: 'IndexPage',
  components: { Calculator },
  template: `
    <Calculator />
  `
}

export default IndexPage;
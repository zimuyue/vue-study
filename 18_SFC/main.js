/*
  开发页面的时候
  一个页面的每个部分单独分离成一个小切片
  每个切片都有自己的视图结构、样式、逻辑
  每个切片形成的结构、样式、逻辑的整体 -> 组件

  组件 -> 独立的块 
  任意地方多次使用 -> 复用性高
  独立使用 -> 维护性高
  高配置度 -> 接口 -> 传入一些属性 -> 配置性高 -> 使用的多样性

  组件注册分为全局注册和局部注册

  组件树 -> 遵循单向的数据流 Single-direction data flow
*/

import App from './*App';
import globalComponents from './components/Global';

const app = Vue.createApp(App);

// 组件的全局注册
globalComponents(app);

app.mount('#app');

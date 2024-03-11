/**
 * 组件注册、属性的传递、事件的传递、v-model组件化
 * Tab
 */
import Vue from 'vue';
import App from './App';

// const app = Vue.createApp(App);

// // app.component('my-table-row', {
// //   template: `
// //     <tr>
// //       <td>1</td>
// //       <td>2</td>
// //       <td>3</td>
// //     </tr>
// //   `
// // })

// app.mount('#app');

new Vue({
  render: h => h(App)
}).$mount('#app');
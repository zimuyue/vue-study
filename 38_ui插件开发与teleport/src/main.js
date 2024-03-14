import App from './App';

import { Modal } from './libs/MyUI';

// 应用实例
const app = Vue.createApp(App);

app.use(Modal);

// const app2 = Vue.createApp({
//   template: `<h1>Vue3 extend</h1>`
// })

// app2.mount('#title');

// console.log(app);

// 组件实例
app.mount('#app');


// Vue2 -> Vue.extend

// new Vue({
//   render: h => h(App)
// }).$mount('#app');

// 类似于Vue的构造函数
// 通过Vue.extend去构造一个带有组件的构造函数

// const Title = Vue.extend({
//   template: `<h1>Vue2 extend</h1>`
// });

// const titleComponent = new Title();

// titleComponent.$mount('#title');
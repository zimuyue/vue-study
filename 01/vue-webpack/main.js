console.log('Hello Vue!', Vue);

import App from './src/App.vue'

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

Vue.createApp(App).mount('#app');

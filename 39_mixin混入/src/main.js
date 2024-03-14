import App from './App';
import testMixin from './mixins/test';

const app = Vue.createApp(App);

// 全局注册mixin
app.mixin(testMixin).mount('#app');

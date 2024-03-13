import App from './App';
import { myShow } from './directives';

const app = Vue.createApp(App);

// 自定义指令的全局注册
app.directive('myShow', myShow);

app.mount('#app');

// import App from './App';
// import { myShow } from './directives';

import './main.scss';

import myIf from './myIf';
import myShow from './myShow';

const app = Vue.createApp({
  name: 'App',
  // 组件内局部注册
  directives: {
    myIf
  },
  data () {
    return {
      visible1: false,
      visible2: false
    }
  },
  template: `
    <div class="box box1" v-my-show="visible1"></div>
    <div class="box box2" v-my-if="visible2"></div>
    <button @click="visible1 = !visible1">Show/Hide</button>
    <button @click="visible2 = !visible2">Add/Remove</button>
  `
});

// 自定义指令的全局注册
app.directive('myShow', myShow);

app.mount('#app');

/**
 * 事件修饰符
 * @click.once
 * 
 * 目的在与把事件处理函数中非纯逻辑的程序分离出去
 * 
 */

/**
 * .prevent => 事件处理函数内部 -> Event.preventDefault();
 * .once => 只调用一次事件处理 -> 调用一次以后自动移除监听器  once: true
 * .stop => 阻止事件冒泡   cancelBubble  stopPropagation()
 * .capture => 采用捕获    capture => true
 * .self => 跳过非事件源的事件触发
 * .passive => 拥有不调用Event.preventDefault();
 */

/**
 * .prevent和.passive不能连用
 * 
 * 连用的情况，一定要注意顺序问题，
 */

import './main.scss';

const App = {
  template: `
    <form @submit.prevent="onSubmit">
      <input type="text" name="content" />
      <button type="submit">Submit</button>
    </form>
    <button @click.once="doOnce">Once</button>

    <div class="outer" @click.capture="outerClick">
      <div class="middle" @click.capture.prevent="middleClick">
        <div class="inner" @click.capture="innerClick"></div>
      </div>
    </div>
  `,
  methods: {
    onSubmit (e) {
      // 事件处理相关的程序 -> 非纯逻辑
      // e.preventDefault();
      console.log(123);
    },
    doOnce () {
      console.log('once');
    },
    outerClick () {
      console.log('outer');
    },
    middleClick (e) {
      console.log('middle');
      console.log(e.defaultPrevented);
    },
    innerClick () {
      console.log('inner');
    }
  }
}

Vue.createApp(App).mount('#app');
/*
  class style 的视图绑定
  v-bind:class v-bind:style -> :class/:style
  
  vue 对 v-bind:class/style 进行了特殊的封装
  形式是比较多的，对象和数组的绑定方式
  https://cn.vuejs.org/guide/essentials/class-and-style.html
*/
import './index.css';
import Vue from './vue/index.js';

const vm = new Vue({
  el: '#app',
  data () {
    return {
      isShow: true,
      hasError: false,
      titleStyle: {
        color: '#fff',
        fontSize: '20px'
      },
      titleShow: true,
      isContentBig: true,
      subTitleColor: 'orange'
    }
  },
  template: `
    <div
      :class="[
        'box',
        isShow ? 'show' : '',
        hasError ? 'danger' : ''
      ]"
    >
      <h1
        :style="[
          titleStyle,
          {
            display: titleShow ? 'block' : 'none'
          }
        ]"
      >
        This is TITLE
      </h1>
      <h2
        :style="{
          display: titleShow ? 'block' : 'none',
          color: subTitleColor,
          fontSize: '20px'
        }"
      >This is SUB_TITLE</h2>
      <p
        :class="{
          danger: hasError,
          big: isContentBig
        }"
      >
        This is CONTENT
      </p>
    </div>
  `
});

console.log(vm);
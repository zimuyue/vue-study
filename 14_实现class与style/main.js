/**
 * class style的视图绑定
 * v-bind：在标签上绑定属性
 * v-bind:class v-bind:style -> :class/:style
 * vue对v-bind:class/style进行了特殊的封装
 * 形式是比较多的，对象和数组的绑定方式
 */

import './main.scss';

// const MyAlert = {
//   data () {
//     return {
//       title: 'This is my first ALERT',
//       content: 'This is my content for my first ALERT.',
//       isShow: true,
//       hasError: true,
//       // alertClassObject: {
//       //   show: true,
//       //   danger: true
//       // }
//       showClass: 'show',
//       errorClass: 'danger',
//       btnBgColor: 'red',
//       btnStyle: {
//         color: '#fff',
//         backgroundColor: 'red'
//       },
//       commonBtnStyle: {
//         borderRadius: '17px'
//       }
//     }
//   },
//   // computed: {
//   //   alertClassObject () {
//   //     return {
//   //       show: this.isShow,
//   //       danger: this.isShow && this.hasError
//   //     }
//   //   }
//   // },
//   template: `
//     <!--<div class="my-alert danger show">-->
//     <!--<div
//       class="my-alert"
//       :class="{
//         // 加某个样式类名的真假条件
//         show: isShow,
//         danger: 'hasError'
//       }"
//     >-->
//     <!--<div
//       class="my-alert"
//       :class="alertClassObject"
//     >-->
//     <!--<div
//       :class="['my-alert', showClass, errorClass]"
//     >-->
//     <!--<div
//       :class="[
//         'my-alert',
//         isShow ? showClass : '',
//         isShow && hasError ? errorClass : ''
//       ]"
//     >-->
//     <div
//       :class="[
//         'my-alert',
//         hasError ? errorClass : '',
//         $attrs.class
//       ]"
//     >
//       <header class="header">
//         <h1>{{ title }}</h1>
//       </header>
//       <div class="content">
//         <p>{{ content }}</p>
//       </div>
//       <div class="btn-group">
//         <!-- :style : JS对象 数组 -> 属性名可以用camelCase kebab-case -->
//         <!--<button
//           :style="{
//             color: '#fff',
//             // backgroundColor: 'red'
//             'background-color': btnBgColor
//           }"
//         >-->
//         <!--<button
//           :style="btnStyle"
//         >-->
//         <!--<button
//           :style="[btnStyle, commonBtnStyle]"
//         >-->
//         <!--
//           渲染数组中最后一个被浏览器支持的值
//           如果浏览器本身支持不带前缀的值，那就渲染不带前缀的值
//         -->
//         <!--<button
//           :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
//         >-->
//         <!--
//           :style使用中，vue会在运行时自动检测添加相应的前缀
//         -->
//         <button
//           :style="[btnStyle, { '-webkit-transition': 'opacity .3s' }]"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//     <div></div>
//   `,
//   mounted () {
//     // $attrs -> 父组件通过调用组件时的传递的属性的集合  $attributes
//     console.log(this);
//   }
// }

// const App = {
//   components: {
//     MyAlert
//   },
//   data () {
//     return {
//       showClass: 'show'
//     }
//   },
//   template: `
//     <my-alert :class="showClass" data-id="1" />
//   `
// }

// Vue.createApp(App).mount('#app');
/**
 * camelCase   小托峰命名法 -> thisIsMyVariable  
 *    变量名  方法名
 * kebab-case  短横线命名法 -> this-is-my-variable
 *    脊柱命名法 spinal-case train-case
 *    对象的属性名、CSS常规的类名 -> BEM规范
 * snake_case  蛇形命名法   -> this_is_my_variable
 *    大写的常量 -> const ERROR_TYPE = {}, python推荐
 * 匈牙利命名法  变量 => 属性 + 类型 -> 描述   lpszTest -> lpsz 以空字符为结尾的字符串的长整型指针Test
 * PascalCase  大驼峰命名法 -> ThisIsMyVariable
 *    类名、组件名、大模块名
 */

// var obj = {
//   a: 1,
//   'my-id': 2,
//   myId: 2
// }

// obj['my-id']

import Vue from './modules';

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

var oBtn = document.getElementById('btn');

oBtn.addEventListener('click', function () {
  vm.hasError = true;
  vm.subTitleColor = 'purple';
}, false);


import Vue from './modules/vue/index.js';

/*
  条件渲染
  v-if v-else-if v-else
  v-show

  v-if 是对 DOM 的移除和添加，在移除的时候用注释节点占位
  对内部的子组件与事件监听都会销毁与重建

  v-if 只有条件是 truthy 的时候，才会被渲染（惰性渲染）
  v-show 总是会被渲染，用 display 来控制其显示与隐藏

  v-if 在切换的时候会提高开销，如果条件为假值，初始化渲染是不会进行的
  v-show 在切换的时候开销较低，但是初始化渲染时无论显示与否都要被渲染

  如果切换频繁就用 v-show
  如果切换不频繁，(加载时不需要的视图)，可以用 v-if
*/

const vm = new Vue({
  el: '#app',
  data () {
    return {
      isShowImg1: true,
      isShowImg2: true
    }
  },
  beforeCreate () {
    console.log('beforeCreate');
  },
  created () {
    console.log('created');
  },
  beforeMount () {
    console.log('beforeMount');
  },
  mounted () {
    console.log('mounted');
    this.isShowImg1 = false;
    this.isShowImg2 = false;
  },
  template: `
    <div>
      <div>
        <img v-if="isShowImg1" width="200" src="https://picsum.photos/200/300" />
        <img v-show="isShowImg2" width="200" src="https://picsum.photos/200/300" />
      </div>
      <button @click="showImg1">显示图片1</button>
      <button @click="showImg2">显示图片2</button>
    </div>
  `,
  methods: {
    showImg1 () {
      this.isShowImg1 = !this.isShowImg1;
    },
    showImg2 () {
      this.isShowImg2 = !this.isShowImg2;
    }
  }
});

console.log(vm);

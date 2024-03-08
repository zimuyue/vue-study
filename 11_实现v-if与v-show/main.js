import Vue from'./vue';

/**
 * 条件渲染
 * v-if v-else-if v-else
 * 
 * v-show
 * 
 * 指令 -> v-if="指令表达式"
 * 指令表达式返回truthy -> 渲染
 * 
 * v-show -> style/display -> 渲染 -> none/block
 * 
 * if (表达式) {
 * } else if (表达式) {
 * } else {}
 */

/**
 * v-if是对DOM的移除和添加，在移除的时候用注释节点占位
 *     对内部的子组件与事件监听都会销毁与重建
 * 
 * v-if只有条件是truthy的时候，才会被渲染（惰性渲染）
 * v-show总是会被渲染，用display来控制其显示与隐藏
 * 
 * v-if在切换的时候会提高开销，如果条件为假值，初始化渲染是不会进行的
 * v-show在切换的时候开销较低，但是初始化渲染时无论显示与否都要被渲染
 * 
 * 如果切换频繁就用v-show
 * 如果切换不频繁，(加载时不需要的视图)，可以用v-if
 */

const vm = new Vue({
  el: '#app',
  data () {
    return {
      isShowImg1: true,
      isShowImg2: true
      // data() -> $data -> vm
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
        <img v-if="isShowImg1" width="200" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F03%2F234931pwcmczi1zihcucmy.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628917111&t=39b489eccbeb07b87cf0900c428ff04d" />
        <img v-show="isShowImg2" width="200" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201312%2F31%2F111859myvyiivetyftfz2n.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628917111&t=f49cf7a4aedba0cd7caf052e4836d796" />
      </div>
      <button @click="showImg1">显示图片1</button>
      <button @click="showImg2">显示图片2</button>
    </div>
  `,
  methods: {
    showImg1 () {
      this.isShowImg1 = !this.isShowImg1;
      // this -> vm -> showImg2 -> showImg2 -> vm
    },
    showImg2 () {
      this.isShowImg2 = !this.isShowImg2;
    }
  }
});

console.log(vm);


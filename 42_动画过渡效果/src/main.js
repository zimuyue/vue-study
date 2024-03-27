const { createApp } = Vue;

/**
 * Vue提供工具实现过渡与动画
 * <Transition></Transition>
 * https://cn.vuejs.org/guide/built-ins/transition.html#the-transition-component
 * 
 * 动画性能
 * 1. transform opcity不会触发页面的重绘
 *    在使用动画时尽量避免操作元素的几何体的变化
 *    来提高动画的流畅性，通过合成器线程，并且在GPU的帮助下实现元素移动
 * 
 * 2. 开启硬件加速
 *    transform perspective back-face-visibility
 * 
 * 过渡时长
 * 推荐范围值 0.1s - 0.4s or 0.25s
 * 
 * 缓动函数easing function
 * ease-out ease-in使得过渡效果更佳自然
 */

const app = createApp({
  name: 'App',
  template: `
    <div>
      <h1 class="animate__animated animate__bounce">
        Ming is Comming!!
      </h1>

      <button
        :class="[
          'animate__animated',
          flag ? 'animate__shakeX' : ''
        ]"
        @click="handleCheck"
      >
        Check it!
      </button>

      <br />

      <button class="btn">缓动函数</button>

      <br />

      <Transition name="fade">
        <h2 v-show="flag">transition show</h2>
      </Transition>
    </div>
  `,
  data () {
    return {
      flag: false
    }
  },
  methods: {
    handleCheck () {
      this.flag = !this.flag;
    }
  }
})

app.mount('#app');

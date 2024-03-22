import {
  ref,
  createApp
} from './modules/vue/index.js';

createApp('#app', {
  // 响应式集合
  refs: {
    title: ref('This is My Title'),
    content: ref('This is My Content')
  },
  methods: {
    setTitle () {
      this.title.value = '这是我的标题';
    },
    setContent () {
      this.content.value = '这是我的内容';
    },
    reset () {
      this.title.$reset();
      this.content.$reset();
    }
  }
})

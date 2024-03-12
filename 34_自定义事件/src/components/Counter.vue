<template>
  <div>
    <h1>{{ count }}</h1>
    <!-- vue2  @click.native -->
    <my-button @click="setCount">+</my-button>
  </div>
</template>

<script>

import MyButton from './MyButton';
// 使用组件内的事件代替父组件调用子组件绑定的原生事件监听
export default {
  name: 'Counter',
  components: {
    MyButton
  },
  emits: ['click'],
  data () {
    return {
      count: 0
    }
  },
  methods: {
    setCount () {
      this.count ++;
      this.$emit('click', this.count);
    }
  }
}
</script>

<style>

</style>
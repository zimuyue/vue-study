<template>
  <div>
    <div class="box box1" v-my-show="visible1"></div>
    <div class="box box2" v-my-if="visible2"></div>
    <button @click="visible1 = !visible1">Show/Hide</button>
    <button @click="visible2 = !visible2">Add/Remove</button>
  </div>
</template>

<script>

/**
 * 自定义指令：内置指令中没有的，自定义一个指令
 * 指令：控制视图的一种继承方式，与DOM有关
 * 接口：直接对DOM的操作的底层行为
 * 
 * v-*
 * kebab-case
 * myShow -> v-my-show
 */

import {
  // myShow,
  myIf
} from './directives';

export default {
  name: 'App',
  // 指令的组件内部注册
  directives: {
    // myShow,
    myIf
  }, 
  data () {
    return {
      visible1: false,
      visible2: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100px;
    height: 100px;

    &.box1 {
      background-color: orange;
    }

    &.box2 {
      background-color: green;
    }
  }
</style>
<template>
  <div>
    <!-- <my-demo 
      :count="count"
      :status="status"
      v-bind="plusNumbers"
      :article="article"
    ></my-demo> -->
    
    <my-button btn-type="warning">Click</my-button>

    <div>
      <h1>{{ count }}</h1>
    </div>
  </div>
</template>

<script>

/**
 * kebab-case
 * 
 * 单向数据流
 * 
 * 一种组件化中的数据流向的规范
 * 
 * 数据总是从父组件向子组件流动 -> 子组件不可以改变父组件流入的数据（属性 props）
 * 
 * 子组件 -> 更改数据 -> 数据属于父组件定义的
 * 
 * v-bind="obj" => :a="obj.a" :b="obj.b"
 * v-bind:obj="obj"
 */

// import MyTest from './components/MyTest';

// import { Demo } from './myFunction';

// import MyDemo from './components/MyDemo';

export default {
  name: 'App',
  // components: {
  //   MyDemo
  // },
  data () {
    return {
      count: 0,
      status: 1, // 1
      article: {
        title: 'This is my TITLE',
        content: 'This is my CONTENT.'
      },
      plusNumbers: {
        x: 1,
        y: 2
      }
    }
  }
}
</script>

<style>

</style>
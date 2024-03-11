<template>
  <div>
    <!-- <my-test 
      v-bind:num="num" 
      :arr="arr"
      :str="str"
      :bool="bool"
      :obj="obj"
      v-bind="obj"
      :set-num="setNum"
      :demo="demo"
      :p="p"
      :status="status"
    ></my-test> -->

    <!-- <my-article 
      v-bind="article"
    ></my-article> -->

    <!-- <my-demo 
      :count="count"
      :status="status"
      v-bind="article"
      :title="article.title"
      :content="article.content"
    ></my-demo> -->

    <my-demo 
      :count="count"
      :status="status"
      v-bind="plusNumbers"
      :article="article"
    ></my-demo>
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

import MyDemo from './components/MyDemo';
import MyButton from './components/MyButton';
import MyArticle from './components/MyArticle';

export default {
  name: 'App',
  components: {
    // MyTest,
    MyArticle,
    MyDemo,
    MyButton
  },
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
      // num: 10000,
      // arr: [1,2,3,4,5],
      // // arr: {},
      // str: '123',
      // bool: true,
      // obj: {
      //   a: 1,
      //   b: 2
      // },
      // demo: new Demo(),
      // p: new Promise(resolve => resolve(1000)),
      // status: 1
      // article: {
      //   title: 'This is my TITLE',
      //   isRecom: true,
      //   status: '1',
      //   author: {
      //     name: 'Xiaoyesensen',
      //     website: 'https://www.google.com',
      //     follows: 20000
      //   },
      //   content: 'This is my CONTENT.',
      //   commentCount: 5,
      //   comments: [
      //     {
      //       id: 1,
      //       content: 'This is my COMMENT 1.',
      //       dateTime: '2021-09-23 13:04:25'
      //     },
      //     {
      //       id: 2,
      //       content: 'This is my COMMENT 1.',
      //       dateTime: '2021-09-23 13:04:25'
      //     },
      //     {
      //       id: 3,
      //       content: 'This is my COMMENT 1.',
      //       dateTime: '2021-09-23 13:04:25'
      //     },
      //     {
      //       id: 4,
      //       content: 'This is my COMMENT 1.',
      //       dateTime: '2021-09-23 13:04:25'
      //     },
      //     {
      //       id: 5,
      //       content: 'This is my COMMENT 1.',
      //       dateTime: '2021-09-23 13:04:25'
      //     },
      //   ]
      // }
    }
  },
  // methods: {
  //   setNum () {
  //     this.num ++;
  //     console.log(this.num);
  //   }
  // }
  methods: {
    addCount () {
      this.count ++;
    }
  }
}
</script>

<style>

</style>
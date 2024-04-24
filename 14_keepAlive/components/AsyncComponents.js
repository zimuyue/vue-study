import { defineAsyncComponent } from 'vue';

/*
  异步组件每当需要的加载的时候按需加载
  但是在浏览器请求中显示加载的文件名称
  我们并不清楚哪一个文件对应的是哪一个组件
  所以需要在 webpack 中，对 import 语句内路径之前写入注释 webpackChunkName
  这个注释 webpack 会去解析它，将一个异步组件看成一个代码块
  通过指定它名称前缀，判断是加载的哪一个异步组件，更清晰
  1.main.js => Intro.main.js
*/

/*
  异步组件 -> 不需要立即加载的组件
  被分割成代码块文件，按需从服务器上下载并加载
  AsyncComp: defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      resolve({
        data () {  
          return {}
        },
        template: ''
      })
    })
  })
*/

export const Intro = defineAsyncComponent(() => import(/* webpackChunkName: "Intro" */ './Intro'));
export const List = defineAsyncComponent(() => import(/* webpackChunkName: "List" */ './List'));
export const Article = defineAsyncComponent(() => import(/* webpackChunkName: "Article" */ './Article'));

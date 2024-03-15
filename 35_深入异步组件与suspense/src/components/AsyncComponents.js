import { defineAsyncComponent } from 'vue';
// import Loading from './Loading';
import Error from './Error';

/**
 * 异步组件每当需要的加载的时候按需加载
 * 但是在浏览器请求中显示加载的文件名称
 * 我们并不清楚哪一个文件对应的是哪一个组件
 * 所以需要在webpack中，在import语句内路径之前写入注释webpackChunkName
 * 这个注释webpack会去解析它，将一个异步组件看成一个代码块
 * 通过指定它名称前缀，判断是加载的哪一个异步组件，更清晰
 * 1.main.js => Intro.main.js
 */

export const Intro = defineAsyncComponent({
  //loadingComponent: Loading,
  errorComponent: Error,
  delay: 0,
  loader: () => new Promise(resolve => setTimeout(() => resolve(import(/* webpackChunkName: "Intro" */ './Intro1')), 1000))
});

export const List = defineAsyncComponent({
  //loadingComponent: Loading,
  errorComponent: Error,
  delay: 0,
  loader: () => new Promise(resolve => setTimeout(() => resolve(import(/* webpackChunkName: "List" */ './List')), 1000))
});

export const Article = defineAsyncComponent({
  //loadingComponent: Loading,
  errorComponent: Error,
  delay: 0,
  loader: () => new Promise(resolve => setTimeout(() => resolve(import(/* webpackChunkName: "Article" */ './Article')), 1000))
});

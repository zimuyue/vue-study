/*
  资源请求
  浏览器的资源都必须通过资源请求的方式或从缓存中调出的方式进行获取
  资源可以是某一条数据或文件，浏览器会对请求的资源进行渲染等工作

  多页面是对各个 HTML 的请求与响应使浏览器进行跳转切换页面
  单页面是通过 JS 来切换某个 HTML 中应该显示什么内容

  初始页面加载后，用户与页面交互时只会加载或更新页面的局部内容
  通过 AJAX 技术获取数据并使用 JS 动态更新页面

  hash 模式
   通过监听 hashchange 事件，当 URL 中哈希部分发生变化时
   通过前端维护的路由表，将不同的哈希值映射到相应的页面组件或视图中
   页面内容发生变化时，通过调用 window.location.hash 来更新 URL 状态

  history 模式
   通过浏览器 History-API 来实现页面之间的导航
   监听路由变化使用浏览器前进和后退的事件 popstate
   调用 history.pushState 和 history.replaceState 事件更新 URL
   为了支持 history 模式，服务器需要进行相应的配置，确保用户访问根路径时
   返回 index.html 入口页面

  history 模式对比 hash 模式，保持 URL 的语义化，并且对搜索引擎更友好
*/
import VueRouter from './VueRouter.js';

Vue.use(VueRouter);

const Home = { template: '<h1>Home</h1>' };
const About = { template: '<h1>About</h1>' };

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({ routes });

new Vue({
  name: 'App',
  template: `
    <div style="text-align:center;">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <hr />
      <router-view></router-view>
    </div>
  `,
  router
}).$mount('#app');

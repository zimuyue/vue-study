/**
 * 资源请求
 * 浏览器的资源都必须通过资源请求的方式或从缓存中调出的方式进行获取
 * 资源可以是某一条数据或文件，浏览器会对请求的资源进行渲染等工作
 * 
 * 多页面是对各个HTML的请求与响应使浏览器进行跳转切换页面
 * 单页面是通过JS来切换某个HTML中应该显示什么内容
 *  初始页面加载后，用户与页面交互时只会加载或更新页面的局部内容
 *  通过AJAX技术获取数据并使用JS动态更新页面
 * 
 * hash模式
 *  通过监听hashchange事件，当URL中哈希部分发生变化时
 *  通过前端维护的路由表，将不同的哈希值映射到相应的页面组件或视图中
 *  页面内容发生变化时，通过调用window.location.hash来更新URL状态
 * 
 * history模式
 *  通过浏览器History-API来实现页面之间的导航
 *  监听路由变化使用浏览器前进和后退的事件popstate
 *  调用history.pushState和history.replaceState事件更新URL
 *  为了支持history模式，服务器需要进行相应的配置，确保用户访问根路径时
 *  返回index.html入口页面
 * 
 * history模式对比hash模式，保持URL的语义化，并且对搜索引擎更友好
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

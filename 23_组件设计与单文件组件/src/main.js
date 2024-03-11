/**
 * 开发页面的时候
 * 
 * 我们的希望：
 * 一个页面的每个部分单独分离成一个小切片
 * 每个切片都有自己的视图结构、样式、逻辑
 * 每个切片形成的结构、样式、逻辑的整体 -> 组件
 * 
 * 组件 -> 独立的块 
 * 任意地方多次使用 -> 复用性高
 * 独立使用 -> 维护性高
 * 高配置度 -> 接口 -> 传入一些属性 -> 配置性高 -> 使用的多样性
 * 
 * 组件可以相互嵌套
 * 
 * header: 父组件
 * header: logo、导航、用户登录注册、搜索 -> 子组件
 * 
 * header -> logo -> 
 *   必要条件：header -> 注册logo组件
 * 
 * logo -> header传入的属性
 *   必要条件：logo -> 注册传入的属性
 */
/**
 * 单文件组件
 */

// const MyUser = {
//   template: `
//     <div>
//       <a href="#">Sign in</a> | <a href="#">Sign up</a>
//     </div>
//   `
// }

// const NavItem = {
//   props: ['navItem'],
//   template: `
//     <li style="float: left; padding: 0 15px;">
//       <a :href="navItem.link" target="_blank">{{ navItem.title }}</a>
//     </li>
//   `
// }

// const MyNav = {
//   components: {
//     NavItem
//   },
//   props: ['navData'],
//   template: `
//     <ul style="float: left; padding: 0 35px; margin: 0; list-style: none">
//       <nav-item
//         v-for="item of navData"
//         :key="item.id"
//         :nav-item="item"
//       />
//     </ul>
//   `
// }

// const MyLogo = {
//   template: `
//     <div style="float: left; padding: 0 20px;">LOGO</div>
//   `
// }

// const MyHeader = {
//   components: {
//     MyLogo,
//     MyNav,
//     MyUser
//   },
//   props: ['navData'],
//   template: `
//     <header>
//       <my-logo />
//       <my-nav :nav-data="navData" />
//       <my-user />
//     </header>
//   `
// }

// const App = {
//   // 组件的局部注册
//   components: {
//     MyHeader
//   },
//   data () {
//     return {
//       navData: [
//         { id: 1, title: 'Baidu', link: 'https://www.baidu.com' },
//         { id: 2, title: 'Google', link: 'https://www.google.com' },
//         { id: 3, title: 'Bing', link: 'https://www.bing.com' },
//       ],
//       navData2: [
//         { id: 1, title: '京东', link: 'https://www.jd.com' },
//         { id: 2, title: '淘宝', link: 'https://www.taobao.com' },
//         { id: 3, title: '天猫', link: 'https://www.tmall.com' },
//       ]
//     }
//   },
//   template: `
//     <div>
//       <my-header :nav-data="navData" />
//       <my-header :nav-data="navData2" />
//     </div>
//   `
// }

import App from './*App';
import globalComponents from './components/Global';

// 组件的全局注册

const app = Vue.createApp(App);
globalComponents(app);


app.mount('#app');

/**
 * 组件树 -> 单向的数据流    Single-direction data flow
 * 
 * 组件化设计
 * App -> navData
 *   MyHeader -> navData
 *     MyLogo
 *     MyNav -> navData
 *       NavItem -> navData -> item
 *     MyUser
 * 
 * 想办法 -> 组件化设计 -> 尽量的扁平化
 * 
 * 组件注册：全局注册  局部注册
 * 
 * Vue, 推荐组件名和使用组件时用的标签名尽量一致
 * 
 * PascalCase -> 有利于编辑器的代码补全
 *               JSX使用PascalCase进行标签书写
 * 
 * kebab-case -> 符合W3C对标签使用的规范 -> XHTML
 *               避免现有或将来的HTML标签的冲突  mytitle
 *               避免有一些大小写不敏感的文件系统，解析会出现问题
 * 
 * 双标签 -> 标准的HTML标签大多数都是双标签
 * 
 * 组件 -> DOM -> PascalCase -> HTML是不会正常处理
 * 
 * 组件名称 -> 一律使用PascalCase -> Vue -> 组件被看做一个类的模式
 * 
 */
/*
  vite 是开发服务器，与项目打包没有关系，底层采用 rollup 进行打包

  1.vite 创建开发服务器采用现代浏览器 es module 模块
    使用 imort 对本地服务 localhost:3000 发起一个 http 请求
    来响应展示页面

  2.对 .vue 文件做编译工作，编译为 .js 文件供浏览器使用
    同时对于引入的模块进行编译，例如
    import { createApp } from 'vue'
    es module 本身是不认识 'vue' 这种形式的，它只能解析 './' '../' '/' 文件
    所以 vite 会对 node_module 中引用的文件进行编译
    将 'vue' 转换为 './node_module/@vue/dist/runtime.esm-browser.js'
    最终 import 会再进行一次 http 请求
    import { createApp } from './node_module/@vue/dist/runtime.esm-browser.js'

  3.预构建 pre-build
    vite 会将所有的第三方依赖全部打包，放入 node_module 中的 .vite 文件
    通过 esbuild 进行打包，这样做的好处就是在引用的时候会更快一些
*/

/*
  开发 vite 时注意
  当在开发 vite 工具时，需要在该项目外界使用这个开发的工具时(vite)
  需要在该项目中使用 npm link 将这个工具包 link 到全局中
  然后在需要使用这个工具的项目中，在使用 npm link 将工具引入到项目中去
*/

/*
  vite 使用什么来构建服务

  vite1 使用 koa 构建服务
  vite2 使用 connect 构建服务，而 express 就是基于 connect 开发的框架

  connect 中间件工具，可以创建服务

  vite 就是想使用 connect 中的 middleware 中间件函数
  它具备 next 和函数执行暂停功能
  中间件的好处就是将函数内容进行切割，判断分割的内容是否需要执行，扩展性强
*/

/*
  实现 vite 要解决的问题
  1.创建服务
  2.创建一个静态服务，访问端口时映射一个静态的文件应用 index.html
  3.import 文件进行路径重写
  4.读取特定的文件内容
  5.将 .vue 文件编译为浏览器认识的 .js 文件
*/

export default class VueRouter {
  constructor (options) {
    this.$options = options;
    this.routeMap = {};
    this.vm = new Vue({
      data () {
        return {
          currentPath: '/'
        }
      }
    })
  }

  init () {
    // 监听hash值变化
    this.bindEvent();
    // 创建路由映射表
    this.createRouteMap();
    // 创建路由组件
    this.initRouteComponent();
  }

  bindEvent () {
    window.addEventListener('DOMContentLoaded', this.handleHashchange.bind(this));
    window.addEventListener('hashchange', this.handleHashchange.bind(this));
  }

  getHashValue () {
    return location.hash.slice(1) || '/';
  }

  handleHashchange () {
    const hash = this.getHashValue();
    this.vm.currentPath = hash;
    console.log(hash);
  }

  createRouteMap () {
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route;
    })
  }

  initRouteComponent () {
    Vue.component('router-view', {
      render: h => {
        const component = this.routeMap[this.vm.currentPath].component;
        return h(component);
      }
    })
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h('a', {
          attrs: {
            href: '#' + this.to
          }
        }, this.$slots.default)
      }
    })
  }

  static install (Vue) {
    Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          this.$options.router.init();
        }
      }
    })
    console.log('vue router installed!');
  }
}

// import App from './App.vue';

const { createApp } = Vue;

/**
 * Vue简述
 * Vue是一个渐进式框架，只关心用户界面view层的视图渲染
 * 提供自下而上的开发流程，官方提供了很多的社区生态如Vuex、vue-router等等
 * 这些库你可以选择集成到项目中去，与Angular相比，Angular更像是一个综合性大型框架
 * 提供自上而下的开发流程，提供项目应用、状态管理，通常用来开发大型项目
 * 
 * Vue的核心（系统）：模板语法 -> 核心库 -> 编译模板 -> 渲染DOM
 * 
 * Vue框架设计采用了MVVM模型的策略，完成了数据双向绑定的机制
 * 我们的业务关注点全部可以放到业务逻辑层
 * 视图层交给了ViewModel帮我们完成绑定数据、渲染和更新
 * 
 * Vue将数据与DOM进行关联，并建立响应式关联，数据改变，视图更新
 * 
 */

/**
 * 数据绑定 & 数据流
 * 数据绑定是指数据与视图渲染的直接关系
 * 1.Reacts是单向数据绑定，通过绑定event事件来更改state状态，导致视图更新
 * 2.Vue是双向数据绑定，通过绑定event事件来更改data状态导致视图更新
 *   另一方面通过v-model绑定input事件，视图更新导致data状态变更
 * 
 * 数据流是指父子组件中数据按照什么方向流动
 * Vue/React都是单向数据流，通过父组件state向子组件传递props数据
 * 子组件是无法通过更改props导致父组件state状态变更，这样是不被允许的
 * props: immutable value
 * state/data: mutable value
 */

const Article = {
  data () {
    return {
      title: 'This is a TITLE',
      author: 'Xiaoye',
      dateTime: '2021-06-26 20:50:08',
      content: 'This is a CONTENT',
      like: 0,
      isLogin: true,
      isFollowed: false,
      myComment: '',
      commentList: []
    }
  },
  methods: {
    likeThisArticle () {
      this.like ++;
    },
    followAction () {
      this.isFollowed = !this.isFollowed;
    },
    submitComment () {
      if (this.myComment.length > 0) {
        this.commentList.push({
          id: new Date().getTime(),
          dateTime: new Date(),
          content: this.myComment
        });

        console.log(this.commentList);
      }
    }
  }
}

createApp(Article).mount('#app');
// import App from './App.vue';

const { createApp } = Vue;

/**
 * Vue的核心（系统）：模板语法 -> 核心库 -> 编译模板 -> 渲染DOM
 * 
 * 组件逻辑的本质就是一个对象，里面有很多特定的属性
 * Vue将数据与DOM进行关联，并建立响应式关联
 * 数据改变，视图更新
 * 
 * Vue
 * 
 * 数据 -> ViewModel核心库 -> 视图
 *     <- ViewModel核心库 <- 
 * vue完成了数据双向绑定的机制
 * 
 * 我们的业务关注点全部可以放到业务逻辑层
 * 视图层交给了ViewModel帮我们完成绑定数据、渲染和更新
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
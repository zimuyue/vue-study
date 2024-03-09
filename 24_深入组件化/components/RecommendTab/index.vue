<template>
  <div class="tab">
    <div class="nav">
      <recommend-item
        v-for="(item, index) of tabData"
        :key="index"
        :title="item.title"
        :my-index="index"
        :current-index="currentIndex"
        @change-index="changeIndex"
      ></recommend-item>
    </div>
    <div class="list">
      <component :is="current.component" :data="current.data"></component>
    </div>
  </div>
</template>

<script>

import RecommendItem from './Item';

import ArticleList from '../List/ArticleList';
import ImageTextList from '../List/ImageTextList';
import AuthorList from '../List/AuthorList';

export default {
  name: 'recommend-tab',
  components: {
    RecommendItem,
    ArticleList,
    ImageTextList,
    AuthorList
  },
  props: ['initialIndex'],
  mounted () {
    this.currentIndex = 
         this.initialIndex > this.beData.length - 1 
         ? 0 
         : this.initialIndex;
  },
  computed: {
    current () {
      const currentItem = this.tabData[this.currentIndex];
      return {
        component: currentItem.component,
        data: currentItem.data
      }
    },
    // currentComponent () {
    //   return this.tabData[this.currentIndex].component;
    // },
    // currentData () {
    //   return this.tabData[this.currentIndex].data;
    // },
    tabData () {
      return [
        {
          title: '推荐软文',
          component: 'article-list',
          data: this.beData[0]
        },
        {
          title: '推荐图文',
          component: 'image-text-list',
          data: this.beData[1]
        },
        {
          title: '推荐作者',
          component: 'author-list',
          data: this.beData[2]
        }
      ]
    }
  },
  methods: {
    changeIndex (index) {
      this.currentIndex = index;
    }
  },
  data () {
    return {
      currentIndex: 0,
      beData: [
        [
          {
            id: 1,
            title: '北京环球度假区将于9月20日正式向公众开放',
            author: '环球时报',
            dateTime: '08-30 15:01'
          },
          {
            id: 2,
            title: '外媒：美国驻阿使馆主要人员已离开喀布尔',
            author: '京报网',
            dateTime: '08-30 21:58' 
          },
          {
            id: 3,
            title: '“女魔头”劳荣枝案何时宣判？南昌中院回应',
            author: '安徽网',
            dateTime: '08-30 16:33'
          }
        ],
        [
          {
            id: 1,
            title: '冰箱怎么选？什么样的更好用？我家换了三台冰箱，可以说一说感受',
            author: '装修第一站',
            dateTime: '2021-07-22 16:33',
            imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/59c4d23e8491458ab9dffbc58f2d6556?from=pc',
            status: 0,
          },
          {
            id: 2,
            title: '孩子被吼时为什么不说话，知道真相后你还敢吼孩子吗？',
            author: '男孩派',
            dateTime: '2021-08-06 09:47',
            imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/016b07cba31b48c19f094bb0a8915099.png?from=pc',
            status: 1
          },
          {
            id: 3,
            title: '浙江千亿富豪徐文荣，40岁创业，靠卖粪起家，创立900亿横店帝国',
            author: '戍楼吹角',
            dateTime: '2021-06-24 09:42',
            imgUrl: 'https://p6-tt.byteimg.com/origin/pgc-image/d232b80bb5ab456385cbfe162af59874?from=pc',
            status: 2
          }
        ],
        [
          {
            id: 1,
            name: '36氪',
            imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.69a2cd84.PE6uURU56A_JREArUHOTMA?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=60611',
            follows: 18800
          },
          {
            id: 2,
            name: '京报网',
            imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.ed185f66.Xf6-FXSHAq4IP0r9OkkLlg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=59100',
            follows: 339404
          },
          {
            id: 3,
            name: '新京报',
            imgUrl: 'https://user-center.cdn.bcebos.com/head/raw/uc.101.c74011dd.zho-8ZBOlVTWIURQsNAPBw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=41011',
            follows: 5403958
          }
        ] 
      ]
    }
  }
}
</script>

<style lang="scss">
  .tab {
    .nav {
      height: 50px;
      border-bottom: 1px solid #000;
    }
  }
</style>
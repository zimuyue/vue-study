<template>
  <div>
    <my-header :nav-data="navData" />
    <my-header :nav-data="navData2" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';

export default {
  // 组件的局部注册
  components: {
    MyHeader
  },
  data () {
    return {
      navData: [
        { id: 1, title: 'Baidu', link: 'https://www.baidu.com' },
        { id: 2, title: 'Google', link: 'https://www.google.com' },
        { id: 3, title: 'Bing', link: 'https://www.bing.com' },
      ],
      navData2: [
        { id: 1, title: '京东', link: 'https://www.jd.com' },
        { id: 2, title: '淘宝', link: 'https://www.taobao.com' },
        { id: 3, title: '天猫', link: 'https://www.tmall.com' },
      ]
    }
  }
}
</script>
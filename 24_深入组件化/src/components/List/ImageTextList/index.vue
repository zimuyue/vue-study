<template>
  <div>
    <ul>
      <li
        v-for="item of data"
        :key="item.id"
      >
        <img 
          :src="item.imgUrl" 
          :alt="item.title"
          class="text-img"
        />
        <span>{{ item.title }}</span>
        <span> - {{ item.author }}</span>
        <span>（{{ item.dateTime }}）</span>
        <span> - {{ item.status | formatStatus }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'image-text-list',
  props: ['data'],
  filters: {
    formatStatus (status) {
      switch (status) {
        case 0:
          return '最新';
        case 1:
          return '推荐';
        case 2:
          return '热门';
        default: 
          break;
      }
    }
  },
  methods: {
    formatStatus (status) {
      switch (status) {
        case 0:
          return '最新';
        case 1:
          return '推荐';
        case 2:
          return '热门';
        default: 
          break;
      }
    }
  }
  // computed: {
  //   imgTextData () {
  //     return this.data.map(item => {
  //       switch (item.status) {
  //         case 0:
  //           item.statusText = '最新';
  //           break;
  //         case 1:
  //           item.statusText = '推荐';
  //           break;
  //         case 2:
  //           item.statusText = '热门';
  //           break;
  //         default: 
  //           break;
  //       }

  //       return item;
  //     })
  //   }
  // }
}
</script>

<style>
  .text-img {
    width: 80px;
    vertical-align: middle;
    margin-right: 20px;
  }
</style>
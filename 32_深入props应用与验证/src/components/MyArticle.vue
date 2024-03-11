<template>
  <div>
    <h1>{{ recomText }}-{{ title }}-{{ statusText }}</h1>
    <p>Author name: <a :href="author.website">{{ author.name }}</a></p>
  </div>
</template>

<script>
export default {
  name: 'MyArticle',
  props: {
    title: String,
    isRecom: Boolean,
    status: [String, Number],
    author: Object,
    content: String,
    commentCount: Number,
    comments: Array
  },
  computed: {
    recomText () {
      return this.isRecom ? '【推荐】' : '';
    },
    statusText () {
      switch (this.status) {
        case 0:
          return '【最新】';
        case 1:
          return '【热门】';
        default:
          return '';
      }
    }
  }
}
</script>

<style></style>
<template>
  <div>
    <ul>
      <li 
        v-for="item of data"
        :key="item.id"
      >
        <img 
          :src="item.imgUrl" 
          :alt="item.author"
          class="author-img"
        >
        <span>{{ item.name }}</span>
        <span>（{{ item.follows }}）</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'author-list',
  props: ['data']

}
</script>

<style lang="scss">
  .author-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 20px;
  }
</style>
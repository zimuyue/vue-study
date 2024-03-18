<template>
  <ul class="my-nav">
    <nav-item
      v-for="item of navData"
      :key="item.id"
      :nav-item="item"
    />
  </ul>
</template>

<script>

import NavItem from './NavItem';

export default {
  name: 'my-nav',
  components: {
    NavItem
  },
  props: ['navData'],
}
</script>

<style lang="scss">
  .my-nav {
    float: left; 
    padding: 0 35px; 
    margin: 0; 
    list-style: none;
  }
</style>
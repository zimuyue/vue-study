<template>
  <li class="nav-item">
    <a :href="navItem.link" target="_blank">{{ navItem.title }}</a>
  </li>
</template>

<script>
export default {
  name: 'nav-item',
  props: ['navItem'],
}
</script>

<style lang="scss">
  .nav-item {
    float: left; 
    padding: 0 15px;
  }
</style>
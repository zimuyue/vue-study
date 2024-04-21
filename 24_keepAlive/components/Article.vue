<template>
  <div>
    <h1>Article</h1>
    <p>This is an article which describes how to use Dynamic component and Asynchronous component in Vue.</p>
    <p>{{ visitedCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      visitedCount: 0
    }
  },
  mounted () {
    console.log('Article mounted');
  },
  unmounted () {
    console.log('Article unmounted');
  },
  activated () {
    console.log('Article activated');
    this.visitedCount ++;
  },
  deactivated () {
    console.log('Article deactivated');
  }
}
</script>

<style>

</style>
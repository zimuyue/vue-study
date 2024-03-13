<template>
  <div>
    <h1>List</h1>
    <ul>
      <li
        v-for="n in 10"
        :key="n"
      >This is a list item #{{ n }} of my list.</li>
    </ul>
    <p>{{ visitedCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      visitedCount: 0
    }
  },
  mounted () {
    console.log('List mounted');
  },
  unmounted () {
    console.log('List unmounted');
  },
  activated () {
    console.log('List activated');
    this.visitedCount ++;
  },
  deactivated () {
    console.log('List deactivated');
  }
}
</script>

<style>

</style>
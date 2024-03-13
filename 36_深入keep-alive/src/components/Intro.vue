<template>
  <div>
    <h1>Intro</h1>
    <p>This is an introduction of Dynamic and Asynchronous component in Vue.</p>
    <p>{{ visitedCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      visitedCount: 0
    }
  },
  mounted () {
    console.log('Intro mounted');
  },
  unmounted () {
    console.log('Intro unmounted');
  },
  activated () {
    console.log('Intro activated');
    this.visitedCount ++;
  },
  deactivated () {
    console.log('Intro deactivated');
  }
}
</script>

<style>

</style>
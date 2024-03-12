<template>
  <ul>
    <h1>{{ listTitle }}</h1>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'MyListContainer',
  props: {
    listTitle: {
      type: String,
      default: 'My list'
    }
  }
}
</script>

<style>

</style>
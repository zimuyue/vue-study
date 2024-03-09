<template>
  <div class="tab-page">
    <h1>{{ pageData.title }}</h1>
    <p>{{ pageData.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'tab-page',
  props: ['pageData']
}
</script>

<style>
  .tab-page {
    width: 100%;
    height: 450px;
    padding: 25px;
    box-sizing: border-box;
  }
</style>
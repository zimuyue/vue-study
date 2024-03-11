<template>
  <div>
    <ul>
      <li
        v-for="item of data"
        :key="item.id"
      >
        <span>{{ item.title }}</span>
        <span> - {{ item.author }}</span>
        <span>（{{ item.dateTime }}）</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  props: ['data']
}
</script>

<style>

</style>
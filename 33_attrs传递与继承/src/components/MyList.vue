<template>
  <template v-for="item of myList">
    <li
      v-if="item.isSubscribable"
      :key="item.id"
      v-bind="$attrs"
    >
      <span>{{ item.title }}</span>
      <button :data-id="item.id">{{ item.subscribed ? '已订阅' : '订阅' }}</button>
    </li>
    <li v-else :key="item.id">
      <span>{{ item.title }}</span>
      <button disabled>不可订阅</button>
    </li>
  </template>
</template>

<script>
export default {
  name: 'MyList',
  props: {
    myList: Array
  },
  created () {
    console.log(this.$attrs);
  }
}
</script>

<style>

</style>
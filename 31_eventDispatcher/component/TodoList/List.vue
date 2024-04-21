<template>
  <ul>
    <ListItem
      v-for="item of todoData"
      :key="item.id"
      :item="item"
      @handleItem="handleItem"
    />
  </ul>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'TdList',
  components: {
    ListItem
  },
  props: {
    todoData: Array
  },
  methods: {
    handleItem (...args) {
      this.$emit('dispatch', ...args);
    }
  }
}
</script>
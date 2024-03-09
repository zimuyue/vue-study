<template>
  <div 
    :class="['nav-item', { active: currentIndex === myIndex }]"
    :style="{ width: 100 / navLen + '%' }"
    @click="changeIndex(myIndex)"
  >
    {{ navItem.itemTitle }}
  </div>
</template>

<script>
export default {
  name: 'nav-item',
  props: [
    'navItem', 'currentIndex', 'myIndex', 'navLen'
  ],
  methods: {
    changeIndex (index) {
      this.$emit('changeIndex', index);
    }
  }
}
</script>

<style lang="scss">
  .nav-item {
    float: left;
    height: 100%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;

    &.active {
      background-color: #000;
      color: #fff;
    }
  }
</style>
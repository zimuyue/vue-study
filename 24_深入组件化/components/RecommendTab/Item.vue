<template>
  <div
    :class="['recommend-item', { active: currentIndex === myIndex }]"
    @click="changeIndex(myIndex)"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'recommend-item',
  props: [
    'title',
    'myIndex',
    'currentIndex'
  ],
  methods: {
    changeIndex (index) {
      this.$emit('change-index', index);
    }
  }
}
</script>

<style lang="scss">
   .recommend-item {
     float: left;
     width: 150px;
     height: 50px;
     line-height: 50px;
     text-align: center;
     cursor: pointer;

     &.active {
       background-color: #000;
       color: #fff;
     }
   }
</style>
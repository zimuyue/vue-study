<template>
  <div class="tab-search">
    <input 
      type="text"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: 'tab-search',
  props: ['searchValue'],
  // computed: {
  //   value: {
  //     get () {
  //       return this.searchValue
  //     },
  //     set (newValue) {
  //       this.$emit('update:searchValue', newValue);
  //     }
  //   }
  // }
  data () {
    return {
      value: this.searchValue
    }
  },
  watch: {
    value () {
      this.$emit('update:searchValue', this.value);
    }
  }
}
</script>

<style lang="scss">
  .tab-search {
    height: 50px;
    padding: 6px 10px;
    border-bottom: 1px solid #000;
    box-sizing: border-box;

    input {
      width: 100%;
      height: 38px;
      box-sizing: border-box;
    }
  }
</style>
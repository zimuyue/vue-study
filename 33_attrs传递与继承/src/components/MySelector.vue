<template>
  <!-- 
    v-bind="$attrs"
    这样的绑定的方式具有平铺属性的作用
   -->
  <select v-bind="$attrs">
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </select>
</template>

<script>
export default {
  name: 'MySelector',
  inheritAttrs: false,
  // created () {
  //   console.log(this.$attrs);
  // }
  // props: {
  //   value: {
  //     type: String,
  //     default: '1'
  //   }
  // },
  // data () {
  //   return {
  //     selectorValue: this.value
  //   }
  // },
  // methods: {
  //   changeOption () {
  //     this.$emit('changeOption', this.selectorValue);
  //   }
  // }
}
</script>

<style>

</style>
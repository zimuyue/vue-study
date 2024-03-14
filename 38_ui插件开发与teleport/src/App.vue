<template>
  <div>
    <button @click="openModal">Open Modal</button>
  </div>
</template>

<script>

// Single File Component -> 不是实例
export default {
  name: 'App',
  mounted () {
    this.$modal.init({
      show: false,
      type: 'warn',
      title: 'This is WARN TITLE',
      content: 'This is WARN CONTENT'
    })
  },
  methods: {
    openModal () {
      // this.$modal.open({
      //   type: 'danger',
      //   title: 'This is DANGER TITLE',
      //   content: 'This is DANGER CONTENT'
      // })
      
      this.$modal.danger({
        title: 'This is DANGER TITLE',
        content: 'This is DANGER CONTENT'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 
</style>
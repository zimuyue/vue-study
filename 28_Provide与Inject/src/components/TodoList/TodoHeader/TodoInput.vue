<template>
  <input 
    type="text"
    v-model="content"
    :placeholder="placeholder.value"
  />
</template>

<script>
export default {
  name: 'TodoInput',
  inject: ['placeholder'],
  // inject: ['todoListIns'],
  data () {
    return {
      content: ''
    }
  },
  watch: {
    content () {
      if (this.content.length > 0) {
        this.$emit('changeContent', this.content);
      }
    }
  },
  methods: {
    reset () {
      this.content = '';
    }
  }
}
</script>

<style>

</style>
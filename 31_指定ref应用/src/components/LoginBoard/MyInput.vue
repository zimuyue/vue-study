<template>
  <input 
    :type="type"
    :placeholder="placeholder"
    v-model="value"
    class="my-input"
  />
</template>

<script>
export default {
  name: 'MyInput',
  props: ['type', 'placeholder', 'model', 'name'],
  data () {
    return {
      value: this.model,
      inputName: this.name
    }
  },
  watch: {
    value () {
      this.$emit('setValue', {
        name: this.name,
        value: this.value
      })
    }
  },
  methods: {
    resetInput () {
      this.value = '';
    }
  }
}
</script>

<style>
  .my-input {
    height: 38px;
    padding: 0 10px;
    outline: none;
    border: 1px solid #ddd;
  }
</style>
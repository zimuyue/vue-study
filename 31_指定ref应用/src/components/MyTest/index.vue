<template>
  <button @click="handleLog">点击</button>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleLog () {
      this.addCount();
    },
    addCount () {
      this.count ++;
      console.log(this.count);
    }
  }
}
</script>

<style>

</style>
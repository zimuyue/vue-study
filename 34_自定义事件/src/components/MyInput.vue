<template>
  <div>
    <h1>{{ myName }}</h1>
    <input type="text" :value="myName" @input="emitName" />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    myName: String,
    myNameModifiers: {
      default: () => ({})
    }
  },
  created () {
    console.log(123);
    console.log(this.myNameModifiers);
  },
  emits: ['update:myName'],
  methods: {
    emitName (e) {
      let inputValue = e.target.value;
      
      if (this.myNameModifiers.prefixer && !inputValue.match(/UP主：/)) {
        inputValue = 'UP主：' + inputValue;
      }

      this.$emit('update:myName', inputValue);
    }
  }
}
</script>

<style>

</style>
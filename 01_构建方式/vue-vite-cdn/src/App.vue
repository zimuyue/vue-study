<template lang="">
  <div>
    <h1>This is an example from building Vue App by CDN.</h1>
    <child></child>
  </div>
</template>
<script>
import Child from '@/components/Child';
export default {
  components: {
    Child
  },
  setup () {

  }
}
</script>
<style lang="">
  
</style>
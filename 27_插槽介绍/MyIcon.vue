<template>
  <span
    v-if="loadingIcon && isLoading"
    class="fa fa-spinner fa-spin"
  ></span>
</template>

<script>
export default {
  name: 'MyIcon',
  props: ['loadingIcon', 'isLoading']
}
</script>

<style>

</style>
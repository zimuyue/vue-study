<template>
  <button
    :method="method"
    :class="{ 'current': method === curMethod }"
    @click="changeMethod"
  >
  {{ innerText }}
  </button>
</template>

<script>
import { CHANGE_METHOD } from '../../actions/calculator.js';

export default {
  name: 'CalButton',
  props: {
    method: String,
    innerText: String,
    curMethod: String
  },
  methods: {
    changeMethod () {
      this.$emit('dispatch', CHANGE_METHOD, this.method);
    }
  }
}
</script>

<style>
  .current {
    background-color: orange;
    color: #fff;
  }
</style>

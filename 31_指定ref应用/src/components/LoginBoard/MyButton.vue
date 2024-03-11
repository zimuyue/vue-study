<template>
  <button :class="['btn', type]"><slot></slot></button>
</template>

<script>
export default {
  name: 'MyButton',
  props: ['type']
}
</script>

<style lang="scss">
  .btn {
    height: 38px;
    padding: 0 15px;
    border: none;
    outline: none;

    &.primary {
      background-color: blue;
      color: #fff;
    }

    &.success {
      background-color: green;
      color: #fff;
    }

    &.warning {
      background-color: orange;
      color: #333;
    }

    &.danger {
      background-color: red;
      color: #fff;
    }
  }
</style>
<template>
  <button :class="['my-button', `btn-${ type }`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'success',
          'warn',
          'danger'
        ].includes(value);
      }
    }
  }
}
</script>

<style lang="scss">
  .my-button {
    border: none;
    outline: none;

    &.btn-primary {
      background-color: blue;
      color: #fff;
    }

    &.success {
      background-color: green;
      color: #fff;
    }

    &.warn {
      background-color: orange;
      color: #333;
    }

    &.danger {
      background-color: red;
      color: #fff;
    }
  }
</style>
<template>
  <button>
    <my-icon
      :loading-icon="loadingIcon"
      :is-loading="isLoading"
    ></my-icon>
    <!-- slot之间的内容是默认值 -->
    <slot name="test"></slot>
    <slot name="test"></slot>
    <slot name="test1"></slot>
    <slot>Click</slot>
    <slot>Click</slot>
  </button>
</template>

<script>

import MyIcon from './MyIcon';

export default {
  name: 'MyButton',
  components: {
    MyIcon
  },
  props: ['loadingIcon', 'is-loading']
}
</script>
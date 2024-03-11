<template>
  <div>
    <slot name="slot1">
      <div style="color: red">SLOT1</div>
    </slot>
    <slot name="slot2">
      <div style="color: green">SLOT2</div>
    </slot>
    <slot name="slot3">
      <div style="color: blue">SLOT3</div>
    </slot>
    <slot name="slot4">
      <div style="color: orange">SLOT4</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MySlot'
}
</script>

<style>

</style>
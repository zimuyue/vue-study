<template>
  <div>
    <h1>Count: {{ store.count }}</h1>
    <h2>DoubleCount: {{ store.doubleCount }}</h2>
    <button @click="handleChangeBtnClick">CHANGE</button>
  </div>
</template>

<script setup>
import useStore from '../store/todolist2.js';

const store = useStore();

const handleChangeBtnClick = () => {
  // store.$patch({
  //   count: 500
  // })

  store.$patch(state => {
    state.count = 500;
  })
}

store.$subscribe((info, state) => {
  console.log(info, state);
})
</script>

<style lang="scss" scoped>

</style>
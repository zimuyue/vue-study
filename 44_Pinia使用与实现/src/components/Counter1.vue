<template>
  <div>
    <h1>Count: {{ store.count }}</h1>
    <h2>DoubleCount: {{ store.doubleCount }}</h2>
    <button @click="handleChangeBtnClick">CHANGE</button>
    <button @click="handleResetBtnClick">RESET</button>
    <button @click="handleDisposeBtnClick">DISPOSE</button>
    <button @click="handleSetStateBtnClick">SET STATE</button>
  </div>
</template>

<script setup>
import useStore from '../store/todolist1.js';

const store = useStore();

const handleChangeBtnClick = () => {
  store.$patch({
    count: 500
  })
}

const handleResetBtnClick = () => {
  store.$reset();
}

const handleDisposeBtnClick = () => {
  store.$dispose();
}

const handleSetStateBtnClick = () => {
  console.log(store.$state);
  store.$state = {
    count: 1200,
    todoList: [
      {
        id: 1,
        content: 'test',
        completed: true
      }
    ]
  }
}

store.$subscribe((info, state) => {
  console.log(info, state);
})
</script>

<style lang="scss" scoped>

</style>
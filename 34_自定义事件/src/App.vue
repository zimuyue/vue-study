<template>
  <div>
    <div :class="['light', { 'turnedOn': isTurnedOn }]"></div>
    <!-- 事件名：kebab-case -->
    <child @switch-my-light="switchMyLight"></child>
    <counter @click="getCount"></counter>
    <my-form @submit="getUserInfo"></my-form>
    <!-- <my-input :my-name="myName"></my-input> -->
    <my-input v-model:my-name.prefixer="myName"></my-input>
    <input type="text" v-model="myName" />
  </div>
</template>

<script>

import Child from './components/Child';
import Counter from './components/Counter.vue';
import MyForm from './components/MyForm';
import MyInput from './components/MyInput';

export default {
  name: 'App',
  components: {
    Child,
    Counter,
    MyForm,
    MyInput
  },
  data () {
    return {
      isTurnedOn: false,
      myName: 'mingming'
    }
  },
  methods: {
    switchMyLight () {
      this.isTurnedOn = !this.isTurnedOn;
    },
    getCount (count /**event */) {
      console.log(count);
    },
    getUserInfo ({ username, password }) {
      console.log(username, password);
    }

    // getUserInfo (username, password, a, b, c, d) {
    //   console.log(username, password, a, b, c, d);
    // }

    // getUserInfo (arg) {
    //   console.log(arg);
    // }
  }
}
</script>

<style lang="scss">
  .light {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    border-radius: 50%;

    &.turnedOn {
      border-color: #ddd;
      background-color: yellow;
      box-shadow: 0 0 15px yellow;
    }
  }
</style>
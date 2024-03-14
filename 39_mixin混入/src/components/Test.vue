<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ author }}</p>
    <p>{{ content }}</p>
    <button @click="doComponent">CLICK</button>
  </div>
</template>

<script>

import testMixin from '../mixins';

export default {
  name: 'Test1',
  mixins: [
    testMixin
  ],
  data () {
    return {
      title: 'This is TITLE 1',
      content: 'This is CONTENT 1'
    }
  },
  mounted () {
    console.log('This is TEST 1');
    console.log(this);
  },
  methods: {
    doComponent () {
      console.log('doComponent');
    }
  }
}
</script>

<style>

</style>../mixins
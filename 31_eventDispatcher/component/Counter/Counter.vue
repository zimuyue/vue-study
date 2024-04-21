<template>
  <CounterResult :result="result" />
  <div>
    <CounterButton innerText="+" action="PLUS" @dispatch="dispatch" />
    <CounterButton innerText="-" action="MINUS" @dispatch="dispatch" />
  </div>
</template>

<script>
import CounterResult from './Result.vue';
import CounterButton from './Button.vue';

import dispatch from '../../dispatchers/counter.js';

export default {
  name: 'Counter',
  components: {
    CounterResult,
    CounterButton
  },
  data () {
    return {
      result: 0
    }
  },
  methods: {
    // handleCompute (action) {
    //   switch (action) {
    //     case 'PLUS':
    //       this.result ++;
    //       break;
    //     case 'MINUS':
    //       this.result --;
    //       break;
    //     default:
    //       break;
    //   }
    // }

    // 使用派发器思想改造
    // 使得组件功能变的更单纯
    // 解决组件内 method 中逻辑臃肿问题
    dispatch (...args) {
      dispatch (this)(...args);
    }
  }
}
</script>
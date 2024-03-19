<template>
  <counter-result :result="result" />
  <div>
    <counter-button innerText="+" action="PLUS" @dispatch="dispatch" />
    <counter-button innerText="-" action="MINUS" @dispatch="dispatch" />
  </div>
</template>

<script>
import CounterResult from './Result';
import CounterButton from './Button';

import dispatch from '../../dispatchers/counter';

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
    // 解决组件内method中逻辑臃肿问题
    dispatch (...args) {
      dispatch (this)(...args);
    }
  }
}
</script>

<style></style>
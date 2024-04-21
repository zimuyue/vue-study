<template>
  <CalResult :result="result" />
  <div class="inputs">
    <CalInput 
      field="firstNumber"
      @dispatch="dispatch"
    />
    <CalInput
      field="secondNumber"
      @dispatch="dispatch"
    />
  </div>
  <div class="buttons">
    <CalButton 
      method="plus"
      innerText="+"
      :curMethod="curMethod"
      @dispatch="dispatch"
    />
    <CalButton 
      method="minus"
      innerText="-"
      :curMethod="curMethod"
      @dispatch="dispatch"
    />
    <CalButton
      method="mul"
      innerText="*"
      :curMethod="curMethod"
      @dispatch="dispatch"
    />
    <CalButton
      method="div"
      innerText="/"
      :curMethod="curMethod"
      @dispatch="dispatch"
    />
  </div>
</template>

<script>
import CalResult from './Result.vue';
import CalInput from './Input.vue';
import CalButton from './Button.vue';

import dispatch from '../../dispatchers/calculator.js';

export default {
  name: 'Calculator',
  components: {
    CalResult,
    CalInput,
    CalButton
  },
  data () {
    return {
      result: 0,
      curMethod: 'plus',
      firstNumber: 0,
      secondNumber: 0
    }
  },
  methods: {
    // compute (method, fNumber, sNumber) {
    //   switch (method) {
    //     case 'plus':
    //       return fNumber + sNumber;
    //     case 'minus':
    //       return fNumber - sNumber;
    //     case 'mul':
    //       return fNumber * sNumber;
    //     case 'div':
    //       return fNumber / sNumber;
    //     default:
    //       break;
    //   }
    // },
    // setNumber (field, value) {
    //   this[field] = value;
    //   this.setResult();
    // },
    // changeMethod (method) {
    //   this.curMethod = method;
    //   this.setResult();
    // },
    // setResult () {
    //   this.result = this.compute(
    //     this.curMethod,
    //     this.firstNumber,
    //     this.secondNumber
    //   )
    // }

    dispatch (...args) {
      dispatch(this)(...args);
    }
  }
}
</script>

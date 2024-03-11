<template>
  <div>
    <p>{{ myNum }}</p>
    <p>{{ obj.a }}</p>
    <p>{{ obj.b }}</p>
    <p>{{ a }}</p>
    <p>{{ b }}</p>
  </div>
</template>

<script>
import { Demo } from '../myFunction';

export default {
  name: 'MyTest',
  // props: ['num', 'arr', 'str', 'bool', 'obj', 'a', 'b'],
  // props可以接收原生JS构造函数、自定义构造函数
  props: {
    num: Number,
    arr: Array,
    str: String,
    bool: Boolean,
    obj: Object,
    a: Number,
    b: Number,
    setNum: Function,
    demo: Demo,
    p: Promise
  },
  computed: {
    myNum () {
      return this.num + 1; // 字符串拼接
    }
  },
  data () {
    return {
      c: this.demo.c,
      d: this.demo.d
    }
  },
  mounted () {
    console.log(this.arr);
    console.log(this.str);
    console.log(this.bool);
    console.log(this.obj);
  }
}
</script>

<style></style>
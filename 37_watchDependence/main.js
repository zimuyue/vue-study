import {
  watch,
  watchEffect,
  reactive,
  computed
} from './vue/index.js';

const state1 = reactive({
  a: 1,
  b: {
    c: 2
  }
});

const state2 = reactive({
  a: 1000,
  b: {
    c: 2000
  }
});

const res1 = computed(() => state1.a + state1.b.c);
const res2 = computed(() => state2.a + state2.b.c);

setTimeout(() => {
  state1.a = 100;
  console.log('setTimeout1:', res1.value);
}, 3000)

setTimeout(() => {
  state1.b.c = 200;
  console.log('setTimeout2:', res1.value);
}, 5000)

setTimeout(() => {
  state2.a = 10000;
  console.log('setTimeout3:', res2.value);
}, 8000)

setTimeout(() => {
  state2.b.c = 20000;
  console.log('setTimeout4:', res2.value);
}, 10000)

/*
  数据劫持
  cb => watchEffectCB

  Proxy -> get -> state.a -> getter函数 -> state.a被访问 -> 收集这个cb
           set -> state.a = xxx -> setter函数 -> state.a变化了 -> notify(target, key) -> [...cb] -> 全部执行

  watchEffect -> 先执行一次回调，state.a变化的时候，还要执行一次回调

  watch -> 将参数一添加dep，state.a变化的时候，执行参数二cb
*/

watchEffect(() => {
  console.log('watchEffect -> state1.a', state1.a);
})

watchEffect(() => {
  console.log('watchEffect -> state1.b.c', state1.b.c);
})

watchEffect(() => {
  console.log('watchEffect -> state2.a', state2.a);
})

watchEffect(() => {
  console.log('watchEffect -> state2.b.c', state2.b.c);
})

watch(() => state1.a, (cur) => {
  console.log('watch -> state1.a', state1.a);
})

watch(() => state1.b.c, (cur) => {
  console.log('watch -> state1.b.c', state1.b.c);
})

watch(() => state2.a, (cur) => {
  console.log('watch -> state2.a', state2.a);
})

watch(() => state2.b.c, (cur) => {
  console.log('watch -> state2.b.c', state2.b.c);
})

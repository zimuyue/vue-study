import {
  watch,
  watchEffect,
  reactive,
  computed
} from './modules/vue/index.js';

const oABtn1 = document.querySelector('#aBtn1');
const oCBtn1 = document.querySelector('#cBtn1');
const oABtn2 = document.querySelector('#aBtn2');
const oCBtn2 = document.querySelector('#cBtn2');

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

oABtn1.addEventListener('click', function () {
  state1.a = 100;
  console.log('computed:', res1.value);
}, false);

oCBtn1.addEventListener('click', function () {
  state1.b.c = 200;
  console.log('computed:', res1.value);
}, false);

oABtn2.addEventListener('click', function () {
  state2.a = 10000;
  console.log('computed:', res2.value);
}, false);

oCBtn2.addEventListener('click', function () {
  state2.b.c = 20000;
  console.log('computed:', res2.value);
}, false);

/**
 * 
 * 数据劫持
 * cb => watchEffectCB
 * 
 * Proxy -> get -> state.a -> getter函数 -> state.a被访问 -> 收集这个cb
 *          set -> state.a = xxx -> setter函数 -> state.a变化了 -> notify(target, key) -> [...cb] -> 全部执行
 * 
 * watchEffect -> 先执行一次回调，state.a变化的时候，还要执行一次回调
 * 
 * watch -> 将参数一添加dep，state.a变化的时候，执行参数二cb
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

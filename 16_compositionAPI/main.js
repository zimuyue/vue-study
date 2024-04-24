const {
  ref,
  reactive,
  createApp,
  nextTick,
  shallowReactive,
  isReactive,
  isRef,
  unref,
  toRaw
} = Vue;

const app = createApp({
  name: 'App',
  template: `
    <div>
      <h1 ref="titleRef">{{ status.title }}</h1>
      <button @click="setTitle">Click</button>
    </div>
  `,
  setup () {
    /*
      ref -> reference 引用
      针对所有值的定制化的引用包装，保证响应式同时，还可以向函数传递参数 ref
      可以对 DOM 元素上进行 ref 引用，通常用于原始类型的包装
    */
    const titleRef = ref(null);
    const count = ref(0);
    console.log(count, count.value, isRef(count)); // RefImpl -> reference implement

    const userInfo = ref({
      username: 'ming',
      password: '123123'
    })
    // toRaw 将 proxy 响应式对象转换为普通对象
    // unref 语法糖 -> isRef(val) ? val.value : val
    console.log(toRaw(unref(userInfo)));

    /*
      reactive 深层响应式 Proxy
      代理对象与源对象不是同一个引用
      只针对 Array Object Map Set 类型
      因为在 JS 中没有办法能够让原始类型具备引用的属性
    */
    const status = reactive({
      title: 'This is My Ttile'
    })
    // reactive 包装过的代理对象再次被包装，会返回第一次包装的代理对象
    console.log(status === reactive(status)); // true

    // shallowReactive 浅层响应式，只对第一层数据进行代理
    const shallowStatus = shallowReactive({
      title: 'shallow',
      person: {
        name: 'ming'
      }
    })
    console.log(shallowStatus);
    console.log(isReactive(shallowStatus.person));


    /*
      Vue 数据状态更新
      DOM 更新和状态的改变是非同步的把 DOM 更新的任务缓存到一个队列当中
      等待状态全部改变完成以后一次性更新 DOM
    */
    const setTitle = () => {
      status.title = '我的标题';
      console.log(titleRef.value.innerText); // 'This is My Ttile'
      
      // nextTick 在状态更改完成以后立即执行，等待 DOM 更新完毕后，执行回调函数
      const p = nextTick(() => {
        console.log(titleRef.value.innerText);
      });

      // nextTick 会返回一个 promise
      console.log(p);
    }

    return {
      status,
      setTitle,
      titleRef
    }
  }
})

app.mount('#app');

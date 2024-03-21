/**
 * Vue在2版本基础上增加了CompositionAPI
 * 也可以称为函数API，原本的OptionsAPI还可以继续使用
 * 
 * 组合式API的好处可以进行抽离，对于封装集成是非常友好的
 * 更好的将业务功能进行细粒化拆分
 */


// Vue2响应式方式
const data = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3, 4, 5]
}

// observer(data);

function observer (data) {
  for (let key in data) {
    defineReactive(data, key, data[key]);
  }
}

function defineReactive (data, key, value) {
  if (Array.isArray(value)) {
    // 设置数组原型
    // key.__proto__ = customArray.prototype
    return;
  }

  if (typeof value === 'object') {
    observer(value);
  }

  Object.defineProperty(data, key, {
    get () {
      return value;
    },
    set (newVal) {
      return value = newVal;
    }
  })
}

// Vue3响应式优点不用逐个属性定义get和set函数
// Proxy的实例是针对原对象的一个代理对象
function _reactive (data) {
  return new Proxy(data, {
    get (target, key) {
      console.log('proxy get', key);
      const value = Reflect.get(target, key);
      return (value !== null && typeof value === 'object') ? _reactive(value) : value;
    },
    set (target, key, value) {
      console.log('proxy set', key);
      return Reflect.set(target, key, value);
    }
  })
}

const $data = _reactive(data);
$data.b.c = 100;
console.log($data);


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
    /**
     * ref -> reference引用
     * 针对所有值的定制化的引用包装，保证响应式同时，还可以进行函数传递
     * 可以对DOM元素上进行ref引用，通常用于原始类型的包装
     */
    const titleRef = ref(null);
    const count = ref(0);
    console.log(count, count.value, isRef(count)); // RefImpl -> reference implement

    const userInfo = ref({
      username: 'ming',
      password: '123123'
    })
    // toRaw将proxy响应式对象转换为普通对象
    // unref语法糖 -> isRef(val) ? val.value : val
    console.log(toRaw(unref(userInfo)));

    /**
     * reactive深层响应式 -> JX Proxy API
     * reactive代理对象与源对象不是同一个引用
     * 
     * reactive只针对Array Object Map Set类型
     * 因为在JS中没有办法能够让原始类型具备引用的属性
     */
    const status = reactive({
      title: 'This is My Ttile'
    })
    // reactive包装过的代理对象再次被包装，会返回第一次包装的代理对象
    console.log(status === reactive(status)); // true

    // shallowReactive浅层响应式 -> 只对第一层数据进行代理
    const shallowStatus = shallowReactive({
      title: 'shallow',
      person: {
        name: 'ming'
      }
    })
    console.log(shallowStatus);
    console.log(isReactive(shallowStatus.person));


    /**
     * Vue数据状态更新
     * 在访问DOM节点时，它并不是同步操作，也不是异步
     * 只是执行的时机不同，它将多个数据操作整合到一起只更新视图一次
     * 
     * DOM更新和状态的改变是非同步，把DOM更新的任务缓存到一个队列当中
     * 等待状态全部改变完成以后一次性更新DOM
     * https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing
     */
    const setTitle = () => {
      status.title = '我的标题';
      // console.log(titleRef.value.innerText); // 'This is My Ttile'
      
      // nextTick在状态更改完成以后立即执行，等待DOM更新完毕后，执行回调函数
      const p = nextTick(() => {
        console.log(titleRef.value.innerText);
      });

      // nextTick会返回一个promise
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

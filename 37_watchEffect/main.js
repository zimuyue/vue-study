const {
  ref,
  watch,
  watchEffect,
  createApp
} = Vue;

import { 
  useState, 
  useReactive
} from './hooks.js';

const app = createApp({
  name: 'App',
  template: `
    <div>
      <div>
        <h1 ref="titleRef">{{ title }}</h1>
        <h2>{{ content }}</h2>
        <button @click="setTitle('这是标题')">SET TITLE</button>
        <button @click="setContent('这是内容')">SET CONTENT</button>
        <button @click="setTitle('这是标题'),setContent('这是内容')">SET TITLE AND CONTENT</button>
      </div>
      <div>
        <h1>{{ name }}</h1>
        <h2>{{ age }}</h2>
        <h3>{{ article.name }}</h3>
        <button @click="setName('明明'),setAge(27)">SET PERSON</button>
      </div>
    </div>
  `,
  setup () {
    const [ title, setTitle ] = useState('This is TITLE');
    const [ content, setContent ] = useState('This is CONTENT');
    const [ state, refState ] = useReactive({
      name: 'mingming',
      age: 18,
      article: {
        name: 'vlong'
      }
    })

    /*
      侦听响应式数据
      当值发生变更的时候触发回调函数
      并将变更后的值与变更前的值作为参数传入回调函数
    */
    watch(title, (cur, prev) => {
      console.log('title:', cur, prev);
    })

    /*
      getter 函数
      收集 getter 函数中的响应式数据
      当数据发生变更时，将 getter 函数返回的结果作为第二个回调函数的参数
    */ 
    watch(() => {
      return `我演讲的题目是『${ title.value }』，我要讲的是"${ content.value }"`
    }, (newValue) => {
      console.log(newValue);
    })

    /*
      侦听不同的数据源
      支持 ref、reactive、getter、array<ref>
      无法侦听原始值的，必须是响应式引用
    */
    watch(state.name, (cur, prev) => {
      console.log(cur, prev);
    })

    /*
      深层侦听
      如果侦听的是响应式引用值 watch 会隐式地创建一个深层侦听器
      如果使用 getter 函数时，仅当 state.article 被替换时触发
      想要触发侦听使用 deep 需要遍历被侦听对象中的所有嵌套的属性慎用，开销较大
    */
    watch(
      // state.article,
      () => state.article,
      (cur, prev) => {
        console.log('deep:', cur, prev);
      },
      { deep: true }
    )
    state.article.name = 'VLONG';

    /*
      操作节点内容
      侦听响应式数据发生变更时，默认情况下组件更新之前被调用
      获取到的 value 是组件更新之前的 DOM 内容
    */
    const titleRef = ref(null);
    watch(title, () => {
      console.log('titleRef:', titleRef.value.innerText);
    })

    /*
      pre
      组件挂载更新前执行副作用回调并缓存该函数采取异步执行
      当多个依赖发生变更时，只会调用一次副作用函数（默认配置）
      post
      组件挂载更新后执行副作用回调并缓存该函数采取异步执行
      当多个依赖发生变更时，只会调用一次副作用函数
      sync
      组件挂载更新后执行副作用回调不缓存该函数采取同步执行
      同时改变多个依赖时，多次调用副作用函数
    */
    watch(
      title, 
      () => {
        console.log('flush:post', titleRef.value.innerText);
      }, 
      { flush: 'post' }
    )

    /*
      immediate
      立即执行回调函数，避免懒执行
      下一次执行待数据发生变更时
    */
    watch(
      title, 
      (cur, prev) => {
        console.log('immediate:', cur, prev);
      }, 
      { immediate: true }
    )

    /*
      停止侦听
      同步执行语句时会自动绑定到宿主组件实例上
      当组件实例被卸载时会自动停止侦听
      但是如果在异步回调中必须手动停止
    */
    setTimeout(() => {
      let unwatch = watch(title, () => {
        console.log('unwatch');
      })
      unwatch();
    }, 500)

    /*
      watch 是属于惰性的，只有当数据变化时才去执行
      并且需要有一个明确的侦听数据源，可以拿到新值与旧值

      watchEffect 侦听器被创建或者数据发生改变时都会执行回调函数
      自动追踪依赖，默认第一次执行时会进行依赖收集，缺点拿不到旧值
    */
    watchEffect(() => {
      console.log('watchEffect:', title.value); // get title.value -> 收集依赖
    })

    // 清理副作用 onCleanup
    let t = null;
    let count = 0;
    function getData (title) {
      t = setTimeout(() => {
        console.log('网络请求成功' + title, count);
      }, 3000)
    }
    watchEffect(onCleanup => {
      getData(title.value);

      // 清除上一次执行的副作用程序
      // 依赖数据发生变更当进行网络请求时
      // 通过执行 onCleanup 避免多次请求发生
      // 帮助开发者完成了数据请求防抖的功能
      onCleanup(() => {
        // cancelRequest
        count ++;
        console.log('onCleanup');
        clearTimeout(t);
      })
    })

    return {
      title,
      setTitle,
      content,
      setContent,
      ...refState,
      titleRef
    }
  }
})

app.mount('#app');

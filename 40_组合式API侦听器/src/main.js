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

    /**
     * 侦听器
     * 侦听依赖 -> 响应式数据，值变更的时候
     * 能侦听到这个变化，从而提供给开发者一个API接口回调
     * 完成接下来的自定义任务
     * 
     * 侦听title.value值，当触发数据变更时，执行回调函数
     * 回调函数会记录变更前的值与变更后的值
     */
    watch(title, (cur, prev) => {
      // console.log('title:', cur, prev);
    })

    /**
     * watch -> getter函数
     * 根据第一个回调函数getter内部依赖的数据发生变化时
     * 将返回的值，作为第二个回调函数执行时的参数
     */ 
    watch(() => {
      return `我演讲的题目是『${ title.value }』，我要讲的是"${ content.value }"`
    }, (newValue) => {
      // console.log(newValue);
    })

    /**
     * watch的第一个参数
     * 只能是getter/effect函数或者是ref、reactive、array
     * 是无法侦听原始值的，必须是响应式引用
     */
    // watch(state.name, (cur, prev) => {
    //   console.log(cur, prev);
    // })
    watch(() => state.name, (cur, prev) => {
      // console.log('getter:', cur, prev);
    })

    /**
     * watch侦听深度
     * 如果侦听的是响应式引用值，watch会隐式地创建一个深层侦听器
     * 如果使用getter函数时，仅当state.article被替换时触发
     * 想要触发侦听使用deep
     */
    watch(
      state.article,
      // () => state.article,
      (cur, prev) => {
        // console.log('deep:', cur, prev);
      },
      // { deep: true }
    )
    state.article.name = 'VLONG';

    /**
     * watch侦听DOM节点
     * 默认情况下，组件更新之前被调用
     * 获取到的value是组件更新之前的DOM
     */
    const titleRef = ref(null);
    watch(title, () => {
      // console.log('titleRef:', titleRef.value.innerText);
    })

    /**
     * 拿到DOM更新之后的innerText 
     * flush: 'pre | post | sync'
     * 
     * pre: 默认配置，组件挂载、组件更新前执行副作用回调，缓存副作用回调，异步执行
     *      改变多个依赖，只会调用一次副作用函数
     * 
     * post: 组件挂载、组件更新后执行副作用回调，缓存副作用回调，异步执行
     *       改变多个依赖，只会调用一次副作用函数
     * 
     * sync: 组件挂载、组件更新前执行副作用回调，不缓存副作用回调, 同步执行
     *       同时改变多个依赖数据值，多次调用副作用函回调
     */
    watch(
      title, 
      () => {
        // console.log('flush:post', titleRef.value.innerText);
      }, 
      { flush: 'post' }
    )

    /**
     * watch立即执行
     * immediate
     */
    watch(
      title, 
      (cur, prev) => {
        // console.log('immediate:', cur, prev);
      }, 
      { immediate: true }
    )

    /**
     * watch侦听行为调试
     * onTrack onTrigger
     */
    watch(
      title, 
      () => {}, 
      { 
        // 侦听器侦听行为被创建的时候执行
        onTrack (e) {
          // console.log('onTrack:', e);
        },
        // 依赖被修改的时候执行
        onTrigger (e) {
          // console.log('onTrigger:', e);
        }
      }
    )

    /**
     * watch侦听停止
     * 函数执行后返回的stop函数
     */
    const stop = watch(title, () => {
      // console.log('stop');
    })
    stop();

    /**
     * watchEffect用来观察副作用的函数
     * 
     * watch是属于惰性的，只有当数据变化时才去执行
     * 并且需要有一个明确的侦听数据源，可以拿到新值与旧值
     * 
     * watchEffect侦听器被创建或者数据发生改变时都会执行回调函数
     * 自动追踪依赖，默认第一次执行时会进行依赖收集，拿不到旧值
     */
    watchEffect(() => {
      // console.log('watchEffect:', title.value); // get title.value -> 收集依赖
    })

    /**
     * watchEffect清理副作用
     * onCleanup
     */
    let t = null;
    let count = 0;
    function getData (title) {
      t = setTimeout(() => {
        console.log('网络请求成功' + title, count);
      }, 3000)
    }
    watchEffect(onCleanup => {
      getData(title.value);

      // 当title.value数据依赖发生变更时
      // 清除上一次调用的副作用函数
      // 可以解决多次副作用函数的执行，类似于防抖
      onCleanup(() => {
        count ++;
        console.log('onCleanup');
        clearTimeout(t);
      })
    })

    /**
     * React中useEffect是无法使用async和await的
     * 因为它的参数回调函数内返回的函数不是一个Promise函数
     * 所以它无法使用async和await，但是它解决的方案是
     * 可以在参数函数内部去定义请求函数
     */
    // useEffect(() => {
    //   async function getData (){
    //     await console.log('...')
    //   }
    //   return () => {}
    // }, [title])

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

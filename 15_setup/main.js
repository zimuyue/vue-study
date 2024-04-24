import globalProperties from './globalProperties.js';

const {
  createApp,
  ref,
  computed, 
  toRefs, 
  toRef, 
  h,
  inject,
  getCurrentInstance
} = Vue;

function useTitle (value = '') {
  const title = ref(value);
  const setTitle = (newValue) => {
    typeof newValue === 'function' ? newValue(title.value) : (title.value = newValue);
  }
  return [title, setTitle];
} 

const app = createApp({
  name: 'App',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button @click="setTitle">Click</button>
    </div>
  `,
  /*
    setup 是组合式 API 的入口函
    所有组合式 API 都可以放入到 setup 内部执行
    setup 在组件创建之前自动执行
    使用组合式 API 时，没有 onBeforeCreate 与 onCreated 生命周期函数
    setup 函数中无法访问 optionsAPI 中定义的数据和方法
  */
  setup (props, ctx/* context */) {
    const [title, setTitle] = useTitle();

    // ctx.attrs/slots/emit/expose(暴露属性给父组件)

    // Vue 推荐使用 getCurrentInstance 获取实例对象
    const instance = getCurrentInstance();
    console.log(instance);

    // ES6 解构会导致丢失掉响应式特性
    // 解构的方式只是将响应式对象中对应的属性值解构
    // const { title, content, author } = props;
    // console.log(title, content, author); 
    // const myContent = computed(() => 'Content:' + content);
    // const myContent = computed(() => 'Content:' + props.content);
    
    // toRefs 将 props 内部的所有属性转换成响应式 ref 数据
    // const { title, content, author } = toRefs(props);
    
    // toRef 指定 props 内部哪一个属性转换成响应式 ref 数据
    // const _content = toRef(props, 'content');
    // console.log(_content);
    // const myContent = computed(() => 'Content:' + _content.value);

    /*
      expose 是向外暴露一些内容供视图使用
      但是可以通过 return 直接对外暴露为什么还要使用 expose
      因为 return 不仅能返回数据方法还可以返回 h 函数或者 jsx 模板
      所以可以通过 expose 方法去额外暴露一些内容
    */
    // ctx.expose({
    //   num: 100,
    //   test () {
    //     console.log(123);
    //   }
    // })

    // return () => 
    //   h('div', null, [
    //     h('h1', null, ctx.slots.default()),
    //     h('p', null, ctx.slots.content())
    //   ])

    return {
      title,
      setTitle
    }
  }
})

app.use(globalProperties).mount('#app');

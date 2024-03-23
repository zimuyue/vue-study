import { 
  useState,
  useReducer,
  useReactive
} from './hooks/index.js';

const { createApp } = Vue;

const app = createApp({
  name: 'App',
  template: `
    <div>
      <div>
        <h1>{{ count1 }}</h1>
        <button @click="setCount1(count => count.value + 2)">+</button>
        <button @click="setCount1(count1 - 1)">-</button>
      </div>
      <div>
        <h1>{{ count2 }}</h1>
        <button @click="setCount2(count => count.value + 2)">+</button>
        <button @click="setCount2(count2 - 1)">-</button>
      </div>
      <div>
        <h1>{{ count3 }}</h1>
        <button @click="count3Dispatch({ type: 'PLUS', payload: 2 })">+</button>
        <button @click="count3Dispatch({ type: 'MINUS', payload: 1 })">-</button>
      </div>
      <div>
        <h1>{{ name }}</h1>
        <h2>{{ age }}</h2>
        <button @click="setInfo('age', (age) => 18)">SET AGE</button>
        <button @click="setInfo({
          name: 'mingming',
          age: 20
        })">SET</button>
      </div>
    </div>
  `,
  setup () {
    // const count = ref(0);

    // const plus = () => {
    //   count.value ++;
    // }

    // const minus = () => {
    //   count.value --;
    // }

    /**
     * 当我们将功能全部写入setup入口函数中
     * 会导致setup过于臃肿，并且数据与功能的定义分散
     * 操作数据的行为不具备语义化
     * 
     * 使用React Hooks思想
     * 集成定义数据，数据与操作数据的方法一起被定义
     */
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(100);
    const [ count3, count3Dispatch ] = useReducer((count, setCount, { type, payload }) => {
      switch (type) {
        case 'PLUS':
          setCount(count.value += payload);
          break;
        case 'MINUS':
          setCount(count.value -= payload);
          break;
        default:
          break;
      }
    }, 100);

    const [ info, infoRefs, setInfo ] = useReactive({
      name: '小红',
      age: 1
    })

    return {
      count1,
      setCount1,
      count2,
      setCount2,
      count3,
      count3Dispatch,
      ...infoRefs,
      setInfo
    }
  }
})

app.mount('#app');

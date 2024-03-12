<template>
  <div>
    <my-selector 
      :value="selectorValue"
      model="123"
      id="mySelector"
      class="my-selector"
      @change="changeOption"
    ></my-selector>
    <login-box autofocus></login-box>

    <my-list-container :list-title="listTitle">
      <my-list :my-list="myList" data-show="123123" @click="bookSubscribe"></my-list>
    </my-list-container>
  </div>

</template>

<script>
/**
 * 如何利用在组件上传递attribute，让子组件能够获取并使用他们
 * 非props的attributes传递
 * 
 * 单个的根元素
 *  使用组件时传递的所有属性，都会增加到根元素上
 *  attributes继承
 * 
 * 如果不希望子组件中根元素继承传递的属性，可以禁用继承
 * inheritAttrs=false
 * 
 * fallthrough  穿透
 */
var a = 2;

switch (a) {
  case 1:
    console.log(123);
    break;
  case 2:
    console.log(234);
  case 3:
    console.log(345);
    break;
  default:
    break;
}

import MySelector from './components/MySelector';
import LoginBox from './components/LoginBox';

import MyListContainer from './components/MyListContainer';
import MyList from './components/MyList';

export default {
  name: 'App',
  components: {
    MySelector,
    LoginBox,
    MyListContainer,
    MyList
  },
  data () {
    return {
      selectorValue: '3',
      listTitle: '小说订阅列表',
      myList: [
        {
          id: 1,
          title: '悲惨世界',
          isSubscribable: true,
          subscribed: false
        },
        {
          id: 2,
          title: '傲慢与偏见',
          isSubscribable: false,
          subscribed: false
        },
        {
          id: 3,
          title: '呼啸山庄',
          isSubscribable: true,
          subscribed: false
        },
      ]
    }
  },
  methods: {
    changeOption (e) {
      const value = e.target.value;

      console.log(value);
    },
    bookSubscribe (e) {
      const id = e.target.dataset.id;

      this.myList = this.myList.map(item => {
        if (item.id == id) {
          item.subscribed = !item.subscribed;
        }

        return item;
      })
    }
  }
}
</script>

<style>

</style>
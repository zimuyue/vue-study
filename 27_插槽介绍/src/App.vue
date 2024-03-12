<template>
  <div>
    <!-- <my-button
      @click="changeStatus"
      :disabled="isLoading"
      :loading-icon="true"
      :is-loading="isLoading"
    > -->
    
      <!-- Hello
      <my-icon></my-icon>
      <span>Click</span> -->

      <!-- v-slot只能用template上 -->
      <!-- <template v-slot:myBtn> -->
        
      <!--
        指令缩写方式
        v-bind:xxx -> :xxx
        v-on:xxx   -> @xxx
        v-slot:xxx -> #xxx
      -->

      <!-- 
        对于函数：匿名函数 具名函数

        var test = function () {}
        将一个匿名函数赋值给变量test

        var test = function test1 () {}
        将一个具名函数test1赋值给变量test
      -->

      <!-- <template #myBtn> -->
      <!-- <template v-slot:default> -->
      <!-- <template #test>
        <h1>TITLE</h1>
      </template>
      <template #test1>
        <h1>TITLE1</h1>
      </template>
      <template #default>
        {{ isLoading ? 'Loading...' : 'Click' }}
      </template>
    </my-button> -->
    
    <!-- 具名插槽 -->
    <!-- <base-layout> -->
      <!-- <template #baseHeader>
        <main-logo></main-logo>
      </template>
      <template #baseFooter>
        <footer-content></footer-content>
      </template>
      <template #baseSideBar>
        <base-list></base-list>
      </template>
      <template #default>
        <main-board></main-board>
      </template> -->
    <!-- </base-layout> -->
    
    <!-- 作用域插槽 -->
    <!-- <pic-board>
      <template v-slot:default="props">
        <img :src="props.item.url" :alt="props.item.desc" style="width: 200px" />
        <p>{{ props.item.desc }}</p>
      </template>
      <template v-slot:default="props">
        <img :src="props.url" :alt="props.desc" style="width: 200px" />
        <p>{{ props.desc }}</p>
      </template>
      <template v-slot="props">
        <img :src="props.url" :alt="props.desc" style="width: 200px" />
        <p>{{ props.desc }}</p>
      </template>
      <template #default="props">
        <img :src="props.url" :alt="props.desc" style="width: 200px" />
        <p>{{ props.desc }}</p>
      </template>
    </pic-board> -->

    <!-- <pic-board v-slot="props">
      <img :src="props.url" :alt="props.desc" style="width: 200px" />
      <p>{{ props.desc }}</p>
    </pic-board> -->
    <!-- <pic-board #default="props">
      <img :src="props.url" :alt="props.desc" style="width: 200px" />
      <p>{{ props.desc }}</p>
    </pic-board> -->
    <!-- <pic-board #default="{ url, desc }">
      <img :src="url" :alt="desc" style="width: 200px" />
      <p>{{ desc }}</p>
    </pic-board> -->
    <!-- <pic-board #default="{ url: imgUrl, desc: description, field = 0 }">
      <img :src="imgUrl" :alt="description" style="width: 200px" />
      <p>【{{ formatField(field) }}】{{ description }}</p>
    </pic-board> -->

    <my-slot>
      <template v-slot:[slotName]>
        <h1>This is {{ slotName }}</h1>
      </template>
    </my-slot>
  </div>
</template>

<script>
/**
 * 插槽  slot   内容占位标签
 * 
 * MyButton组件编写形式
 * 
 * <my-button />
 * <MyButton />
 * <my-button
 *   text="Submit"
 * ></my-button>
 * <MyButton></MyButton> 
 * 
 * slot -> 普通文本、HTML、组件
 * 
 * 具名slot插槽
 * 
 * function test (obj) {
 *   return obj.a + obj.b;
 * }
 * 
 * function test ({ a, b }) {
 *   return a + b;
 * }
 */

// import MyButton from './MyButton';
// import MyIcon from './MyIcon';

import BaseLayout from './components/BaseLayout';
import MainLogo from './components/MainLogo';
import FooterContent from './components/FooterContent';
import BaseList from './components/BaseList';
import MainBoard from './components/MainBoard';
import PicBoard from './components/PicBoard';
import MySlot from './components/MySlot';

export default {
  name: 'App',
  components: {
    PicBoard,
    MySlot
  },
  data () {
    return {
      slotName: 'slot2'
    }
  },
  methods: {
    formatField (field) {
      switch (field) {
        case 0:
          return 'New';
        case 1:
          return 'Hot';
        case 2:
          return 'Recom';
        default:
          return 'New';
      }
    }
  },
  // components: {
  //   BaseLayout,
  //   MainLogo,
  //   FooterContent,
  //   BaseList,
  //   MainBoard
  // },
  // components: {
  //   MyButton,
  //   MyIcon
  // },
  // data () {
  //   return {
  //     isLoading: false
  //   }
  // },
  // methods: {
  //   changeStatus () {
  //     this.isLoading = true;

  //     setTimeout(() => {
  //       this.isLoading = false;
  //     }, 3000);
  //   }
  // },
}
</script>

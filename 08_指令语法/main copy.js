/**
 * v-if    删除节点 v-else-if  v-else  <!-- v-if -->
 * v-show  隐藏节点
 * v-bind:参数 -> 插入表达式  v-bind:href="xxx" => href="http://www.baidu.com"
 * v-on:事件名 -> 绑定事件处理函数
 *        v-on:click="test(1)" => v-on:click="() => test(1)"
 * 
 * v- 为了提示你这是一个Vue内置的Attribute, 可以使用缩写
 * 
 * v-bind: -> :
 * v-on: -> @
 */

var str = 'I am a global man!!!!';

var App = {
  data () {
    return {
      linkIndex: 0,
      aAttr: 'href',
      eventName: 'click',
      attr: 'data-tag',
      myAttr: 'data-attr',
      tag: 'h1',
      title: 'This is my TITLE',
      urls: [
        'https://www.taobao.com',
        'https://www.tmall.com',
        'https://www.jd.com'
      ]
    }
  },
  // template: `
  //   <div>
  //     <div>
  //       <p v-if="linkIndex === 0">
  //         <a v-bind:href="urls[0]" target="_blank">淘宝商城</a>
  //       </p>
  //       <p v-else-if="linkIndex === 1">
  //         <a v-bind:href="urls[1]" target="_blank">天猫商城</a>
  //       </p>
  //       <p v-else>
  //         <a v-bind:href="urls[2]" target="_blank">京东商城</a>
  //       </p>
  //     </div>
  //     <div>
  //       <button v-on:click="changeIndex(0)">淘宝</button>
  //       <button v-on:click="changeIndex(1)">天猫</button>
  //       <button v-on:click="changeIndex(2)">京东</button>
  //     </div>
  //   </div>
  // `,
  // template: `
  //   <div>
  //     <div>
  //       <p v-show="linkIndex === 0">
  //         <a v-bind:href="urls[0]" target="_blank">淘宝商城</a>
  //       </p>
  //       <p v-show="linkIndex === 1">
  //         <a v-bind:href="urls[1]" target="_blank">天猫商城</a>
  //       </p>
  //       <p v-show="linkIndex === 2">
  //         <a v-bind:href="urls[2]" target="_blank">京东商城</a>
  //       </p>
  //     </div>
  //     <div>
  //       <button v-on:click="changeIndex(0)">淘宝</button>
  //       <button v-on:click="changeIndex(1)">天猫</button>
  //       <button v-on:click="changeIndex(2)">京东</button>
  //     </div>
  //   </div>
  // `,
  template: `
    <div>
      <div>
        <!-- 动态的属性名参数不能出现空格和引号，HTML的合法属性名不能出现空格引号 -->
        <!-- <h1 v-bind:['data-' + attr]="tag">{{ title }}</h1> -->
        <h1 v-bind:[attr]="tag">{{ title }}</h1>
        <!-- null作为属性是无效的，你可以利用null解除属性绑定 -->
        <h1 v-bind:[null]="title">{{ title }}</h1>
        <h1 v-bind:[myAttr]="title">{{ title }}</h1>
        <!-- 不能访问全局变量 - 受限列表 -->
        <h1>{{ str }}</h1>
        <p v-show="linkIndex === 0">
          <a :[aAttr]="urls[0]" target="_blank">淘宝商城</a>
        </p>
        <p v-show="linkIndex === 1">
          <a :[aAttr]="urls[1]" target="_blank">天猫商城</a>
        </p>
        <p v-show="linkIndex === 2">
          <a :[aAttr]="urls[2]" target="_blank">京东商城</a>
        </p>
      </div>
      <div>
        <button @[eventName]="changeIndex(0)">淘宝</button>
        <button @[eventName]="changeIndex(1)">天猫</button>
        <button @[eventName]="changeIndex(2)">京东</button>
        <button @click="removeMyAttr">Remove my Attr</button>
      </div>
    </div>
  `,
  methods: {
    changeIndex (index) {
      this.linkIndex = index;
    },
    removeMyAttr () {
      this.myAttr = null;
    }
  }
}

Vue.createApp(App).mount('#app');




/*
  directive 指令
  所有在 Vue 中，模版上属性的 v-* 都是指令

  为什么叫指令？
  指示模板应该按照怎样的逻辑进行渲染和绑定行为

  Vue 提供了大量的内置指令 
  v-if v-for v-show v-model v-on v-bind v-html v-once v-slot

  开发者也可以给 Vue 扩展指令 -> 自定义指令  v-取名

  属性区分
  attribute: HTML 的扩展 title src href -> attr
  property: 在对象内部存储的数据，通常用来描述数据结构 -> prop
  在标签中插入值使用 {{}} 而在标签属性中插入值使用 v-bind:xx=""
*/
import myIf from './myIf.js';
import myShow from './myShow.js';

const TITLE = 'This is my Title';

const App = {
  data () {
    return {
      title: 'ads via carbon',
      author: 'ming',
      htmlText: '<h1>This is my Title</h1>',
      flag: true
    }
  },
  directives: {
    myIf
  },
  template: `
    <div>
      <!-- 
        v-once
        一次插值，永不更新，不建议使用
        影响标签内部所有变量，包括嵌套标签
        如果只是想让它渲染一次，完全可以使用 ES6 的方式解决这个问题
      -->
      <div>
        <!-- <h1 v-once>{{ title }} - <span>{{ author }}</span></h1> -->
        <h1>${ TITLE } - <span>{{ author }}</span></h1>
      </div>

      <!--
        v-html
        出于安全原因，插值语法不会解析 HTML
        因为插值是 JS 表达式，没有对 DOM 的操作
        不要把用户提供的内容为 v-html 的插值，这种插值容易导致 XSS 攻击
      -->
      <div v-html="htmlText"></div>
      <!-- {{ '<h1>' + title + '</h1>' }} -->

      <!--
        null 插值在 HTML 将不进行展示
        undefined 插值只会展示属性名称
      -->
      <div>
        <h1>{{ title }}</h1>
        <span :id="null" :class="undefined"></span>
      </div>

      <!-- 自定义指令 -->
      <div>
        <button @click="flag = !flag">Show/Hide</button>
        <button @click="flag = !flag">Add/Remove</button>
        <div style="width:100px;height:100px;background-color:orange;" v-my-show="flag"></div>
        <div style="width:100px;height:100px;background-color:green;" v-my-if="flag"></div>
      </div>
    </div>
  `
}

Vue.createApp(App).directive('myShow', myShow).mount('#app');

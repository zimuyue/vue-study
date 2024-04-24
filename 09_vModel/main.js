/*
  数据双向绑定 -> v-model="数据来源" -> MVVM语法糖
  适用元素：input textarea select checkbox radio
  使用 v-model 会忽略 value checked selected 属性
*/

const App = {
  template: `
    <p>
      <p>{{ inputText }}</p>
      v-model: <input type="text" v-model="inputText" />
      input+value: <input type="text" @input="setInputText" v-bind:value="inputText" />
    </p>

    <hr />

    <p>
      <!--
        未能匹配到对应的 value, 空项
        IOS 中无法触发 change 事件的，用户就没有办法选择第一项
      -->
      <p>{{ selectedValue }}</p>
      <select v-model="selectedValue">
        <option value="" disabled>请选择</option>
        <option value="Russia">俄罗斯</option>
        <option value="China">中国</option>
        <option value="America">美国</option>
      </select>

      <select @change="selectValue" :value="selectedValue">
        <option value="" disabled>请选择</option>
        <option value="Russia">俄罗斯</option>
        <option value="China">中国</option>
        <option value="America">美国</option>
      </select>
    </p>

    <hr />

    <p>
      <p>{{ cbChecked }}</p>
      <input type="checkbox" v-model="cbChecked" />
      <input type="checkbox" :checked="cbChecked" @change="setCheckbox" />
    </p>

    <p>
      <p>{{ selectedCountries }}</p>
      俄罗斯：<input type="checkbox" value="Russia" v-model="selectedCountries" />
      中国：<input type="checkbox" value="China" v-model="selectedCountries" />
      美国：<input type="checkbox" value="America" v-model="selectedCountries" />
    </p>

    <hr />

    <p>
      <p>{{ gender }}</p>
      男：<input type="radio" value="male" v-model="gender" />
      女：<input type="radio" value="female" v-model="gender" />
    </p>

    <hr />
    
    <p>
      <p>{{ selectedValue }}</p>
      <select v-model="selectedValue">
        <option value="" disabled>请选择！！！</option>
        <option 
          v-for="country of countries" 
          :key="country.id"
          :value="country.value"
        >{{ country.info.name }}</option>
      </select>
    </p>

    <hr />
    <p>
      <p>{{ married }}</p>
      婚否：
      <input
        type="checkbox"
        v-model="married"
        true-value="married"
        false-value="unmarried"
      />
    </p>

    <hr />
    <p>
      <p>{{ isAgree }}</p>
      <input
        type="radio"
        v-model="isAgree"
        :value="isAgreeValue"
      />
    </p>

    <hr />

    <p>
      <p>{{ selectedValue2 }}</p>
      <select v-model="selectedValue2">
        <option value="" disabled>请选择</option>
        <option :value="{ name: '俄罗斯', continent: 'Euro' }">俄罗斯</option>
        <option :value="{ name: '中国', continent: 'Asia' }">中国</option>
        <option :value="{ name: '美国', continent: 'North America' }">美国</option>
      </select>
    </p>

    <hr />
    <p>
      <p>{{ inputText }}</p>
      <!-- .lazy 修饰符 -->
      <!-- input + value: 每次输入完成时，数据发生改变 -->
      <input type="text" v-model="inputText" />
      <!-- change + value: 失去焦点时，数据改变 -->
      <input type="text" v-model.lazy="inputText" />
    </p>

    <hr />
    <p>
      <p>{{ typeof myNumber1 }}</p>
      <p>{{ typeof myNumber2 }}</p>
      <input type="number" v-model="myNumber1" />
      <!-- 值如果无法被 parseFloat 解析，就返回原始的值 -->
      <input type="number" v-model.number="myNumber2" />
    </p>

    <hr />
    <p>
      <p>{{ myText1 }}</p>
      <p>{{ myText2.length }}</p>
      <!-- v-model 不会在组成中文时更新 -->
      <input type="text" v-model="myText1" />
      <input type="text" @input="setMyText1" :value="myText1" />
      <input type="text" v-model.trim="myText2" />
    </p>
  `,
  data () {
    return {
      inputText: 'inputText',
      selectedValue: 'China',
      cbChecked: false,
      selectedCountries: [],
      gender: 'female',
      countries: [
        { id: 1, info: { name: '俄罗斯', continent: 'Euro' }, value: 'Russia' },
        { id: 2, info: { name: '中国', continent: 'Asia' }, value: 'China' },
        { id: 3, info: { name: '美国', continent: 'North America' }, value: 'America' },
      ],
      married: 'unmarried',
      isAgree: false,
      isAgreeValue: '同意',
      selectedValue2: '',
      myNumber1: 1,
      myNumber2: 2,
      myText1: '',
      myText2: ''
    }
  },
  methods: {
    setInputText (e) {
      this.inputText = e.target.value;
    },
    selectValue (e) {
      this.selectedValue = e.target.value;
    },
    setCheckbox (e) {
      this.cbChecked = e.target.checked;
    },
    setMyText1 (e) {
      this.myText1 = e.target.value;
    }
  }
}

Vue.createApp(App).mount('#app');
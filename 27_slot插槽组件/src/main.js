// 插槽slot -> 内容占位标签

const app = Vue.createApp({
  name: 'App',
  data () {
    return {
      isLoading: false,
      slotName: 'slot1'
    }
  },
  // 具名插槽 #xxx 指定名称
  // 默认插槽 default
  // 作用域插槽 v-slot:xxx="props" #default="props"
  // 动态插槽 v-slot:[slotName] #[slotName]
  // 后备内容 -> 使用组件时不使用插槽则显示组件中<slot>标签里内容
  template: `
    <div>
      <my-button
        @click="changeStatus"
        :disabled="isLoading"
        :loading-icon="true"
        :is-loading="isLoading"
      >
        <!-- <template v-slot:default></template> -->
        <!-- <template #default></template> -->

        <template #content>Me!</template>
      </my-button>

      <my-slot>
        <template v-slot:[slotName]>
          <h1>This is {{ slotName }}</h1>
        </template>
      </my-slot>

      <pic-board #default="props">
        <h2>{{ props.title }}</h2>
        <p>{{ props.desc }}</p>
      </pic-board>
    </div>
  `,
  methods: {
    changeStatus () {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
  }
})

app.component('my-button', {
  name: 'MyButton',
  props: ['loadingIcon', 'is-loading'],
  template: `
    <button>
      <my-icon
        :loading-icon="loadingIcon"
        :is-loading="isLoading"
      ></my-icon>

      <!-- slot之间的内容是默认值 -->
      <slot name="content"></slot>

      <!-- 后备内容 -->
      <slot>Click</slot>
    </button>
  `
})

app.component('my-icon', {
  name: 'MyIcon',
  props: ['loadingIcon', 'isLoading'],
  template: `
    <span
      v-if="loadingIcon && isLoading"
      class="fa fa-spinner fa-spin"
    ></span>
  `
})

app.component('my-slot', {
  name: 'MySlot',
  template: `
    <div>
      <slot name="slot1">
        <div style="color: red">SLOT1</div>
      </slot>
      <slot name="slot2">
        <div style="color: green">SLOT2</div>
      </slot>
    </div>
  `
})

app.component('pic-board', {
  name: 'PicBoard',
  data () {
    return {
      picInfo: {
        id: 1,
        title: '加州机器人',
        desc: '众多人工智能专家都执着于仿真机器人的研究',
        filed: 0x100
      }
    }
  },
  template: `
    <div>
      <slot :id="picInfo.id" :title="picInfo.title" :desc="picInfo.desc"></slot>
    </div>
  `
})

app.mount('#app');

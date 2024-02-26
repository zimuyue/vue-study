const { createApp, ref } = Vue;

const App = {
  // data () {
  //   return {
  //     text: 'Hello Vue!!!!'
  //   }
  // },
  template: `
    <div>
      <h1>{{ text }}</h1>
      <button @click="change">Change</button>
    </div>
  `,
  // methods: {
  //   change () {
  //     this.text = 'Hello Vite!!!!';
  //   }
  // }

  setup () {
    const text = ref('Hello Vue!!!!');

    const change = () => {
      text.value = 'Hello Vite!!!!';
    }

    return {
      text,
      change
    }
  }
}

createApp(App).mount('#app');

// new Vue({
//   render: h => h(App)
// }).$mount('#app');
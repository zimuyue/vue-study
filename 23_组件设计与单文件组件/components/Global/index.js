function globalComponents (app) {
  app.component('my-search', {
    data () {
      return {
        placeholder: 'Please type the keyword...',
        keyword: ''
      }
    },
    template: `
      <div style="float: left">
        <input type="text" :placeholder="placeholder" v-model="keyword" />
        <button @click="searchAction">Search</button>
      </div>
    `,
    methods: {
      searchAction () {
        console.log(this.keyword);
      }
    }
  });
}

export default globalComponents;
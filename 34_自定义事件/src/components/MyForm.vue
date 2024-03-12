<template>
  <form @submit="submitMyForm">
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'MyForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  emits: {
    submit: ({ username, password }) => {
      if (username && password) {
        console.log('Emit successfully!!!');
        return true;
      } else {
        console.log('Failed to emit!!!!');
        return false;
      }
    }
  },
  methods: {
    submitMyForm (e) {
      e.preventDefault();
      this.$emit('submit', {
        username: this.username,
        password: this.password
      });

      // this.$emit('submit', this.username, this.password, 123, 234, 345, 456);
    }
  }
}
</script>

<style>

</style>
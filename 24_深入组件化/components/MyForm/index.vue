<template>
  <div class="my-form">
    <div class="input-box">
      <input 
        type="text"
        v-model="username"
        placeholder="Username"
      />
    </div>
    <div class="input-box">
      <input 
        type="password"
        v-model="password"
        placeholder="Password"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-form',
  props: [
    'myUsername',
    'myPassword'
  ],
  computed: {
    username: {
      get () {
        return this.myUsername;
      },
      set (newValue) {
        this.$emit('update:myUsername', newValue);
      }
    },
    password: {
      get () {
        return this.myPassword;
      },
      set (newValue) {
        this.$emit('update:myPassword', newValue);
      }
    }
  }
}
</script>

<style lang="scss">
  .my-form {
    .input-box {
      height: 34px;
      margin-top: 20px;

      input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        padding: 0 15px;
        border-radius: 3px;
      }
    }
  }
</style>
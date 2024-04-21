<template>
  <TdForm @dispatch="dispatch" />
  <TdList :todoData="todoData" @dispatch="dispatch" />
</template>

<script>
import TdForm from './Form.vue';
import TdList from './List.vue';

import dispatch from '../../dispatchers/todoList.js'

export default {
  name: 'TodoList',
  components: {
    TdForm,
    TdList
  },
  data () {
    return {
      todoData: []
    }
  },
  methods: {
    dispatch (...args) {
      dispatch(this)(...args)
    }
  }
}
</script>
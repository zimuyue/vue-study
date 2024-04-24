<template>
  <div>
    <TodoInfo />
    <TodoClear @remove-all="removeAll" />
  </div>
</template>

<script>
import TodoInfo from './TodoInfo';
import TodoClear from './TodoClear';

export default {
  name: 'TodoFooter',
  components: {
    TodoInfo,
    TodoClear
  },
  methods: {
    removeAll () {
      this.$emit('removeAll');
    }
  }
}
</script>
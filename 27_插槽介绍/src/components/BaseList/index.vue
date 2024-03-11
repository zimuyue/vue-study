<template>
  <ul class="base-list">
    <li class="list-item active">
      <a href="#">Baidu</a>
    </li>
    <li class="list-item">
      <a href="#">Google</a>
    </li>
    <li class="list-item">
      <a href="#">Bing</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseList'
}
</script>

<style lang="scss">
  a {
    text-decoration: none;
    color: #333;
  }

  .base-list {
    list-style: none;
    margin: 0;
    padding: 0;

    .list-item {
      height: 50px;
      line-height: 50px;
      padding: 0 30px;
      box-sizing: border-box;

      &.active {
        background-color: #ddd;

        a {
          font-weight: bold;
        }
      }
    }
  }
</style>
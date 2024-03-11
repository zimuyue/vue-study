<template>
  <div class="container">
    <header class="base-header">
      <slot name="baseHeader">HEADER</slot>
    </header>
    <footer class="base-footer">
      <slot name="baseFooter">FOOTER</slot>
    </footer>
    <aside class="base-sidebar">
      <slot name="baseSideBar">SIDEBAR</slot>
    </aside>
    <main class="base-main">
      <slot>MAIN</slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .base-header,
  .base-footer,
  .base-sidebar,
  .base-main {
    position: fixed;
    left: 0;
  }

  .base-header {
    top: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
    background-color: #000;
  }

  .base-footer {
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
    background-color: #ddd;
  }

  .base-sidebar {
    top: 0;
    z-index: 1;
    width: 200px;
    height: 100%;
    padding: 90px 0;
    background-color: #eee;
    box-sizing: border-box;
  }

  .base-main {
    top: 0;
    width: 100%;
    height: 100%;
    padding: 90px 30px 90px 230px;
    box-sizing: border-box;
  }
</style>
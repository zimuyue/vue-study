<template>
  <header>
    <my-logo />
    <my-search />
    <my-nav :nav-data="navData" />
    <my-user />
  </header>
</template>

<script>
import MyLogo from './MyLogo';
import MyNav from './MyNav';
import MyUser from './MyUser';

export default {
  name: 'my-header',
  components: {
    MyLogo,
    MyNav,
    MyUser
  },
  props: ['navData'],
}
</script>
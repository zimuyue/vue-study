<template>
  <header>
    <MyLogo />
    <MySearch />
    <MyNav :nav-data="navData" />
    <MyUser />
  </header>
</template>

<script>
import MyLogo from './MyLogo';
import MyNav from './MyNav';
import MyUser from './MyUser';

export default {
  name: 'MyHeader',
  components: {
    MyLogo,
    MyNav,
    MyUser
  },
  props: ['navData'],
}
</script>
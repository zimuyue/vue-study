import MyLogo from './MyLogo';
import MyNav from './MyNav';
import MyUser from './MyUser';

const MyHeader = {
  components: {
    MyLogo,
    MyNav,
    MyUser
  },
  props: ['navData'],
  template: `
    <header>
      <my-logo />
      <my-nav :nav-data="navData" />
      <my-user />
    </header>
  `
}

export default MyHeader;
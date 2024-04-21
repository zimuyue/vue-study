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
      <MyLogo />
      <MyNav :nav-data="navData" />
      <MyUser />
    </header>
  `
}

export default MyHeader;
import NavItem from './*NavItem';

import './index.scss';

const MyNav = {
  components: {
    NavItem
  },
  props: ['navData'],
  template: `
    <ul class="my-nav">
      <nav-item
        v-for="item of navData"
        :key="item.id"
        :nav-item="item"
      />
    </ul>
  `
}

export default MyNav;

/**
 * 在一个文件内
 * template
 * script
 * style
 * 
 * 
 * .vue -> 打包成.js
 * 
 */
const NavItem = {
  props: ['navItem'],
  template: `
    <li class="nav-item">
      <a :href="navItem.link" target="_blank">{{ navItem.title }}</a>
    </li>
  `
}

export default NavItem;
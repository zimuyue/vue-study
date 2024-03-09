<template>
  <div class="tab">
    <tab-search
      :searchValue="searchValue"
      @update:search-value="updateSearchValue"
    ></tab-search>
    <tab-nav
      :nav-data="navData"
      :tabIndex="tabIndex"
      @change-index="changeIndex"
    ></tab-nav>
    <tab-page
      :page-data="pageData"
    ></tab-page>
  </div>
</template>

<script>

import TabSearch from './TabSearch';
import TabNav from './TabNav';
import TabPage from './TabPage';

export default {
  name: 'tab',
  components: {
    TabSearch,
    TabNav,
    TabPage
  },
  props: ['tabData'],
  data () {
    return {
      tabIndex: this.tabData.initialIndex,
      searchValue: this.tabData.searchValue || this.tabData.data[this.tabData.initialIndex].title
    }
  },
  mounted () {
    if (this.tabData.searchValue) {
      this.updateSearchValue(this.tabData.searchValue);
    }
  },
  computed: {
    navData () {
      return this.tabData.data.map(item => {
        return {
          id: item.id,
          itemTitle: item.itemTitle
        }
      })
    },
    pageData () {
      return this.tabData.data.find((item, index) => {
        if (index === this.tabIndex) {
          return {
            title: item.title,
            content: item.content
          }
        }
      })
    }
  },
  methods: {
    changeIndex (index) {
      this.tabIndex = index;
    },
    updateSearchValue (value) {
      this.tabData.data.some((item, index) => {
        if (item.title.includes(value) || item.content.includes(value)) {
          this.tabIndex = index;
          return true;
        }
      })
    }
  }
}
</script>

<style>
  .tab {
    width: 500px;
    height: 550px;
    margin: 50px auto;
    border: 1px solid #000;
  }
</style>
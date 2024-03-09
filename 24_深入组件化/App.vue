<template>
  <div>
    <!-- kebab-case -->
    <!-- <tab
      :tab-data="tabData"
    ></tab> -->
    <!-- :disabled="confirmBtnDisabled" -->
    <!-- <modal
      width="500"
      :confirm-btn="confirmBtnText"
      cancel-btn="取消"
      :modal-show="modalShow"
      modal-title="This is my MODAL"
      type="warning"
      @modal-confirm="modalConfirm"
      @modal-cancel="modalCancel"
      :is-confirm-loading="isConfirmLoading"
      confirm-loading-text="提交中..."
    >
      <my-form
        :my-username="myUsername"
        :my-password="myPassword"
        @update:my-username="updateMyUsername"
        @update:my-password="updateMyPassword"
      ></my-form>
    </modal> -->
    <recommend-tab :initial-index="initialIndex"></recommend-tab>
  </div>
</template>

<script>

/**
 * primary  blue
 * success  green
 * danger   red
 * warning  orange
 * 
 * 数据的双向绑定v-model 来实现数据的双向绑定
 */

// import Tab from './components/Tab';
// import Modal from './components/Modal';
// import MyForm from './components/MyForm';
import RecommendTab from './components/RecommendTab';

export default {
  name: 'App',
  components: {
    // Tab,
    // Modal,
    // MyForm,
    RecommendTab
  },
  data () {
    return {
      initialIndex: 1
      // modalShow: true,
      // myUsername: '',
      // myPassword: '',
      // confirmBtnText: '确定',
      // isConfirmLoading: false,
      // tabData: {
      //   initialIndex: 1,
      //   searchValue: 'CONTENT-1',
      //   data: [
      //     { id: 1, itemTitle: 'NAV-1', title: 'TITLE-1', content: 'This is CONTENT-1!' },
      //     { id: 2, itemTitle: 'NAV-2', title: 'TITLE-2', content: 'This is CONTENT-2!' },
      //     { id: 3, itemTitle: 'NAV-3', title: 'TITLE-3', content: 'This is CONTENT-3!' },
      //     { id: 4, itemTitle: 'NAV-4', title: 'TITLE-4', content: 'This is CONTENT-4!' },
      //     { id: 5, itemTitle: 'NAV-5', title: 'TITLE-5', content: 'This is CONTENT-5!' },
      //   ]
      // }
    }
  },
  // methods: {
  //   // modalConfirm () {
  //   //   // this.confirmBtnText = '提交中...';
  //   //   // this.confirmBtnDisabled = true;

  //   //   this.isConfirmLoading = true;

  //   //   setTimeout(() => {
  //   //     this.myUsername = '';
  //   //     this.myPassword = '';
  //   //     // this.confirmBtnText = '确定';
  //   //     // this.confirmBtnDisabled = false;
  //   //     this.isConfirmLoading = false;
  //   //   }, 1000);
      
  //   // },
  //   // modalCancel () {
  //   //   this.modalShow = false;
  //   // },
  //   // updateMyUsername (value) {
  //   //   this.myUsername = value;
  //   // },
  //   // updateMyPassword (value) {
  //   //   this.myPassword = value;
  //   // }
  // }
}
</script>
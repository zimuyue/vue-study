import Modal from './Modal';

export default {
  install (app) {
    const modal = Vue.createApp(Modal);
    const oFrag = document.createDocumentFragment();
    const $modal = modal.mount(oFrag);
    app.config.globalProperties.$modal = $modal;
  }
}
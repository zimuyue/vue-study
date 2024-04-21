import './MyTitle.scss';
import MyTitleView from './MyTitle.tpl';

export default MyTitleView({
  data () {
    return {
      title: 'This is my TITLE',
      subTitle: 'This is my SUB_TITLE'
    }
  },
  methods: {
    handleTitleClick (e) {
      console.log(e.target.innerText);
    },
    handleTitle3Click (e) {
      console.log('SUB_SUB_TITLE', e.target.innerText);
    }
  }
}, {
  template: true,
  data: true,
  methods: true
})
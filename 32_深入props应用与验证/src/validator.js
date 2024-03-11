export const myDemo = {
  // null undefined 可以通过任何的数据类型检查
  count: Number,
  // 多个类型定义
  status: [ Number, String ],
  // title: String,
  // content: {
  //   type: String,
  //   // required: true
  // },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  article: {
    type: Object,
    default () {
      return {
        title: 'This is my DEFAULT_TITLE',
        content: 'This is my DEFAULT_CONTENT'
      }
    }
  },
  addCount: {
    type: Function,
    default () {
      console.log(123);
      // return 'I am here!!!';
    }
  }
}
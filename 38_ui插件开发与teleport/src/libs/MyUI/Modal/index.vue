<template>
  <!--
    teleport组件就是为了解决组件在视图中层级的问题
    Modal组件渲染时，并不希望它存在于App组件视图下
    to=""属性表示移动到哪里去，值必须是有效的css选择器 
  -->
  <teleport to="body" :disabled="false">
    <div :class="[ 'modal', type ]" v-show="isShow">
      <div class="inner">
        <header class="hd">
          <h1>{{ title }}</h1>
          <span @click="isShow = false">x</span>
        </header>
        <section class="wrap">
          <p>{{ content }}</p>
        </section>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      isShow: false,
      type: 'primary',
      title: 'Default TITLE',
      content: 'This is my defailt CONTENT.'
    }
  },
  methods: {
    init ({ show, type, title, content }) {
      this.isShow = show;
      this.setOptions({ type, title, content })
    },
    open (options) {
      this.isShow = true;
      this.setOptions(options);
    },

    primary (options) {
      this.isShow = true;
      this.setOptions({type: 'primary', ...options});
    },

    success (options) {
      this.isShow = true;
      this.setOptions({type: 'success', ...options});
    },

    warn (options) {
      this.isShow = true;
      this.setOptions({type: 'warn', ...options});
    },

    danger (options) {
      this.isShow = true;
      this.setOptions({type: 'danger', ...options});
    },

    setOptions ({ type, title, content }) {
      this.type = [
        'primary', 
        'success', 
        'warn', 
        'danger'
      ].includes(type) ? type : this.type;
      type && (this.title = title);
      content && (this.content = content);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../index.scss';

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);

    h1 {
      margin: 0;
      font-weight: normal;
    }

    &.primary {
      .hd {
        background-color: map-get($bg-colors, primary);
        color: map-get($colors, light);
      }
    }

    &.warn {
      .hd {
        background-color: map-get($bg-colors, warn);
        color: map-get($colors, light);
      }
    }

    &.success {
      .hd {
        background-color: map-get($bg-colors, success);
        color: map-get($colors, light);
      }
    }

    &.danger {
      .hd {
        background-color: map-get($bg-colors, danger);
        color: map-get($colors, light);
      }
    }

    .inner {
      position: absolute;
      top: 50px;
      left: 50%;
      width: 500px;
      height: 300px;
      margin-left: -250px;
      border-radius: 10px;
      overflow: hidden;
      background-color: map-get($colors, light);

      .hd {
        height: 44px;
        padding: 0 15px;
        line-height: 44px;
        box-sizing: border-box;

        h1 {
          font-size: 18px;
          display: inline-block;
        }

        span {
          float: right;
        }
      }

      .wrap {
        padding: 50px;
        box-sizing: border-box;
      }
    }
  }
</style>
<template>
  <div 
    :class="['modal', type ? type : '']"
    v-show="modalShow"
  >
    <div 
      class="inner"
      :style="{
        width: (width || 300) + 'px',
        marginLeft: -(width ? width / 2 : 150) + 'px'
      }"
    >
      <header class="header">
        <h1>{{ modalTitle }}</h1>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div class="btn-group" v-if="confirmBtn || cancelBtn">
        <button 
          v-if="confirmBtn"
          class="btn confirm-btn"
          @click="confirm"
          :disabled="isConfirmLoading"
        >{{ isConfirmLoading ? confirmLoadingText : confirmBtn }}</button>
        <button 
          v-if="cancelBtn"
          class="btn cancel-btn"
          @click="cancel"
        >{{ cancelBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: [
    'width',
    'confirmBtn',
    'cancelBtn',
    'modalShow',
    'modalTitle',
    'type',
    // 'disabled',
    'isConfirmLoading',
    'confirmLoadingText'
  ],
  methods: {
    confirm () {
      this.$emit('modalConfirm');
    },
    cancel () {
      this.$emit('modalCancel');
    }
  }
}
</script>

<style lang="scss">
  @mixin color-system ($color, $bgColor) {
    background-color: $bgColor;
    color: $color;
  }

  body {
    margin: 0;
  }

  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    h1,
    p {
      margin: 0;
      font-weight: normal;
    }

    button {
      border: none;
      outline: none;

      &:disabled {
        opacity: .6;
      }
    }

    .inner {
      position: absolute;
      top: 50px;
      left: 50%;
      border-radius: 5px;
      box-shadow: 1px 3px 5px #999;
      background-color: #fff;
      overflow: hidden;

      .header {
        height: 44px;
        line-height: 44px;
        padding: 0 15px;
        box-sizing: border-box;
        @include color-system(#fff, blue);

        h1 {
          font-size: 16px;
        }
      }
    }
    
    &.primary {
      .confirm-btn,
      .header {
        @include color-system(#fff, blue);
      }
    }

    &.success {
      .confirm-btn,
      .header {
        @include color-system(#fff, green);
      }
    }

    &.danger {
      .confirm-btn,
      .header {
        @include color-system(#fff, red);
      }
    }

    &.warning {
      .confirm-btn,
      .header {
        @include color-system(#333, orange);
      }
    }

    .content {
      padding: 30px;
      box-sizing: border-box;
    }

    &.confirm-btn {
      @include color-system(#fff, blue);
    }

    .btn-group {
      height: 74px;
      padding: 20px 25px;
      box-sizing: border-box;

      .btn {
        float: right;
        height: 34px;
        padding: 0 25px;
        font-size: 14px;
        margin-left: 10px;
        border-radius: 3px;

        &.cancel-btn {
          background-color: transparent;
          color: #333;
          border: 1px solid #999;
        }
      }
    }
  }
</style>
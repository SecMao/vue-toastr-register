/** Toastr的简单实现，仅供提示错误信息使用 **/
<template>
  <div class="toast-container toast-top-right">
    <div class="toast toast-error" v-show="visible" @click="clicked" @mouseover="onMouseOver"
         @mouseout="onMouseOut">
      <div class="toast-message">{{message}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SimpleToastr',
    data () {
      return {
        message: '',
        visible: false,
        timeoutId: 0,
      }
    },
    methods: {
      /**
       * 提示错误信息
       * @param message
       * @returns {Function}
       */
      error (message) {
        this.message = message
        this.showToastr()
        return () => {}
      },
      /**
       * 调用错误提示
       */
      showError () {
        this.error('toastr实例不存在，请确认已在页面引入toastr文件')
      },
      /**
       * 显示提示
       */
      showToastr () {
        this.visible = true
        this.setTimeout()
      },
      /**
       * 隐藏提示
       */
      hideToastr () {
        this.visible = false
        this.message = ''
        window.clearTimeout(this.timeoutId)
        this.timeoutId = 0
      },
      /**
       * 设置定时隐藏
       */
      setTimeout () {
        this.timeoutId = setTimeout((that = this) => {
          that.hideToastr()
        }, 3000)
      },
      /**
       * 点击隐藏
       */
      clicked () {
        this.hideToastr()
      },
      /**
       * 鼠标移入保持显示
       */
      onMouseOver () {
        window.clearTimeout(this.timeoutId)
        this.timeoutId = 0
      },
      /**
       * 鼠标移出定时隐藏
       */
      onMouseOut () {
        this.setTimeout()
      },
    },
  }
</script>

<style scoped>
  .toast {
    background-color: #030303;
    top: initial;
  }

  .toast-message {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }

  .toast-message a,
  .toast-message label {
    color: #FFFFFF;
  }

  .toast-message a:hover {
    color: #CCCCCC;
    text-decoration: none;
  }

  .toast-container {
    position: fixed;
    z-index: 999999;
    pointer-events: none;
    /*overrides*/
  }

  .toast-container * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .toast-top-right {
    top: 12px;
    right: 12px;
  }

  .toast-container > div {
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    margin: 0 0 6px;
    padding: 15px 15px 15px 50px;
    width: 300px;
    border-radius: 3px 3px 3px 3px;
    -moz-border-radius: 3px 3px 3px 3px;
    -webkit-border-radius: 3px 3px 3px 3px;
    background-position: 15px center;
    background-repeat: no-repeat;
    box-shadow: 0 0 12px #999999;
    -moz-box-shadow: 0 0 12px #999999;
    -webkit-box-shadow: 0 0 12px #999999;
    color: #FFFFFF;
    opacity: 0.8;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
    filter: alpha(opacity=80);
  }

  .toast-container > :hover {
    box-shadow: 0 0 12px #000000;
    -moz-box-shadow: 0 0 12px #000000;
    -webkit-box-shadow: 0 0 12px #000000;
    opacity: 1;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    cursor: pointer;
  }

  .toast-container > .toast-error {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=") !important;
  }

  .toast-error {
    background-color: #BD362F;
  }
</style>

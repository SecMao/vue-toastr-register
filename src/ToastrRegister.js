import notification from './components/SimpleToastr.vue'

function plugin (Vue, options) {
  if (options === void 0) options = {}
  Vue.prototype.$toastr = {}
  if (typeof toastr === 'undefined') {
    const Comp = Vue.extend(notification)
    const vm = new Comp().$mount()
    document.body.appendChild(vm.$el)
    vm.error('toastr实例不存在，请确认已在页面引入toastr文件')
    Vue.prototype.$toastr = {
      clear: vm.showError,
      remove: vm.showError,
      error: vm.showError,
      getContainer: vm.showError,
      info: vm.showError,
      options: vm.showError,
      subscribe: vm.showError,
      success: vm.showError,
      version: vm.showError,
      warning: vm.showError,
    }
    return
  }
  if (options) {
    toastr.options = options
  }
  Object.keys(toastr).forEach(item => {
    Vue.prototype.$toastr[item] = toastr[item]
  })
}

plugin.version = '0.0.7'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

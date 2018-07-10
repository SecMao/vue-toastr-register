import SimpleToastr from './components/SimpleToastr.vue'

/**
 *  默认方法，作为插件的install存在
 * @param Vue 外部Vue实例
 * @param options toastr参数
 */
function plugin (Vue, options) {
  if (options === void 0) options = {} // options不传则保持空对象
  Vue.prototype.$toastr = {} // 注册$toastr
  if (typeof toastr === 'undefined') { // 若toastr实例不存在，则使用简单实现提示错误信息
    const Comp = Vue.extend(SimpleToastr)
    const vm = new Comp().$mount()
    document.body.appendChild(vm.$el)
    vm.error('toastr实例不存在，请确认已在页面引入toastr文件')
    Vue.prototype.$toastr = { // 所有的方法、属性调用均提示错误信息
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
  // 将所有原始方法映射到$toastr，使用方法保持一致
  Object.keys(toastr).forEach(item => {
    Vue.prototype.$toastr[item] = toastr[item]
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

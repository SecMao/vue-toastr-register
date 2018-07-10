# vue-toastr-register

> Register CodeSeven/toastr on Vue prototype

## 使用须知 Before using
插件不提供toastr的内容，使用前请在页面自行引入[CodeSeven/toastr](https://github.com/CodeSeven/toastr)的js和css文件。

This plugin doesn't supply toastr instance, please link [CodeSeven/toastr](https://github.com/CodeSeven/toastr) js and css in your page before usage.

 ```html
 <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
 <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
```

## 安装 Install

``` bash
npm i vue-toastr-register --save
```

## 使用 Usage
    import ToastrRegister from 'vue-toastr-register'
    Vue.use(ToastrRegister)

    this.$toastr['success']('您的操作已完成！', '成功提示')

## 鸣谢 Thanks
实现方式参考了[saivarunk/vue-toastr-2](https://github.com/saivarunk/vue-toastr-2)，由于此项目长久不更新，因此实现了这个版本，并将其中手动映射的部分直接自动映射，使得最终使用方式与原始toastr一致

This implementation mimics  [saivarunk/vue-toastr-2](https://github.com/saivarunk/vue-toastr-2) for its long time no update. What's difference is the toastr functions mapping directly to primitive ones.

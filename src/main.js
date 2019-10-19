import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 Mint-UI
// import MintUI from 'mint-ui' //把所有的组件都导入进来
// // 这里 可以省略 nide_modules 这一层目录
// import 'mint-ui/lib/style.css'
// // 将 MintUI 安装到 Vue 中
// Vue.use(MintUI) // 把所有的组件，注册为全局的组件

// 按需导入 Mint-UI组件
import { Button } from 'mint-ui'
// 使用vue.component 注册 按钮组件
Vue.component(Button.name, Button)
// 测试
// console.log(Button.name)

// 导入 Bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入 MUI
import './lib/mui/css/mui.css'

// 导入 app 组件
import app from './App.vue'

// 导入 自定义模块
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render: c => c(app),// render 会把 el 指定的容器中，所有的内容都清空覆盖，所以不要把路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    router //4. 将路由对象挂载到 vm 上
})

// 注意：APP 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染组件，渲染出来的组件，只能放到 el: '#app' 所指定的元素中；
// Account 和 GoodsList 组件，是通过路由配置监听的，所以，这两个组件，只能展示到 属于路由的 <router-view></router-view> 中去；
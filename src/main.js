import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'// 路由
import store from './store' // vuex
import './utils/register-vant.js'// vant
import 'amfe-flexible' // 适应屏幕
import Mock from '@/mock' // 模拟数据
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  Mock,
  axios,
  render: h => h(App)
}).$mount('#app')

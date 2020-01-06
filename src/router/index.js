import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import Tabbar from '../views/tabbar'
import Badminton from '../views/tabbar/badminton'
import Basketball from '../views/tabbar/basketball'
import Swim from '../views/tabbar/swim'
import VenueBetails from '../views/venueBetails'
import Component from '../views/personal'
Vue.use(VueRouter)

const routes = [
  // 配置路由表
  {
    path: '/login',
    component: Login
  },
  {
    path: '',
    component: Tabbar,
    children: [
      {
        path: '/',
        component: Badminton
      },
      {
        path: '/basketball',
        component: Basketball
      },
      {
        path: '/swim',
        component: Swim
      }
    ]
  },
  {
    path: '/venueBetails',
    component: VenueBetails
  },
  {
    path: '/personal',
    component: Component
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

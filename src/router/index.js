import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import VenueBetails from '../views/venueBetails'
import Personal from '../views/personal'
import ManyVenues from '../views/ManyVenues'
import Home from '../views/home'
import AllMovement from '../components/AllMovement.vue'
import Place from '../views/place'
import Userrecharge from '../views/user/userrecharge'
import AllMovement02 from '../components/AllMovement02.vue'

Vue.use(VueRouter)

const routes = [
  // 配置路由表
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home', // 首页
    component: Home,
    children: [
      {
        path: '/home/allMovement',
        component: AllMovement
      },
      {
        path: '/home/allMovement02',
        component: AllMovement02
      }
    ]
  },
  {
    path: '/venueBetails', // 单馆的首页
    component: VenueBetails
  },
  {
    path: '/manyVenues', // 多管详情页
    component: ManyVenues
  },
  {
    path: '/personal', // 个人中心
    component: Personal
  },
  {
    path: '/place', // 场块地
    component: Place
  },
  {
    path: '/user/userrecharge', // 会员卡充值
    component: Userrecharge
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

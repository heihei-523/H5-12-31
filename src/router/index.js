import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import Tabbar from '../views/tabbar'
import Badminton from '../views/tabbar/badminton'
import Basketball from '../views/tabbar/basketball'
import Swim from '../views/tabbar/swim'
import VenueBetails from '../views/venueBetails'
import Personal from '../views/personal'
import ManyVenues from '../views/ManyVenues'
import VenueList from '../views/VenueList'
import AllMovement from '../components/AllMovement.vue'
import Place from '../views/place'
import Userrecharge from '../views/user/userrecharge'
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
    path: '/venueList',
    component: VenueList,
    children: [
      {
        path: '/venueList/allMovement',
        component: AllMovement
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

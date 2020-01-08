import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import Home02 from '../views/home/index2.vue'
import Personal from '../views/user/personal'
import VenueDetails from '../views/VenueList/venue details'
import Home from '../views/home'
import AllMovement from '../components/AllMovement.vue'
// import Place from '../views/place'
import Userrecharge from '../views/user/userrecharge'
import Invoice from '../views/invoice/apply-invoice.vue' // 申请发票
import VenueBooking from '../views/VenueList/VenueBooking' // 场地预定单
import BuyTicket from '../views/VenueList/BuyTicket' // 购买门票

Vue.use(VueRouter)

const routes = [
  // 配置路由表
  {
    path: '/login',
    component: Login
  },
  {
    path: '/', // 首页
    component: Home,
    children: [
      {
        path: '',
        component: AllMovement
      }
    ]
  },
  {
    path: '/home02', // 首页2
    component: Home02
  },
  {
    path: '/denueDetails', // 场馆详情页
    component: VenueDetails
  },
  {
    path: '/personal', // 个人中心
    component: Personal
  },
  // {
  //   path: '/place', // 场块地
  //   component: Place
  // },
  {
    path: '/user/userrecharge', // 会员卡充值
    component: Userrecharge
  },
  {
    path: '/apply-invoice',
    component: Invoice // 申请发票
  },
  {
    path: '/venueBooking', // 场地预定单
    component: VenueBooking
  },
  {
    path: '/buyTicket', // 购买门票
    component: BuyTicket
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

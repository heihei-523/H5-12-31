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
import InvoiceFrom from '../views/invoice/invoiceFrom.vue' // 申请发票的表单
import ApplyInvoice from '../views/invoice/apply-invoice.vue' //
import VenueBooking from '../views/VenueList/VenueBooking' // 场地预定单
import BuyTicket from '../views/VenueList/BuyTicket' // 购买门票
import MembershipDetails from '../views/user/MembershipcardDetails' // 会员卡详情
import InvoiceDetails from '../views/invoice/invoiceDetails.vue' // 发票详情
import MyInvoice from '../views/invoice/MyInvoice.vue' // 我的发票
import Feedback from '../views/feedback' // 意见反馈
import TicketsDetails from '../views/VenueList/ticketsDetails' // 门票详情
import PayOrder from '../views/VenueList/payOrder' // 支付订单

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
    path: '/applyInvoiceFrom',
    component: InvoiceFrom // 申请发票表单
  },
  {
    path: '/ApplyInvoice',
    component: ApplyInvoice
  },
  {
    path: '/venueBooking', // 场地预定单
    component: VenueBooking
  },
  {
    path: '/buyTicket', // 购买门票
    component: BuyTicket
  },
  {
    path: '/membershipDetails', // 会员卡详情
    component: MembershipDetails
  },
  {
    path: '/invoiceDetails', // 发票详情
    component: InvoiceDetails
  },
  {
    path: '/myInvoice', // 我的发票
    component: MyInvoice
  },
  {
    path: '/feedback', // 意见反馈
    component: Feedback
  },
  {
    path: '/ticketsDetails', // 门票详情
    component: TicketsDetails

  },
  {
    path: '/payOrder',
    component: PayOrder
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

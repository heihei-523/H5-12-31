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
import PurchaseMembershipCard from '../views/VenueList/purchaseMembershipCard' // 购买会员卡
import CardList from '../views/VenueList/cardList' // 会员卡列表的头部
import Card from '../views/VenueList/cardList/card' // 会员卡列表
import TicketsOrder from '../views/user/ticketsOrder' // 门票订单列表
import Details from '../views/user/ticketsOrder/Details' // 门票订单详情
import CommodityOrder from '../views/user/commodityOrder' // 商品订单
import CancelPay from '../views/user/payDetails/cancelPay' // 取消场馆订单详情
import Paid from '../views/user/payDetails/paid' // 已支付场馆订单详情
import AwaitPay from '../views/user/ticketsPay/awaitPay' // 门票待支付订单详情
import PaidDetails from '../views/user/ticketsPay/paidDetails' // 门票待支付详情
import CancelTicketsPay from '../views/user/ticketsPay/cancel' // 门票取消支付详情
import PurchaseMember from '../views/user/purchaseMember' // 个人中心/购买会员卡
import CompileMember from '../views/user/compileMember' // 编辑会员详情

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
    path: '/membershipDetails', // 充值会员卡详情
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
  },
  {
    path: '/purchaseMembershipCard', // 购买会员卡页
    component: PurchaseMembershipCard
  },
  {
    path: '/cardList', // 会员卡列表的头部
    component: CardList,
    children: [
      {
        path: '/cardList/list',
        component: Card
      }
    ]
  },
  {
    path: '/ticketsOrder',
    component: TicketsOrder,
    children: [
      {
        path: '/ticketsOrder/details',
        component: Details
      }
    ]
  },
  {
    path: '/commodityOrder',
    component: CommodityOrder
  },
  {
    path: '/cancelPay', // 取消订单详情----场馆
    component: CancelPay
  },
  {
    path: '/paid', // 已支付付款详情----场馆
    component: Paid
  },
  {
    path: '/awaitPay', // 等待付款详情---门票
    component: AwaitPay
  },
  {
    path: '/paidDetails', // 门票已支付详情
    component: PaidDetails
  },
  {
    path: '/cancelTicketsPay', // 门票取消支付详情
    component: CancelTicketsPay
  },
  {
    path: '/purchaseMember',
    component: PurchaseMember
  },
  {
    path: '/CompileMember',
    component: CompileMember
  }

]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

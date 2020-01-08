<template>
<!-- 个人中心 -->
  <div class="app">
      <van-nav-bar title="个人中心" @click-left="onClickLeft">
        <van-icon name="cross" slot="left" />
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div class="portrait">
          <div class="p1">
            <img src="../../../assets/touXiang.png" alt="" class="t_1">
            <h6>昵称</h6>
            <span>编辑</span>
            <img src="../../../assets/icon_morearrow.png" alt="">
          </div>
      </div>
      <div class="order">
          <div class="o1">
              <span>
                  订单中心
              </span>
          </div>
          <div class="o2">
              <div>
                  <img src="../../../assets/changDiDingDan.png" alt="">
                  <span>场地订单</span>
              </div>
              <div>
                  <img src="../../../assets/MenPiaoDingdan.png" alt="">
                  <span>门票订单</span>
              </div>
              <div>
                  <img src="../../../assets/jianShenDingDan.png" alt="">
                  <span>商品订单</span>
              </div>
          </div>
      </div>
      <div class="order">
          <div class="o1">
              <span>
                  订单中心
              </span>
          </div>
          <div class="o2">
              <div>
                  <img src="../../../assets/Mycard.png" alt="">
                  <span>我的会员卡</span>
              </div>
              <div>
                  <img src="../../../assets/huyuanchongzhi.png" alt="">
                  <span>会员充值</span>
              </div>
              <div>
                  <img src="../../../assets/goumaixinka.png" alt="">
                  <span>购买新卡</span>
              </div>
          </div>
      </div>
      <van-cell title="我的门票" is-link>
          <img src="../../../assets/Mytickets.png" alt="" slot="icon">
      </van-cell>
      <van-cell title="发票申请" is-link>
          <img src="../../../assets/invoice.png" alt="" slot="icon">
      </van-cell>
      <van-cell title="意见反馈" is-link>
          <img src="../../../assets/yijianfankui.png" alt="" slot="icon">
      </van-cell>
      <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {

    }
  }
}
</script>

<style lang="less" scoped>
.app {
    background-color: #F5F6F7;
}
.portrait {
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: #F5F6F7;
    .p1 {
        display: flex;
        background-color: #fff;
        flex:1;
        align-items: center;
        padding: 15px;
        border-radius: 4px;
        .t_1 {
        width: 60px;
        height: 60px;
        }
        h6 {
            width:98px;
            height:16px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:16px;
            flex:9;
            margin-left: 8px;
        }
        span {
            text-align: right;
            width:26px;
            height:18px;
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(125,125,125,1);
            line-height:18px;
            flex:2;
        }

    }
}
.order {
    height: 134px;
    display: flex;
    width: 351px;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 4px;
    margin: 0 auto;
    border-bottom: 10px #F5F6F7 solid;
    .o1 {
        display: flex;
        font-size:14px;
        padding: 10px 0;
        border-bottom: 2px #F5F6F7 solid;
        flex: 3;
        span {
            padding-left: 10px;
            border-left: 5px solid #1890FF;
            height: 18px;
        }
    }
    .o2 {
        display: flex;
        font-size: 13px;
        flex: 7;
        div {
            color: #7D7D7D;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
            flex: 1;
        }
    }
}
.van-cell--clickable {
    margin: 0 auto;
    width: 351px;
    border-radius: 4px
}
.bottom {
    height: 66px;
    width: 100%;
    background-color: #F5F6F7;
}
</style>

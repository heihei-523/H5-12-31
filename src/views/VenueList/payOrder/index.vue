<template>
<!-- 支付订单 -->
  <div class="app">
    <van-nav-bar title="支付订单">
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="top">
      <img src="../../../assets/yi_ti_jiao.png" alt />
      <div class="ti_jiao">订单已提交</div>
      <div class="shi_jian">
        <div>请在</div>
        <span>14分43秒</span>
        <div>内完成支付</div>
      </div>
    </div>
    <div class="zhi_jin_e">
      <div class="dai_zhi_fu">待支付金额：</div>
      <div class="money">
        <div>￥280.00</div>
        <s>￥325.00</s>
      </div>
    </div>
    <van-radio-group v-model="radio">
      <div class="checked" @click="radio = '1'">
        <img src="../../../assets/wx.png" alt />
        <div class="wx">微信支付</div>
        <van-radio name="1"></van-radio>
      </div>
      <div @click="radio = '2'">
        <div class="checked2">
          <img src="../../../assets/hui_yuan_ka.png" alt />
          <div class="wx">会员卡支付</div>
          <div class="sell">会员卡专享八折优惠</div>
          <van-radio name="2"></van-radio>
        </div>
        <div class="checked3">
            <span class="s1">卡内余额</span>
            <span class="s2">￥100.00</span>
            <span class="s3">充值</span>
        </div>
      </div>
    </van-radio-group>
    <van-button type="primary" size="large" color="#fa6400">立即支付280元</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 2
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.app {
  background-color: #f5f6f7;
  height: 667px;
}
.top {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  padding-top: 20px;
  border-bottom: #f5f6f7 1px solid;
  img {
    width: 60px;
  }
  .ti_jiao {
    width: 81px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 22px;
    margin-top: 10px;
  }
  .shi_jian {
    display: flex;
    margin-top: 13px;
    margin-bottom: 13px;
    div {
      height: 18px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 18px;
    }
    span {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(24, 144, 255, 1);
      line-height: 20px;
      padding: 0 5px;
    }
  }
}
.zhi_jin_e {
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0  12px;
  border-bottom: #f5f6f7 8px solid;
  .dai_zhi_fu {
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
    flex: 3;
  }
  .money {
    display: flex;
    flex-direction: column;
    text-align: right;
    flex: 7;
    div {
      height: 22px;
      font-size: 16px;
      font-family: SFProText-Medium, SFProText;
      font-weight: 500;
      color: rgba(250, 100, 0, 1);
      line-height: 19px;
    }
    s {
      height: 16px;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(190, 192, 204, 1);
      line-height: 16px;
    }
  }
}
// /deep/.van-radio-group {
//     padding-top: 6px;
// }
.checked {
  display: flex;
  background-color: #fff;
  height: 48px;
  padding: 6px 0;
  align-items: center;
  border-bottom: #f5f6f7 solid 1px;
  img {
    width: 16px;
    height: 16px;
    margin: 0 12px;
  }
  .wx {
    width: 57px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
    flex: 8;
  }
  .van-radio {
    flex: 1;
  }
}
.checked2 {
  display: flex;
  background-color: #fff;
//   padding: 6px 0;
  height: 40px;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    margin: 0 12px;
  }
  .wx {
    width: 57px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
    flex: 2;
  }
    .sell {
        height:14px;
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(250,100,0,1);
        line-height:14px;
        flex: 6;
    }
  .van-radio {
    flex: 1;
  }
}
.checked3 {
    padding: 6px 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 30px;
    // width: 230px;
    padding-left: 40px;
    padding-right: 140px;
    .s1 {
        width:52px;
        height:14px;
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(138,140,153,1);
        line-height:14px;
        flex: 1;
    }
    .s2 {
        width:53px;
        height:14px;
        font-size:13px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(250,100,0,1);
        line-height:14px;
        flex: 1;
        text-align: left;
    }
    .s3 {
        width: 68px;
        height:30px;
        background:rgba(255,255,255,1);
        border-radius:15px;
        border:1px solid rgba(24,144,255,1);
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(24,144,255,1);
        line-height:30px;
        text-align: center;
    }
}
.van-button {
    position: fixed;
    bottom: 0;
}
</style>

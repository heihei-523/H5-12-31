<template>
  <div>
      <van-nav-bar
        title="会员卡充值"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <!-- ___________________会员卡 -->
      <div class="card">
        <div class="card-name">储值卡</div>
        <div class="card-value">动网储值卡{{cardValue}}万</div>
        <div class="card-code">{{cardCode}}</div>
      </div>
      <!-- ___________________充值金额   -->
      <div class="money">
        <div class="money-top">
          <i></i>
          <span>充值金额</span>
        </div>
        <div class="money-active">
          <div>¥1000</div>
          <div class="active">¥2000</div>
          <div>¥3000</div>
        </div>
      </div>
      <!-- ___________________________充值说明 -->
      <div class="rule">
        <div class="rule-one">
          <span>充值规则</span>
          <span>充值满3000元赠送100元</span>
        </div>
        <div class="rule-two">
          <span>消费折扣</span>
          <span>会员尊享8折优惠</span>
        </div>
        <div class="rule-three">
          <span>适用项目</span><span>全品类项目都可使用，包括乌拉察布体育馆旗</span>
        </div>
      </div>

      <div class="box">

      </div>

      <!-- 底部 -->
      <div class="footer">
        <span class="footer-one">实付金额:</span>
        <span class="footer-two">{{sumMoney}}元</span>
        <van-button type="info">立即支付</van-button>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      cardValue: 3,
      cardCode: '2207 2449 8879 0003',
      sumMoney: 2000.00
    }
  },
  methods: {
    onClickLeft () {
      // navbar 返回
    },
    onClickRight () {
      // navbar 菜单
    }
  }
}
</script>

<style lang="less" scoped>
  .box{
    background:rgba(245,246,247,1);
  }
  .card {
    background: url('../../../assets/储值卡备份 (1).png') no-repeat;
    background-size: 100%;
    width: 351px;
    height: 225px;
    margin: 9px 12px;
    padding: 20px 0 0 20px;
    box-sizing: border-box;
    .card-name{
      color: #fff;
      font-size: 16px;
      opacity: 0.7;
      height: 22px;
      line-height: 22px;
      font-family: PingFangSC-Medium,PingFang SC;
    }
    .card-value{
      color: #fff;
      font-size: 24px;
      height: 33px;
      line-height: 33px;
      font-family: PingFangSC-Medium,PingFang SC;
    }
    .card-code{
      margin-top: 103px;
      color: #fff;
      font-size: 20px;
      height: 28px;
      line-height: 28px;
      font-family: PingFangSC-Regular,PingFang SC;
    }
  }
  .money{
    .money-top{

      i{
        display: inline-block;
        width: 4px;
        height: 14px;
        background-color: #1890FF;
      }
      span{
        display: inline-block;
        line-height: 36px;
        height: 36px;
        font-size:14px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(92,93,102,1);
        margin-left: 8px;
      }
    }
    .money-active{
      height: 96px;
      box-sizing: border-box;
      padding: 8px 0 24px;
      display: flex;
      justify-content: space-around;
      div{
        width:109px;
        height:64px;
        line-height: 64px;
        background:rgba(245,246,247,1);
        border-radius:6px;
        border:2px solid rgba(229,229,229,1);
        padding-left: 19px;
        color:rgba(92,93,102,1);
        font-size: 24px;
        box-sizing: border-box;
      }
      .active{
        width:109px;
        height:64px;
        background:rgba(188,223,255,1);
        line-height: 64px;
        border-radius:6px;
        border:2px solid rgba(24,144,255,1);
        padding-left: 19px;
        box-sizing: border-box;
        color:rgba(24,144,255,1);
      }
    }
  }
  .rule{
    height: 114px;
    box-sizing: border-box;
    padding: 8px 13px 0 12px;
    border-top: 1px solid #F5F6F7;
    .rule-one, .rule-two, .rule-three{
      padding-left: 60px;
      position: relative;
    }
    .rule-one :nth-child(1), .rule-two :nth-child(1), .rule-three :nth-child(1){
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(138,140,153,1);
      line-height:20px;
      position: absolute;
      left: 0;
      top: 10px;
    }
    .rule-one :nth-child(2), .rule-two :nth-child(2), .rule-three :nth-child(2){
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(46,47,51,1);
      line-height:20px;
    }
  }
  .box{
    background:rgba(245,246,247,1);
    height: 200px;
  }
  .footer{
    width: 100%;
    height:50px;
    background:rgba(255,255,255,1);
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 5px 12px;
    .footer-one{
      font-size: 16px;
      color: #5C5D66;
      display: inline-block;
      width: 81px;
    }
    .footer-two{
      font-size: 18px;
      color: #FA6400;
      margin-right: 120px;
    }
    .van-button{
      height: 40px;
    }
  }

</style>

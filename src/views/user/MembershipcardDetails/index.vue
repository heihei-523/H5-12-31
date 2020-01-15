<template>
  <div class="app">
    <!-- 会员卡详情 -->
    <div>
      <van-nav-bar title="会员卡详情">
        <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
        <van-icon name="ellipsis"
                  slot="right" />
      </van-nav-bar>
    </div>
    <!-- 会员卡 -->
    <div class="huiyuanka">
      <span class="huiyuanka1">储值卡</span>
      <span class="huiyuanka2">动网储值卡3万</span>
      <span class="huiyuanka3">2207 2449 8879 0003</span>
    </div>
    <div class="yue">
      <div class="aa">余额：</div>
      <div class="bb">2000.00</div>
      <div class="cc">元</div>
    </div>
    <div class="chong">
      <button>充值</button>
    </div>
    <div class="card">
      <div class="card1">
        <div class="card2">会员卡号：</div>
        <div class="card3">2207244988790003</div>
      </div>
      <div class="card1">
        <div class="card2">卡类型：</div>
        <div class="card3">充值卡</div>
      </div>
      <div class="card1">
        <div class="card2">适用项目：</div>
        <div class="card3">全部项目</div>
      </div>
      <div class="card1">
        <div class="card2">有效日期：</div>
        <div class="card3">2021-01-01</div>
      </div>
    </div>
    <div class="makemoney">
      <span class="lange"></span>
      <span class="font">消费记录</span>
    </div>
    <div class="buy">
      <div class="buy1">
        <div class="buy2">
          <span class="orange"></span>
          <span class="nnnn">购买次卡</span>
        </div>
        <div class="buy3">
          <span>￥100.00元</span>
        </div>
      </div>
      <p>消费日期：2020.12.12 07:5</p>
      <p>消费地点：乌兰察布体育馆</p>
      <p>支付方式：会员卡支付</p>
    </div>
    <div class="buy">
      <div class="buy1">
        <div class="buy2">
          <span class="orange"></span>
          <span class="nnnn">购买次卡</span>
        </div>
        <div class="buy3">
          <span>￥100.00元</span>
        </div>
      </div>
      <p>消费日期：2020.12.12 07:5</p>
      <p>消费地点：乌兰察布体育馆</p>
      <p>支付方式：会员卡支付</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.app {
  // height: 680px;
  // background-color: #F5F6F7;
  border-bottom: solid #F5F6F7 40px;
}
.huiyuanka {
  width: 351px;
  height: 226px;
  background-color: #fff;
  background: url('../../../assets/chuZhiKa@2x.png') no-repeat;
  background-size: 100%;
  margin: auto;

  span {
    display: block;
    margin-left: 20px;
  }
  .huiyuanka1 {
    width: 48px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
    padding-top: 20px;
  }
  .huiyuanka2 {
    width: 159px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 33px;
  }
  .huiyuanka3 {
    width: 210px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
    margin-top: 103px;
  }
}
.yue {
  margin-top: 14px;
  background-color: #fff;
  div {
    display: inline-block;
  }
  .aa {
    width: 49px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 22px;
    margin-left: 106px;
  }
  .bb {
    width: 95px;
    height: 33px;
    font-size: 24px;
    font-family: SFProDisplay-Medium, SFProDisplay;
    font-weight: 500;
    color: rgba(24, 144, 255, 1);
    line-height: 29px;
  }
  .cc {
    width: 17px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 22px;
  }
}
.chong {
  text-align: center;
  margin-top: 8px;
  button {
    width: 351px;
    height: 44px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    border: none;
    background: rgba(24, 144, 255, 1);
    border-radius: 4px;
  }
}
// .card {
//   display: flex;
//   justify-content: space-between;
//   padding: 0 12px;
//   border-top: 2px solid rgb(247, 243, 243);
//   margin-top: 12px;
//   .card1 {
//     span {
//       display: block;
//       font-size: 14px;
//       font-family: PingFangSC-Regular, PingFang SC;
//       font-weight: 400;
//       color: rgba(138, 140, 153, 1);
//       line-height: 20px;
//       margin-top: 12px;
//     }
//   }
//   .card2 {
//     span {
//       display: block;
//       margin-top: 12px;
//       font-size: 14px;
//       font-family: PingFangSC-Regular, PingFang SC;
//       font-weight: 400;
//       color: rgba(46, 47, 51, 1);
//       line-height: 20px;
//     }
//   }
// }
.card {
  padding: 0 12px;
  border-top: 1px solid rgb(226, 223, 223);
  border-bottom: 8px solid rgb(247, 243, 243);
  margin-top: 12px;
  padding-bottom: 12px;
  .card1 {
    display: flex;
    justify-content: space-between;
    .card2 {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 20px;
      margin-top: 12px;
    }
    .card3 {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(46, 47, 51, 1);
      line-height: 20px;
      margin-top: 12px;
    }
  }
}
.makemoney {
  .lange {
    display: inline-block;
    width: 4px;
    height: 14px;
    background: rgba(24, 144, 255, 1);
    vertical-align: middle;
  }
  .font {
    width: 56px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
    margin-left: 8px;
  }
}
.buy {
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  .buy1 {
    display: flex;
    justify-content: space-between;
    .buy2 {
      .orange {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(250, 100, 0, 1);
        margin-left: 8px;
        margin-right: 7px;
      }
      .nnnn {
        width: 64px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(46, 47, 51, 1);
        line-height: 22px;
      }
    }
    .buy3 {
      span {
        width: 71px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(46, 47, 51, 1);
        line-height: 20px;
        padding-right: 12px;
      }
    }
  }
  p {
    width: 189px;
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 18px;
    padding-left: 24px;
  }
}
</style>

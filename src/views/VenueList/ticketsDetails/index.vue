<template>
  <div class="app">
    <van-nav-bar title="门票详情" fixed>
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="bgc">
      <div class="head">
        <div class="venue_name">乌兰察布体育馆</div>
        <div class="dizhi">内蒙古自治区乌兰察布市集宁区格根西街近乌兰察布图书馆</div>
      </div>
    </div>
    <div class="bgc">
      <div class="tickets">
        <div class="class">羽毛球-散客单人票</div>
        <div class="bottom">
          <div class="left">门票类型:</div>
          <div class="right">成人票</div>
        </div>
        <div class="bottom">
          <div class="left">订单价格</div>
          <div class="right">￥100.00</div>
        </div>
        <div class="guiZe">
          <div class="biaoTi">
            <span></span>
            <div>使用规则</div>
          </div>
          <div class="bottom">
            <div class="left">有效日期：</div>
            <div class="right">2020年10月30日-2029年10月30日</div>
          </div>
          <div class="bottom">
            <div class="left">可用时间</div>
            <div class="right">周一至周日可用 07:30-23:00</div>
          </div>
        </div>
      </div>
    </div>

    <div class="buJinQi">
      <div class="b1">门票</div>
      <div class="b2">
        <van-stepper v-model="value" />
      </div>
    </div>
    <div class="total">
      <div class="left">合计金额</div>
      <div class="money">￥325.00元</div>
    </div>
    <div class="xu_zhi">
      <div class="lan-box">
        <span></span>
        <div class="biao_ti">购买须知</div>
      </div>
      <div class="text">
        重办省周华见收管江你展七思知山办共接北使次如
        相革素号角维三学济美众器米风时报关热条结思行工
        解华听种根交列者克入和厂什象议往石天能离我海的。
      </div>
    </div>
    <div class="xu_zhi">
      <div class="lan-box">
        <span></span>
        <div class="biao_ti">门票详情</div>
      </div>
      <div class="text">
        好的界面设计并不始于图片，而是始于对人的理解，比如人们喜欢
        什么，为什么人们会试用某种特定的软件，他们可能与之怎样交互
      </div>
    </div>
    <div class="an_niu">
      <div class="shi_fu">实付金额：</div>
      <div class="jin_e">352.00</div>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  background-color: #f5f6f7;
  height: 667px;
  padding-bottom: 50px;
}
.bgc {
  background-color: #fff;
}
.kong {
  height: 50px;
  background-color: #f5f6f7;
  width: 100%;
}
.head {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #f5f6f7;
  width: 351px;
  padding-top: 7px;
  margin: 0 auto;
  .venue_name {
    background-color: #fff;
    height: 35px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 35px;
  }
  .dizhi {
    height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 30px;
    padding-bottom: 5px;
  }
}
.tickets {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  border-bottom: 0.5px solid #f5f6f7;
  width: 351px;
  padding-top: 7px;
  margin: 0 auto;
  .class {
    height: 35px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 35px;
    padding-bottom: 5px;
  }
  .bottom {
    display: flex;
    padding-bottom: 8px;
    .left {
      flex: 3;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      padding-bottom: 5px;
    }
    .right {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(46, 47, 51, 1);
      flex: 7;
      text-align: right;
    }
  }
  .biaoTi {
    display: flex;
    position: relative;
    padding-bottom: 12px;
    span {
      height: 14px;
      width: 4px;
      position: absolute;
      left: -11px;
      top: 2px;
      background: #1890ff;
    }
    div {
      width: 56px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
    }
  }
}
.buJinQi {
  background-color: #fff;
  display: flex;
  padding: 14px 12px 14px 12px;
  border-bottom: 0.5px solid #f5f6f7;
  .b1 {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(46, 47, 51, 1);
    line-height: 22px;
    flex: 5;
  }
  .b2 {
    text-align: right;
    flex: 5;
  }
}
.total {
  display: flex;
  padding: 14px 12px 14px 12px;
  background-color: #fff;
  border-bottom: 10px solid #f5f6f7;
  .left {
    flex: 3;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    padding-bottom: 5px;
  }
  .money {
    flex: 7;
    font-size: 16px;
    font-family: SFProText-Medium, SFProText;
    font-weight: 500;
    color: rgba(250, 100, 0, 1);
    text-align: right;
  }
}
.xu_zhi {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding-top: 10px;
  .lan-box {
    display: flex;
    span {
      height: 14px;
      width: 4px;
      background-color: #1890ff;
      margin-right: 10px;
    }
    .biao_ti {
      width: 56px;
      height: 25px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 14px;
    }
  }
  .text {
    width: 351px;
    height: 60px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 20px;
    margin-left: 12px;
  }
}

</style>

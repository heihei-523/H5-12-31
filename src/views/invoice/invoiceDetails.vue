<template>
  <!-- 发票详情 -->
  <div>
    <van-nav-bar title="发票详情" @click-left="onClickLeft" fixed>
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kongBox"></div>
    <div class="app">
      <div class="head">
        <div class="right">
          <p>审核中</p>
          <div>自提交之日起，客服将在3个工作日内处理完成</div>
        </div>
        <div class="left">
          <img src="../../assets/fapiaoxiangqing1.png" alt />
        </div>
      </div>
      <div class="white">
        <!-- 发票信息 -->
        <p>
          <i></i>
          <span>发票信息</span>
        </p>
        <div class="class">
          <span class="left">发票类型</span>
          <span class="right">
            <img src="../../assets/danxuankuang.png" />
            <span>企业</span>
          </span>
        </div>
        <div class="form_1">
          <div class="left">发票抬头</div>
          <div class="you">动网天下科技有限公司</div>
        </div>
        <div class="money">
          <span class="left">发票金额</span>
          <div>￥400.00</div>
        </div>
        <div class="form_1">
          <div class="left">税号</div>
          <div class="you">f234000900031</div>
        </div>
        <div class="form_1">
          <div class="left">单位地址</div>
          <div class="you">学清路16号院直选大厦</div>
        </div>
        <div class="form_1">
          <div class="left">银行账号</div>
          <div class="you">6228 9990 0345 6777</div>
        </div>
        <div class="form_1">
          <div class="left">开户银行</div>
          <div class="you">农业银行学院路支行</div>
        </div>
        <div class="form_1">
          <div class="left">手机号码</div>
          <div class="you">18920180032</div>
        </div>
        <div class="solid"></div>
        <!-- 邮寄地址 -->
        <p>
          <i></i>
          <span>邮政地址</span>
        </p>
        <div class="form_1">
          <div class="left">收件人</div>
          <div class="you">马三超</div>
        </div>
        <div class="form_1">
          <div class="left">联系方式</div>
          <div class="you">185 15026685</div>
        </div>
        <div class="form_1">
          <div class="left">收件地址</div>
          <div class="you">河北省石家庄市正定县光明大街 昌盛大厦A座9层2301室</div>
        </div>
        <div class="solid"></div>
        <!-- 订单详情 -->
        <p>
          <i></i>
          <span>订单信息</span>
        </p>
        <div class="form_2">
          <div class="left">隆兴羽毛球超级馆</div>
          <div class="left">羽毛球 周日(03/13)</div>
          <div class="left">第1号场地 12:00 -14:00 ￥100.00</div>
          <div class="left">第2号场地 12:00 -14:00 ￥100.00</div>
        </div>
        <div class="solid"></div>
        <!-- 实付 -->
        <div class="shi_fu">
          <div class="shifu">实付</div>
          <div class="money2">￥100</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      onClickLeft () {}
    }
  }
}
</script>

<style lang='less' scoped>
//公共样式
.solid {
  height: 1px;
  box-sizing: border-box;
  width: 321px;
  // padding: 0 15px;

  margin: 9px 10px;
  border-bottom: 0.5px #d8d8d8 dashed;
}
.left {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(138, 140, 153, 1);
  line-height: 20px;
  padding-left: 11px;
  flex: 2.5;
}
.form_2 {
  display: flex;
  flex-direction: column;
  div {
    margin: 10px 0;
  }
}
.you {
  width: 140px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(46, 47, 51, 1);
  line-height: 20px;
  flex: 7.5;
}
//------------------------------------------
.kongBox {
  height: 44px;
}
.app {
  background-color: #1890ff;
  padding: 0 10px;
  padding-bottom: 70px;
  .head {
    color: #fff;
    display: flex;
    height: 84px;
    align-items: center;
    .right {
      flex: 7;
      p {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        padding: 5px 0;
        margin: 0;
      }
      div {
        width: 230px;
        height: 16px;
        font-size: 11px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 16px;
      }
    }
    .left {
      height: 64px;
      flex: 2;
    }
  }
  .white {
    border-radius: 4px;
    background-color: #fff;
    padding-left: 7px;
    p {
      margin-top: 0;
      margin-bottom: 8px;
      span {
        // padding-left: 7px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(46, 47, 51, 1);
        line-height: 20px;
        margin-left: 5px;
      }
      i {
        margin-top: 1px;
        font-weight: 400;
        height: 15px;
        display: inline-block;
        border-left: #1890ff solid 5px;
      }
    }
    .class {
      display: flex;
      .right {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(24, 144, 255, 1);
        flex: 7.5;
        img {
          vertical-align: middle;
          margin-right: 4px;
        }
      }
    }
    .form_1 {
      display: flex;
      margin-top: 16px;
    }
    .money {
      display: flex;
      margin-top: 16px;
      div {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 77, 79, 1);
        line-height: 18px;
        flex: 7.5;
      }
    }
    .shi_fu {
      display: flex;
      height: 40px;
      align-items: center;
      .shifu {
        flex: 2.5;
        width: 57px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 20px;
        padding-left: 11px;
      }
      .money2 {
        flex: 7.5;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 77, 79, 1);
        line-height: 18px;
      }
    }
  }
}
</style>

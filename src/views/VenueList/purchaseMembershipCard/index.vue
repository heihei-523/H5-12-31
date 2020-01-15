<template>
  <div class="app">
    <van-nav-bar title="会员卡详情页" fixed>
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="hui_yuan_ka">
      <div class="hui_yuan">
        <div class="top">
          <div class="name">会员卡名称</div>
          <div class="name_2">游泳-5次卡</div>
        </div>
        <div class="class">
          <div class="class_1">卡类型</div>
          <div class="class_2">单次卡</div>
        </div>
      </div>
      <div class="you_xiao_qi">
        <div class="you_xia_qi_1">
          <span class="lan_box"></span>
          <div class="text">卡片有效期</div>
        </div>
        <div class="bom">购买后九十天后有效</div>
      </div>
      <div class="you_xiao_qi">
        <div class="you_xia_qi_1">
          <span class="lan_box"></span>
          <div class="text">购买须知</div>
        </div>
        <div class="bom">请在有效期内使用，过期不能使用</div>
      </div>
      <div class="you_xiao_qi">
        <div class="you_xia_qi_1">
          <span class="lan_box"></span>
          <div class="text">充值规则</div>
        </div>
        <div class="bom">买5次赠送0次</div>
      </div>
      <div class="solid"></div>
      <div>
        <van-checkbox v-model="checked" shape="square" icon-size="16px">购买协议：请仔细阅读</van-checkbox>
      </div>
    </div>
    <div>
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
      checked: true,
      radio: 2
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  background-color: #f5f6f7;
  padding-bottom: 44px;
  height: 830px;
}
.kong {
    height: 44px;
}
.solid {
  border-bottom: #f5f6f7 solid 1px;
}
.hui_yuan_ka {
  background-color: #fff;
  margin-bottom: 10px;
  .hui_yuan {
    background: url("../../../assets/CiKa@2x.png") no-repeat;
    background-size: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 336px;
    height: 226px;
    padding-left: 15px;
    margin-bottom: 13px;
    .top {
      flex: 6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        width: 80px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .name_2 {
        width: 125px;
        height: 33px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 33px;
      }
    }
    .class {
      flex: 4;
      .class_1 {
        width: 39px;
        height: 18px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
      .class_2 {
        width: 45px;
        height: 20px;
        background: rgba(202, 230, 255, 1);
        text-align: center;
        border-radius: 2px;
        font-size: 11px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(24, 144, 255, 1);
        line-height: 20px;
      }
    }
  }
  .you_xiao_qi {
    display: flex;
    flex-direction: column;
    height: 50px;
    // margin-bottom: 10px;
    .you_xia_qi_1 {
      display: flex;
      .lan_box {
        height: 14px;
        width: 4px;
        background-color: #1890ff;
        margin-right: 8px;
      }
      .text {
        width: 70px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(92, 93, 102, 1);
        line-height: 14px;
      }
    }
    .bom {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 20px;
      margin-left: 15px;
    }
  }
  /deep/.van-checkbox {
    padding-left: 15px;
  }
  /deep/.van-checkbox__label {
    width: 130px;
    height: 40px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(24, 144, 255, 1);
    line-height: 40px;
  }
}
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

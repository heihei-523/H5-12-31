<template>
  <div class="app">
    <div class="member">
      <div class="member_1">
        <img src="../../../../assets/CiKa.png" alt />
      </div>
      <div class="member_right">
        <p>会员次卡</p>
        <span class="cardClass">卡类型</span>
        <div>
          <span>单次卡</span>
        </div>
      </div>
      <div class="zui_you">
        <div class="shi_ci">10次卡</div>
        <div class="money">￥325.00元</div>
      </div>
    </div>
    <!-- ------------------------------- -->
    <div class="member1">
      <div class="member_1">
        <img src="../../../../assets/qiXianKa.png" alt />
      </div>
      <div class="member_right">
        <p>会员期限卡</p>
        <span class="cardClass">卡类型</span>
        <div>
          <span>年卡</span>
        </div>
      </div>
      <div class="zui_you">
        <div class="nian_ka">年卡</div>
        <div class="money">￥2325.00元</div>
      </div>
    </div>
    <!-- ------------------------------------- -->
    <div class="member2">
      <div class="member_1">
        <img src="../../../../assets/chuZhiKa.png" alt />
      </div>
      <div class="member_right">
        <p>会员储值卡</p>
        <span class="cardClass">卡类型</span>
        <div>
          <span>会员储值卡</span>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------- -->
    <div class="member">
      <div class="member_1">
        <img src="../../../../assets/CiKa.png" alt />
      </div>
      <div class="member_right">
        <p>会员次卡</p>
        <span class="cardClass">卡类型</span>
        <div>
          <span>单次卡</span>
        </div>
      </div>
      <div class="zui_you">
        <div class="shi_ci">20次卡</div>
        <div class="money">￥325.00元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.app {
  background-color: #fff;
}
.nian_ka {
  text-align: right;
  height: 18px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(223, 151, 98, 1);
  line-height: 18px;
  flex: 4;
}
.zui_you {
  display: flex;
  flex-direction: column;
  .shi_ci {
    // width: 50px;
    text-align: right;
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(49, 102, 202, 1);
    line-height: 18px;
    flex: 4;
  }
  .money {
    text-align: right;
    width: 120px;
    height: 22px;
    font-size: 16px;
    font-family: SFProText-Medium, SFProText;
    font-weight: 500;
    color: rgba(250, 100, 0, 1);
    line-height: 19px;
    flex: 1;
  }
}
.member {
  display: flex;
  background-color: #fff;
  width: 360px;
  height: 90px;
  margin-left: 10px;
  margin-bottom: 15px;
  .member_1 {
    display: inline-block;
    width: 140px;
    height: 90px;
    img {
      width: 140px;
      height: 90px;
    }
  }
  .member_right {
    display: inline-block;
    margin-top: 4px;
    margin-left: 6px;
    height: 86px;
    width: 222px;
    p {
      display: block;
      margin: 1px 0;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      margin-bottom: 12px;
    }
    .cardClass {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(190, 192, 204, 1);
    }
    div {
      // display: block;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(24, 144, 255, 1);
      line-height: 16px;
      span {
        width: 45px;
        height: 20px;
        background: rgba(202, 230, 255, 1);
        margin-right: 5px;
        margin-right: 3px;
        border-radius: 2px;
      }
    }
  }
}
//-------------------------------------------------------------------------
.member1 {
  background-color: #fff;
  display: flex;
  width: 360px;
  height: 90px;
  margin-left: 10px;
  margin-bottom: 15px;
  .member_1 {
    display: inline-block;
    width: 140px;
    height: 90px;
    img {
      width: 140px;
      height: 90px;
    }
  }
  .member_right {
    display: inline-block;
    margin-top: 4px;
    margin-left: 6px;
    height: 86px;
    width: 222px;
    p {
      display: block;
      margin: 1px 0;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      margin-bottom: 12px;
    }
    .cardClass {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(190, 192, 204, 1);
    }
    div {
      display: block;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #fa6400;
      line-height: 16px;
      span {
        width: 45px;
        height: 20px;
        background: rgba(255, 214, 187, 1);
        margin-right: 5px;
        margin-right: 3px;
        border-radius: 2px;
      }
    }
  }
}
//------------------------------------------------------------------------//
.member2 {
  background-color: #fff;
  display: flex;
  width: 360px;
  height: 90px;
  margin-left: 10px;
  margin-bottom: 15px;
  .member_1 {
    display: inline-block;
    width: 140px;
    height: 90px;
    img {
      width: 140px;
      height: 90px;
    }
  }
  .member_right {
    display: inline-block;
    margin-top: 4px;
    margin-left: 6px;
    height: 86px;
    width: 222px;
    p {
      display: block;
      margin: 1px 0;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      margin-bottom: 12px;
    }
    .cardClass {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(190, 192, 204, 1);
    }
    div {
      display: block;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #5c5d66;
      line-height: 16px;
      span {
        width: 45px;
        height: 20px;
        background: #dedfe3;
        margin-right: 5px;
        margin-right: 3px;
        border-radius: 2px;
      }
    }
  }
}
//-------------------------------------------------------------------------
</style>

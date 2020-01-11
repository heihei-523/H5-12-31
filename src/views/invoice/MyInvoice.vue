<template>
  <div class="app">
    <van-nav-bar title="我的发票" fixed>
      <van-icon name="cross" slot="left" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="personal">
      <div class="top">
        <span class="left">2019/01/07 18:22</span>
        <span class="right">审核中</span>
      </div>
      <div class="bottom">
        <span class="zuo">个人发票</span>
        <span class="you">￥170.00</span>
      </div>
    </div>
    <div class="personal">
      <div class="top">
        <span class="left">2019/01/07 18:22</span>
        <span class="right">审核中</span>
      </div>
      <div class="bottom">
        <span class="zuo">个人发票</span>
        <span class="you">￥170.00</span>
      </div>
    </div>
    <div class="btn">
          <van-button type="primary" size="large" color="#1890ff">申请发票</van-button>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.app {
  background-color: #f5f6f7;
  height: 667px;
}
.kong {
  height: 44px;
  border-bottom: #f5f6f7 6px solid;
}
.personal {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  background-color: #fff;
  border-bottom: 1px #f5f6f7 solid;
  .top {
    display: flex;
    // padding: 8px 9px 8px 9px;
    padding: 9px 0;
    .left {
      height: 18px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 18px;
      flex: 8;
    }
    .right {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 18px;
      flex: 2;
    }
  }
  .bottom {
    display: flex;
    padding-bottom: 9px;
    .zuo {
      height:22px;
      font-size:16px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(46,47,51,1);
      line-height:22px;
      flex: 7;
    }
    .you {
      height:18px;
      font-size:18px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(250,100,0,1);
      line-height:18px;
      flex: 3;
    }
  }
}
.btn {
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    padding-top: 5px;
    .van-button {
        width:350px;
        height:40px;
        margin-left: 13px;
        border-radius: 4px;
    }
}
</style>

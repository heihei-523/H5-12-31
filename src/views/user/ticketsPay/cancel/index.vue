<template>
  <!-- 门票取消订单详情 -->
  <div>
    <div class="app">
      <van-nav-bar title="订单详情" fixed>
        <van-icon name="cross" slot="left" />
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div class="kong"></div>
      <div class="big">
        <div class="big1">
          <div class="wulan">乌兰察布体育馆</div>
          <div class="quxiao">已取消</div>
        </div>
        <div class="big2">内蒙古自治区乌兰察布市集宁区格根西街近乌兰察布图书馆</div>
      </div>
      <div class="piao_name">
        <div class="piao_name_1">羽毛球-散客单人票</div>
        <div class="piao_name_2">
          <div class="piao_name_2_1">门票类型</div>
          <div class="piao_name_2_2">成人票</div>
        </div>
        <div class="piao_name_2">
          <div class="piao_name_2_1">订单价格</div>
          <div class="piao_name_2_2">￥15.00元</div>
        </div>
        <div class="piao_name_2">
          <div class="piao_name_2_1">可用时间</div>
          <div class="piao_name_2_2">周一至周日可用 07:30-23:00</div>
        </div>
        <div class="piao_name_2">
          <div class="piao_name_2_1">有效日期</div>
          <div class="piao_name_2_2">2020年10月30日-2029年10月30日</div>
        </div>
        <div class="piao_name_2">
          <div class="piao_name_2_1">购买数量</div>
          <div class="piao_name_2_2">X1</div>
        </div>
      </div>
      <div class="bom">
        <div class="left">合计金额</div>
        <div class="right">￥325.00</div>
      </div>
      <!-- ---------------------------------------- -->
      <div class="order">
        <div class="order1">
          <span class="blue"></span>
          <span class="word">订单详情</span>
        </div>
        <div class="order2">
          <div class="gobuy">创建时间：</div>
          <div class="boll">2019/03/12 23:12:01</div>
        </div>
        <div class="order2">
          <div class="gobuy">支付时间：</div>
          <div class="boll">2020/10/30 23:12:01</div>
        </div>
      </div>
      <div class="an_niu">
        <div class="shi_fu">实付金额：</div>
        <div class="jin_e">352.00</div>
        <button>再次预定</button>
      </div>
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
  padding-bottom: 50px;
}
.kong {
  height: 54px;
  background-color: #f5f6f7;
}
.big {
  background-color: #fff;
  border-bottom: 1px solid #f5f6f7;
  .big1 {
    display: flex;
    justify-content: space-between;
    padding: 16px 12px 4px 10px;
    .wulan {
      flex: 7;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(46, 47, 51, 1);
      line-height: 22px;
    }
    img {
      width: 18px;
      height: 18px;
      margin-top: 3px;
      margin-right: 3px;
    }
    .quxiao {
      width: 48px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(138, 140, 153, 1);
      line-height: 22px;
      text-align: right;
    }
  }
  .big2 {
    width: 338px;
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 18px;
    padding-left: 10px;
    margin-bottom: 12px;
  }
}
.piao_name {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 1px solid #f5f6f7;
  padding: 15px 12px 0 12px;
  .piao_name_1 {
    width: 200px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 22px;
    margin-bottom: 9px;
  }
  .piao_name_2 {
    display: flex;
    .piao_name_2_1 {
      width: 56px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 20px;
      margin-bottom: 5px;
      margin-right: 4px;
    }
    .piao_name_2_2 {
      width: 250px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(46, 47, 51, 1);
      line-height: 20px;
    }
  }
}
.bom {
  display: flex;
  height: 44px;
  align-items: center;
  background-color: #fff;
  padding: 0 12px;
  .left {
    height: 22px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 22px;
    flex: 5;
  }
  .right {
    width: 71px;
    height: 22px;
    font-size: 16px;
    font-family: SFProText-Medium, SFProText;
    font-weight: 500;
    color: rgba(250, 100, 0, 1);
    line-height: 19px;
    text-align: right;
    flex: 5;
  }
}
.order {
  border-top: 10px solid rgb(248, 246, 246);
  background-color: #fff;
  .order1 {
    margin-top: 6px;
    // padding-bottom: 4px;
    .blue {
      display: inline-block;
      width: 4px;
      height: 14px;
      background: rgba(24, 144, 255, 1);
      vertical-align: middle;
    }
    .word {
      width: 98px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      margin-left: 8px;
    }
  }
  .order2 {
    display: flex;
    justify-content: space-between;
    // padding: 4px 12px 12px 12px;
    padding-left: 12px;
    padding-right: 12px;
    .gobuy {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 20px;
      margin-top: 5px;
    }
    .boll {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(46, 47, 51, 1);
      line-height: 20px;
    }
  }
}
.an_niu {
  position: fixed;
  bottom: 0;
}
</style>

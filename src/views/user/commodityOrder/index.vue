<template>
  <div>
    <!-- 购买门票 -->
    <div>
      <van-nav-bar title="商品订单">
        <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
        <van-icon name="ellipsis"
                  slot="right" />
      </van-nav-bar>
    </div>
    <div class="order">
      <div class="order1">
        <span class="blue"></span>
        <span class="word">乌兰察布体育馆</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买商品</span>
        <span class="boll">羽毛球拍</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买数量</span>
        <span class="boll">X2</span>
      </div>
      <div class="order2">
        <span class="gobuy">订单金额</span>
        <span class="boll">￥500.00元</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买时间</span>
        <span class="boll">2020.02.02 12:02:23</span>
      </div>
      <div class="order2 papa">
        <span class="gobuy">支付方式</span>
        <span class="boll">微信支付</span>
      </div>
    </div>
    <!-- 11111111111111111111111111 -->
    <div class="order">
      <div class="order1">
        <span class="blue"></span>
        <span class="word">乌兰察布体育馆</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买商品</span>
        <span class="boll">羽毛球拍</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买数量</span>
        <span class="boll">X2</span>
      </div>
      <div class="order2">
        <span class="gobuy">订单金额</span>
        <span class="boll">￥500.00元</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买时间</span>
        <span class="boll">2020.02.02 12:02:23</span>
      </div>
      <div class="order2 papa">
        <span class="gobuy">支付方式</span>
        <span class="boll">现金支付</span>
      </div>
    </div>
    <!-- 222222222222222 -->
    <div class="order">
      <div class="order1">
        <span class="blue"></span>
        <span class="word">乌兰察布体育馆</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买商品</span>
        <span class="boll">羽毛球拍</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买数量</span>
        <span class="boll">X2</span>
      </div>
      <div class="order2">
        <span class="gobuy">订单金额</span>
        <span class="boll">￥500.00元</span>
      </div>
      <div class="order2">
        <span class="gobuy">购买时间</span>
        <span class="boll">2020.02.02 12:02:23</span>
      </div>
      <div class="order2 papa">
        <span class="gobuy">支付方式</span>
        <span class="boll">银行卡支付</span>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
export default {

}
</script>

<style lang="less" scoped>
.order {
  border-top: 10px solid rgb(248, 246, 246);
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
    padding-left: 12px;
    // margin-top: 8px;
    .gobuy {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 20px;
    }
    .boll {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(46, 47, 51, 1);
      line-height: 20px;
      margin-left: 4px;
    }
  }
}
.papa {
  padding-bottom: 12px;
}
</style>

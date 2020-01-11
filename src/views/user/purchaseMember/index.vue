<template>
  <div class="app">
    <van-nav-bar title="购买会员卡" fixed>
      <van-icon name="cross" slot="left" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="top">
      <div class="lei_xing">卡类型</div>
      <div class="lei_xing_1">
        <div
          v-for="item in cardClass"
          :key="item"
          class="nohighlight"
          :class="{highlight: active==item}"
          @click="onHighlight(item)"
        >{{item}}</div>
      </div>
      <div class="ka_name">卡名称</div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="3万卡" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell title="5万卡" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" />
          </van-cell>
          <van-cell title="10万卡" clickable @click="radio = '3'">
            <van-radio slot="right-icon" name="3" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="order">
      <div class="order1">
        <span class="blue"></span>
        <span class="word">会员卡介绍</span>
      </div>
      <div class="order2">
        <div class="gobuy">充值规则</div>
        <div class="boll">充值3万赠送1万</div>
      </div>
      <div class="order2">
        <div class="gobuy">消费折扣</div>
        <div class="boll">开卡享7折会员优惠</div>
      </div>
      <div class="order2">
        <div class="gobuy">适用门店</div>
        <div class="boll">乌兰察布体育馆</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 1,
      cardClass: ['储值卡', '储次卡', '期限卡'],
      active: ''
    }
  },
  methods: {
    onHighlight (item) {
      this.active = item
    }
  }
}
</script>

<style lang="less" scoped>
.nohighlight {
  width: 100px;
  height: 55px;
  background: #f5f6f7;
  border-radius: 6px;
  border: 2px solid #e5e5e5;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #5c5d66;
  line-height: 55px;
  text-align: center;
}
.app {
  background-color: #f5f6f7;
  height: 667px;
}
.kong {
  background-color: #fff;
  height: 60px;
}
.top {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 12px;
  .lei_xing {
    width: 49px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 22px;
    margin-bottom: 7px;
  }
  .lei_xing_1 {
    display: flex;
    justify-content: space-around;
    margin-bottom: 17px;
    .highlight {
      width: 100px;
      height: 55px;
      background: rgba(188, 223, 255, 1);
      border-radius: 6px;
      border: 2px solid rgba(24, 144, 255, 1);
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(24, 144, 255, 1);
      line-height: 55px;
      text-align: center;
    }
  }
  .ka_name {
    width: 49px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 22px;
  }
}
.van-radio-group {
  margin-top: 9px;
  .van-cell__title {
    span {
      font-size: 16px;
      font-family: SFProDisplay-Medium, SFProDisplay;
      font-weight: 500;
      color: rgba(24, 144, 255, 1);
      line-height: 19px;
    }
  }
}
.order {
  border-top: 10px solid rgb(248, 246, 246);
  background-color: #fff;
  padding-bottom: 20px;
  .order1 {
    margin-top: 6px;
    border-bottom: #f5f6f7 1px solid;
    margin-bottom: 9px;
    .blue {
      display: inline-block;
      width: 4px;
      height: 14px;
      background: rgba(24, 144, 255, 1);
      vertical-align: middle;
    }
    .word {
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
    // justify-content: space-between;
    // padding: 4px 12px 12px 12px;
    padding-left: 12px;
    padding-right: 12px;
    // margin-bottom: 7px;
    padding-bottom: 7px;
    .gobuy {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 20px;
      margin-right: 6px;
      //   margin-top: 5px;
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
</style>

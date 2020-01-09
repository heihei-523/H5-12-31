<template>
  <div>
    <div>
      <van-nav-bar title="订单详情">
        <van-icon name="cross"
                  slot="left" />
        <van-icon name="ellipsis"
                  slot="right" />
      </van-nav-bar>
    </div>
    <!-- 已取消、 -->
    <div class="big">
      <div class="big1">
        <div class="wulan">乌兰察布体育馆</div>
        <div class="quxiao">已取消</div>
      </div>
      <div class="big2">内蒙古自治区乌兰察布市集宁区格根西街近乌兰察布图书馆</div>
    </div>
    <!-- gang -->
    <div class="gang"></div>
    <!-- 卡片 -->
    <div class="boss">
      <div>
        <span class="yumao">羽毛球</span>
        <span class="yumao1">周日(03/13)</span>
      </div>
      <div class="first pad">
        <div class="first1">
          <span>第1号场地 12:00 -14:00</span>
        </div>
        <div class="first2">
          <span>￥100.00</span>
        </div>
      </div>
      <div class="first">
        <div class="first1">
          <span>第1号场地 12:00 -14:00</span>
        </div>
        <div class="first2">
          <span>￥100.00</span>
        </div>
      </div>
      <div class="third">
        <span>温馨提示：预定成功后不支持退款，如有疑问请咨询客服</span>
      </div>
    </div>
    <div class="money">
      <div>
        <span>合计金额：</span>
      </div>
      <div>
        <p>¥325.00元</p>
      </div>
    </div>
    <div class="yinying"></div>
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
        <div class="gobuy">取消时间：</div>
        <div class="boll">2020/10/30 23:12:01</div>
      </div>
    </div>
    <div class="an_niu">
      <div class="shi_fu">实付金额：</div>
      <div class="jin_e">352.00</div>
      <button>再次预定</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.big {
  border-top: 10px solid rgb(248, 246, 246);
  .big1 {
    display: flex;
    justify-content: space-between;
    padding: 16px 12px 4px 10px;
    .wulan {
      width: 114px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(46, 47, 51, 1);
      line-height: 22px;
    }
    .quxiao {
      width: 48px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(138, 140, 153, 1);
      line-height: 22px;
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
.yumao {
  width: 49px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(46, 47, 51, 1);
  line-height: 22px;
}
.yumao1 {
  width: 65px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(125, 125, 125, 1);
  line-height: 17px;
  margin-left: 8px;
}
.first {
  display: flex;
  justify-content: space-between;
  .first1 {
    width: 154px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 20px;
  }
  .first2 {
    width: 57px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(46, 47, 51, 1);
    line-height: 20px;
  }
}
.third {
  span {
    width: 275px;
    height: 16px;
    font-size: 11px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 77, 79, 1);
    line-height: 16px;
    margin-top: 8px;
  }
}
.boss {
  padding: 2px 13px 8px 12px;
  border-bottom: 0.5px solid rgb(243, 239, 239);
}
.pad {
  margin-top: 8px;
  margin-bottom: 4px;
}
.money {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  span {
    width: 70px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
  }
  p {
    width: 83px;
    height: 22px;
    font-size: 16px;
    font-family: SFProText-Medium, SFProText;
    font-weight: 500;
    color: rgba(250, 100, 0, 1);
    line-height: 19px;
  }
}
.yinying {
  width: 375px;
  height: 9px;
  background-color: rgb(248, 245, 245);
}
.gang {
  width: 351px;
  height: 1px;
  background: rgba(229, 229, 229, 1);
  margin: auto;
}
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
</style>

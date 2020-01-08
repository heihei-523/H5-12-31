<template>
  <div>
    <!-- 场地预定 -->
    <div>
      <van-nav-bar title="场地预定">
        <van-icon name="cross"
                  slot="left" />
        <van-icon name="ellipsis"
                  slot="right" />
      </van-nav-bar>
    </div>

    <!-- 地址 -->
    <van-cell-group>
      <van-cell title="乌兰察布体育馆"
                label="内蒙古自治区乌兰察布市集宁区格根西街近乌" />
    </van-cell-group>
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
        <span>温馨提示：预定成功后不支持退款，如有疑问</span>
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
    <van-cell-group>
      <van-field required
                 clearable
                 label="手机号码"
                 placeholder="请填写手机号方便核验" />

      <van-field label="客户姓名"
                 placeholder="请填写用户姓名" />
    </van-cell-group>
  </div>
</template>

<script>
// import moment from 'moment'
export default {

}
</script>

<style lang="less" scoped>
.van-cell__title span {
  width: 114px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(46, 47, 51, 1);
  line-height: 22px;
  .van-cell__label {
    width: 338px;
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 18px;
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
  padding: 15px 13px 8px 12px;
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
</style>

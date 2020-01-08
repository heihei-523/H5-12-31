<template>
  <div>
    <!-- 购买门票 -->
    <div>
      <van-nav-bar title="购买门票">
        <van-icon name="cross"
                  slot="left" />
        <van-icon name="ellipsis"
                  slot="right" />
      </van-nav-bar>
    </div>
    <div class="nav">
      <div class="nav1">
        <span class="bb">可用时间： 07:30-23:00</span>
        <span>羽毛球-闪客单人票</span>
        <div class="aa">
          <span>￥80.00</span>
          <del>￥100.00</del>
        </div>
      </div>
      <div class="nav2">
        <div>购买单次票</div>
      </div>
    </div>
    <div class="nav">
      <div class="nav1">
        <span class="bb">可用时间： 07:30-23:00</span>
        <span>羽毛球-闪客单人票</span>
        <div class="aa">
          <span>￥80.00</span>
          <del>￥100.00</del>
        </div>
      </div>
      <div class="nav2">
        <div>购买单次票</div>
      </div>
    </div>
    <div class="nav">
      <div class="nav1">
        <span class="bb">可用时间： 07:30-23:00</span>
        <span>羽毛球-闪客单人票</span>
        <div class="aa">
          <span>￥80.00</span>
          <del>￥100.00</del>
        </div>
      </div>
      <div class="nav2">
        <div>购买单次票</div>
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
.nav {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-top: 8px solid rgb(243, 241, 241);
  .nav1 {
    .bb {
      width: 124px;
      display: block;
      height: 16px;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 16px;
    }
    span {
      width: 138px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 22px;
    }

    .aa {
      margin-top: 8px;
      span {
        width: 52px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(250, 100, 0, 1);
        line-height: 20px;
        margin-right: 5px;
      }
      del {
        width: 45px;
        height: 16px;
        font-size: 11px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(190, 192, 204, 1);
        line-height: 16px;
      }
    }
  }
  .nav2 div {
    margin-top: 30px;
    width: 70px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(24, 144, 255, 1);
    line-height: 20px;
    padding: 5px 20px;
    border: 0.5px solid #1890ff;
    border-radius: 30px;
  }
}
</style>

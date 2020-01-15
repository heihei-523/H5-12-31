<template>
  <div>
    <van-nav-bar title="我的会员卡" fixed>
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="xiang_dui">
      <div class="tu_pian">
        <img src="../../../assets/chuZhiKa@2x.png" alt />
      </div>
      <div class="MembershipCard">
        <div class="Cardname">储值卡</div>
        <div class="row_2">
          <div class="row_2_1">动网储值卡3万</div>
          <div class="row_2_2">充值</div>
        </div>
        <div class="row_3">余额:</div>
        <div class="row_4">
          <div class="money">￥88.00元</div>
          <div class="right">
            <div class="ji_lu">消费记录</div>
            <div class="min_tu">
              <img src="../../../assets/icon_xfjl.png" alt />
            </div>
          </div>
        </div>
        <div class="card_id">2207 2449 8879 0003</div>
      </div>
    </div>
    <!--  -->
    <div class="xiang_dui">
      <div class="tu_pian">
        <img src="../../../assets/ci_ka@2x .png" alt />
      </div>
      <div class="MembershipCard">
        <div class="Cardname">次卡</div>
        <div class="row_2">
          <div class="row_2_1">动网80次卡</div>
        </div>
        <div class="row_3">余次</div>
        <div class="row_4">
          <div class="money">45次</div>
          <div class="right">
            <div class="ji_lu">消费记录</div>
            <div class="min_tu">
              <img src="../../../assets/icon_xfjl.png" alt />
            </div>
          </div>
        </div>
        <div class="card_id">2207 2449 8879 0003</div>
      </div>
    </div>
    <!--  -->
    <div class="xiang_dui">
      <div class="tu_pian">
        <img src="../../../assets/qi_xian_ka@2x.png" alt />
      </div>
      <div class="MembershipCard">
        <div class="Cardname">次卡</div>
        <div class="row_2">
          <div class="row_2_1">动网80次卡</div>
        </div>
        <div class="row_3">到期时间：</div>
        <div class="row_4">
          <div class="money">2021.09.07日到期</div>
          <div class="right">
            <div class="ji_lu">消费记录</div>
            <div class="min_tu">
              <img src="../../../assets/icon_xfjl.png" alt />
            </div>
          </div>
        </div>
        <div class="card_id">2207 2449 8879 0003</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.kong {
  height: 60px;
}
.xiang_dui {
  position: relative;
  margin-bottom: 15px;
}
.tu_pian {
  width: 351px;
  height: 226px;
  margin: 0 auto;
  img {
    width: 351px;
    height: 226px;
  }
}
.MembershipCard {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 19px;
  left: 34px;
  .Cardname {
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
  .row_2 {
    display: flex;
    margin-bottom: 17px;
    .row_2_1 {
        width: 250px;
      height: 25px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }
    .row_2_2 {
      width: 68px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 15px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      text-align: center;
      line-height: 30px;
      color: rgba(24, 144, 255, 1);
    }
  }
  .row_3 {
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .row_4 {
    display: flex;
    align-items: center;
    .money {
      height: 33px;
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
    }
    .right {
        display: flex;
        width: 90px;
        height: 26px;
        background:rgba(255,255,255,0.58);
        border-radius: 26px;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
      .ji_lu {
        width: 56px;
        height: 26px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 26px;
      }
      .min_tu {
          height: 26px;
          line-height: 26px;
        img {
          height: 16px;
          width: 16px;
        }
      }
    }
  }
  .card_id {
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
    margin-top: 35px;
  }
}
</style>

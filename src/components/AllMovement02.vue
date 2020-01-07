<template>
  <div>
    <div class="goupiao">
      <div class="picture">
        <img src="../assets/banner.png" alt />
        <div class="lucency">
          <div class="lanqiu">
            <p>乌兰察布市体育馆</p>
            <span>篮球</span>
          </div>
          <div class="distance">
            <span>1.8km</span>
            <div>内蒙古自治区乌兰察布市集宁区格根西街</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <van-button plain hairline type="primary">预定</van-button>
        <van-button plain hairline type="primary">购票</van-button>
      </div>
    </div>
    <div class="goupiao">
      <div class="picture">
        <img src="../assets/banner.png" alt />
        <div class="lucency">
          <div class="lanqiu">
            <p>乌兰察布市体育馆</p>
            <span>篮球</span>
          </div>
          <div class="distance">
            <span>1.8km</span>
            <div>内蒙古自治区乌兰察布市集宁区格根西街</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <van-button plain hairline type="primary">预定</van-button>
        <van-button plain hairline type="primary">购票</van-button>
      </div>
    </div>
    <div class="goupiao">
      <div class="picture">
        <img src="../assets/banner.png" alt />
        <div class="lucency">
          <div class="lanqiu">
            <p>乌兰察布市体育馆</p>
            <span>篮球</span>
          </div>
          <div class="distance">
            <span>1.8km</span>
            <div>内蒙古自治区乌兰察布市集宁区格根西街</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <van-button plain hairline type="primary">预定</van-button>
        <van-button plain hairline type="primary">购票</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.movement {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    height: 60px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
.picture {
  position: relative;
  text-align: center;
//   margin-top: -5px;
  img {
    width: 350px;
    height: 150px;
    border-radius: 5px;
  }
  .lucency {
    position: absolute;
    border-radius: 0 0 5px 5px;
    bottom: 6px;
    left: 13px;
    display: flex;
    padding: 8px;
    flex-direction: column;
    width: 333px;
    height: 46px;
    background: rgba(0, 0, 0, 0.3);
    // background-color: #000;
    .lanqiu {
      display: flex;
      // margin-bottom: 3px;
      p {
        margin: 0;
        padding: 0;
        width: 144px;
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
      span {
        display: inline-block;
        margin: 4px 0 0 8px;
        width: 34px;
        font-size: 11px;
        height: 20px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 2px;
        opacity: 0.5;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 20px;
      }
    }
    .distance {
      display: flex;
      span {
        display: inline-block;
        font-family: PingFangSC-Regular, PingFan;
        color: rgba(255, 255, 255, 1);
        margin: 4px 0 0 0;
        width: 34px;
        font-size: 11px;
        height: 20px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 9px;
        opacity: 0.5;
        text-align: center;
        line-height: 20px;
      }
      div {
        width: 234px;
        height: 18px;
        margin: 4px 0 0 8px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
    }
  }
}
.goupiao {
    position: relative;
    margin-top: 18px;
    margin-bottom: 43px;
}
.btn {
  padding-left: 12px;
  position: absolute;
  top: 147px;
}
.van-button--plain.van-button--primary {
  width: 175px;
  color: #1890ff;
  border: #e5e5e5 0.3px solid;
}
</style>

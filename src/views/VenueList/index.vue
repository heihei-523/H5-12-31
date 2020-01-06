<template>
    <!-- 场馆列表 -->
  <div>
      <van-nav-bar
        title="乌兰察布体育馆"
        @click-left="onClickLeft"
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <div class="beiJingf">
            <!-- <span>

            </span> -->
            <span class="beiJing">
                <img src="../../assets/icon_location.png" alt="">
                <a href="#">北京市</a>
                 <img src="../../assets/icon_dropdown.png" alt="">
            </span>
            <!-- <span>
                <img src="../../assets/icon_dropdown.png" alt="">
            </span> -->
      </div>
      <div>
        <img src="../../assets/banner.png" alt="" class="t2">
      </div>
      <van-tabs v-model="active" type="card" title-active-color="#1890FF" title-inactive-color="#fff" :swipe-threshold="5">
        <van-tab title="羽毛球">羽毛球</van-tab>
        <van-tab title="篮球">篮球</van-tab>
        <van-tab title="游泳">游泳</van-tab>
        <van-tab title="网球">网球</van-tab>
        <van-tab title="全部 >" to="/venueList/allMovement" replace></van-tab>
      </van-tabs>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 2
    }
  },
  methods: {
    onClickLeft () {

    }
  }
}
</script>

<style lang="less" scoped>
.beiJingf {
    padding-left: 10px;
    .beiJing {
        display: flex;
        display: inline-block;
        color: #8A8C99;
        font-size: 14px;
        // vertical-align: middle;
        align-items: flex-start;
        width: 200px;
        a {
            color: #8A8C99;
        }
    }
}
/deep/.van-tabs__wrap {
    position: absolute;
    top: -36px;
    left: 10px;
    width: 351px;
}
/deep/.van-tabs__nav {
    background:rgba(71,71,71,0);
    height: 34px;
    border: none;
}
/deep/.van-tabs__nav--card .van-tab.van-tab--active {
    color: #fff;
    background-color: #fff;
}
/deep/.van-tabs__wrap .van-tab {
    background:rgba(71,71,71,0.6);
    height: 34px;
    width: 75px;
    border-radius: 7px 7px 0 0;
    .van-tab__text {
        text-align: center;
        font-size: 14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        // color:rgba(255,255,255,1);
        line-height:14px;
    }
}
/deep/.van-tabs__nav--card .van-tab {
    line-height: 0.74667rem;
    border-right: none;
}
</style>

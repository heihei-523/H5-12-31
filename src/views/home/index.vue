<template>
  <!-- 首页 -->
  <div>
    <van-nav-bar title="乌兰察布体育馆" @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="contact"  slot="right" size="21" color="#5c5d66"/>
        <!-- <van-icon name="ellipsis"  size="24"/> -->
    </van-nav-bar>
    <div class="beiJingf">
      <span class="beiJing">
        <img src="../../assets/icon_location.png" alt class="image" />
        <a href="#">北京市</a>
        <img src="../../assets/icon_dropdown.png" alt class="image" />
      </span>
    </div>
    <div>
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white" :height="200">
        <van-swipe-item>
          <img src="../../assets/banner.png" class="img" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/banner.png" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- tabl栏 -->
    <div>
      <van-tabs
        v-model="active"
        type="card"
        title-active-color="#1890FF"
        title-inactive-color="#fff"
        :swipe-threshold="5"
      >
        <van-tab to="/">
          <div slot="title" @click="onBall">羽毛球</div>
        </van-tab>
        <van-tab to="/">
          <div slot="title" @click="onBall">篮球</div>
        </van-tab>
        <van-tab to="/">
          <div slot="title" @click="onBall">游泳</div>
        </van-tab>
        <van-tab to="/">
          <div slot="title" @click="onBall">网球</div>
        </van-tab>
        <van-tab to="/">
          <div slot="title" @click="onAll">全部</div>
        </van-tab>
      </van-tabs>
    </div>
    <div v-if="show">
      <div class="movement">
        <div>
          <img src="../../assets/gao_er_fu.png" alt />
          <span>羽毛球</span>
        </div>
        <div>
          <img src="../../assets/gao_er_fu.png" alt />
          <span>篮球</span>
        </div>
        <div>
          <img src="../../assets/gao_er_fu.png" alt />
          <span>游泳</span>
        </div>
        <div>
          <img src="../../assets/gao_er_fu.png" alt />
          <span>网球</span>
        </div>
        <div>
          <img src="../../assets/gao_er_fu.png" alt />
          <span>乒乓球</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { one } from '@/api/mock'
// import Slideshow from "../../components/slideshow"; // 轮播图
// import HomeTabs from "../../components/HomeTabs"; // tabl栏
// import All from "../../components/All";
export default {
  // components: {
  //   All,
  //   Slideshow,
  //   HomeTabs
  // },
  name: 'home',
  data () {
    return {
      active: 0,
      // barBackground: false,
      venueInfo: {}, // 场地信息
      sportName: [], // 运动名称
      show: false
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    async onLoad () {
      const res = await one()
      //   console.log(res)
      this.venueInfo = res.data.venueInfo
      this.sportName = this.venueInfo.sportName.split(',')
    },
    onAll () {
      this.show = true
    },
    onBall () {
      this.show = false
    },
    onClickLeft () {}
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  // position: relative;
  height: 164px;
}
.img {
  width: 100%;
}
/deep/.van-swipe__indicator {
  width: 16px;
  border-radius: 0;
  height: 4px;
  margin-bottom: 25px;
}
.beiJingf {
  padding-left: 10px;
  .beiJing {
    display: flex;
    display: inline-block;
    color: #8a8c99;
    font-size: 14px;
    align-items: flex-start;
    width: 200px;
    img {
      width: 16px;
      height: 16px;
    }
    a {
      color: #8a8c99;
    }
  }
}
/deep/.van-tabs__wrap {
  position: absolute;
  top: -33px;
  left: 10px;
  width: 351px;
  background: rgba(71, 71, 71, 0);
  .van-tabs__nav--card {
    background: rgba(71, 71, 71, 0);
    border: 0;
  }
  .van-tab {
    width: 70px;
    height: 34px;
    background: rgba(71, 71, 71, 0.6);
    border-radius: 8px 8px 0 0;
    border: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 34px;
  }
}
/deep/.van-tabs__nav--card .van-tab.van-tab--active {
  background-color: #fff;
}
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
</style>

<template>
    <!-- 首页 -->
  <div>
      <van-nav-bar
        title="乌兰察布体育馆"
        @click-left="onClickLeft"
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <div class="beiJingf">
            <span class="beiJing">
                <img src="../../assets/icon_location.png" alt="" class="image">
                <a href="#">北京市</a>
                 <img src="../../assets/icon_dropdown.png" alt="" class="image">
            </span>
      </div>
      <div>
        <!-- 轮播图 -->
        <Slideshow></Slideshow>
      </div>
      <!-- tabl栏 -->
      <HomeTabs  @onAll="onAll" @ball="onball"></HomeTabs>
      <All v-if="show"></All>
      <router-view></router-view>
  </div>
</template>

<script>
import { one } from '@/api/mock'
import Slideshow from '../../components/slideshow' // 轮播图
import HomeTabs from '../../components/HomeTabs' // tabl栏
import All from '../../components/All'
export default {
  components: {
    All,
    Slideshow,
    HomeTabs
  },
  name: 'home',
  data () {
    return {
      // active: 0,
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
    onAll (show) {
      this.show = show
    },
    onball (hide) {
      this.show = hide
    },
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
        align-items: flex-start;
        width: 200px;
        img {
          width: 16px;
          height: 16px;
        }
        a {
            color: #8A8C99;
        }
    }
}
/deep/.van-tabs__wrap {
    position: absolute;
    top: -33px;
    left: 10px;
    width: 351px;
    background:rgba(71,71,71,0);
    .van-tabs__nav--card {
      background:rgba(71,71,71,0);
      border: 0;
    }
    .van-tab {
      width: 70px;
      height: 34px;
      background:rgba(71,71,71,0.6);
      border-radius: 8px 8px 0 0;
      border: 0;
      font-size:14px;
      font-weight:400;
      line-height:34px;
    }
}
/deep/.van-tabs__nav--card .van-tab.van-tab--active {
    background-color: #fff;
}
</style>

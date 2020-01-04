<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" :height="200">
        <van-swipe-item>
            <img :src="venueInfo.imgs" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img :src="venueInfo.signImg" alt="">
        </van-swipe-item>
        <!-- <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item> -->
    </van-swipe>
    <!-- tab栏切换 -->
    <!-- <div class="tabBackground"> -->
        <van-tabs
          type="card"
          v-model="active"
          background="#000"
          title-inactive-color="#fff"
          title-active-color="#fff"
          :swipe-threshold="5"
        >
            <van-tab
              :title="item"
              v-for="(item, index) in sportName"
              :key="index"
              :class="{barBackground:(active===index)}"
            >
            羽毛球
            </van-tab>
        </van-tabs>
        <!-- <van-tabbar
            v-model="active"
            :fixed="false"
        >
            <van-tabbar-item
                to="/"
                :class="{barBackground:(active==0)}"
            >羽毛球</van-tabbar-item>
            <van-tabbar-item
                to="/basketball"
                :class="{barBackground:(active==1)}"
            >篮球</van-tabbar-item>
            <van-tabbar-item
                to="/swim"
                :class="{barBackground:(active==2)}"
            >游泳</van-tabbar-item>
            <van-tabbar-item
                :class="{barBackground:(active==3)}"
            >网球</van-tabbar-item>
            <van-tabbar-item
                :class="{barBackground:(active==4)}"
            >全部</van-tabbar-item>
        </van-tabbar> -->
    </div>
  <!-- </div> -->
</template>

<script>
import { one } from '@/api/mock'
export default {
  name: 'Tabbar',
  data () {
    return {
      active: 0,
      barBackground: false,
      venueInfo: {}, // 场地信息
      sportName: [] // 运动名称
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    // 掉的第一个接口，首页加载
    async onLoad () {
      const res = await one()
      //   console.log(res)
      this.venueInfo = res.data.venueInfo
      this.sportName = this.venueInfo.sportName.split(',')
    }
  }
}
</script>

<style scoped lang="less">
    // .tabBackground {
    //         height: 35px;
    //         background-color: #000;
    //         position: relative;
    //         .van-hairline--top-bottom {
    //             background-color: #000;
    //             border-radius: 35px 0 0 0;
    //             width: 300px;
    //             // box-sizing: border-box;
    //             margin: 0 auto;
    //             position: absolute;
    //             bottom: 0;
    //             left: 50%;
    //             transform: translate(-50%, 0);
    //             //  transform: skewX(-20deg);
    //         }
    // }
    // /deep/ .van-tabbar-item {
    //     // width: 30px;
    //     overflow: hidden;
    //     background-color: #000;
    //     border:1px solid #1abc9c;
    //     transform: skewX(-20deg);

    //     .van-tabbar-item__text {
    //     transform: skewX(20deg);
    //     // background-color: #000;
    //     color: #fff;
    //     }
    // }
  //   /deep/.barBackground {
  //   background-color: #1abc9c;
  // }
  /deep/.van-tabs__wrap {
    background-color: #000;
  }
  /deep/.van-tabs__wrap .van-tabs__nav--card .van-tab.van-tab--active {
    color: #fff;
    background-color: #1abc9c;
    border: #1abc9c 1px solid;
    position: relative;
  }
  /deep/.van-tabs__wrap .van-tabs__nav--card {
    height: 40px;
    box-sizing: border-box;
    margin: 0 37px;
    border: 1px solid #1abc9c;
    transform: skewX(-20deg);
    position: absolute;
    bottom: 32px;
    width: 80%;
  }
  /deep/.van-tabs__nav--card .van-tab {
    // height: 50px;
    border-bottom: 1px solid #1abc9c;
    border-right: #1abc9c 1px solid;
    // transform: skewX(-20deg);
    span {
      display: block;
      transform:skew(20deg);
      line-height: 40px;
    }
  }
</style>

<template>
  <div>
    <!-- 标题头部 -->
    <van-nav-bar title="场地预定" @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="cross" slot="left" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <!-- 星期栏 -->
    <van-tabs v-model="active" title-active-color="#1890FF" :swipe-threshold="7">
        <van-tab title="今天">
          <div title></div>
        </van-tab>
        <van-tab title="周二"></van-tab>
        <van-tab title="周三"></van-tab>
        <van-tab title="周四"></van-tab>
        <van-tab title="周五"></van-tab>
        <van-tab title="周六"></van-tab>
        <van-tab title="周日"></van-tab>
    </van-tabs>
    <!-- <van-tabs v-model="active" swipeable>
        <van-tab v-for="index in 10" :title="'选项 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
    </van-tabs>-->
  </div>
</template>

<script>
// import tableA from '@/components/table'
import { GroundBlock } from '../../api/mock'
export default {
  name: 'place',
  // components: {
  //   tableA
  // },
  data () {
    return {
      targetDate: new Date().getDate(), // 获取当前天
      targetMonth: new Date().getMonth(), // 获取当前月份
      targetgetDay: new Date().getDay(), // 获取当前星期
      active: 0,
      placeList: []
    }
  },
  created () {
    this.onload()
  },
  methods: {
    onClickLeft () {
      // navbar 返回
    },
    onClickRight () {
      // navbar 菜单
    },
    async onload () {
      const res = await GroundBlock()
      console.log(res)
      this.placeList = res.data.itemList
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.van-tabs--line {
  .van-tab__text {
    font-size: 14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
  }
  .van-tabs__line {
    background-color: #1890FF;
  }
}
</style>

<template>
  <div class="app">
    <van-nav-bar title="会员卡列表" fixed>
      <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <van-tabs v-model="active" color="#1890FF" title-active-color="#1890FF">
      <van-tab title="全部" to='/cardList/list' replace></van-tab>
      <van-tab title="储值卡"></van-tab>
      <van-tab title="期限卡"></van-tab>
      <van-tab title="次卡"></van-tab>
    </van-tabs>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.app {
    background-color: #f5f6f7;
}
.kong {
    height: 45px;
}
.van-tab__pane {
    padding: 0px 0 12px 0;
    background-color: #fff;
    margin-top: 7px;
}
</style>

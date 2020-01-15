<template>
  <div>
    <div class="app">
      <van-nav-bar title="我的门票" fixed>
        <van-icon name="arrow-left" slot="left" color="#5c5d66" size="21"/>
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div class="kong"></div>
      <van-tabs v-model="active" color="#1890FF" title-active-color="#1890FF" sticky>
        <van-tab title="全部" to="/myTickets/list" replace></van-tab>
        <van-tab title="未使用"></van-tab>
        <van-tab title="已使用"></van-tab>
      </van-tabs>
      <div class="kong_2"></div>
      <router-view></router-view>
    </div>
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
  height: 812px;
}
/deep/.van-tabs {
    position: fixed;
    width: 100%;
}
.kong {
  height: 45px;
  background-color: #fff;
}
.kong_2 {
  height: 55px;
}
.van-tab__pane {
  // padding: 0px 0 12px 0;
  background-color: #f5f6f7;
  // margin-top: 7px;
}
</style>

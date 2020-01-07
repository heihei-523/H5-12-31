<template>
  <div>
      <van-tabs v-model="active" type="card" title-active-color="#1890FF" title-inactive-color="#fff" :swipe-threshold="5">
        <van-tab title="羽毛球" to="/home/allMovement02"></van-tab>
        <van-tab title="篮球" to="/home/allMovement02"></van-tab>
        <van-tab title="游泳" to="/home/allMovement02"></van-tab>
        <van-tab title="网球" to="/home/allMovement02"></van-tab>
        <van-tab title="全部 >" to="/home/allMovement" replace></van-tab>
      </van-tabs>
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

<style>

</style>

<template>
  <van-swipe :autoplay="3000" indicator-color="white" :height="200">
    <van-swipe-item>
      <img src="../assets/banner.png" class="img" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../assets/banner.png" class="img" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
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
</style>

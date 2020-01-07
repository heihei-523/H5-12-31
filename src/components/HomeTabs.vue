<template>
  <div>
      <van-tabs
        v-model="active"
        type="card"
        title-active-color="#1890FF"
        title-inactive-color="#fff"
        :swipe-threshold="5"
      >
        <van-tab to="/">
          <div slot="title"  @click="ball">
            羽毛球
          </div>
        </van-tab>
        <van-tab to="/">
          <div slot="title"  @click="ball">
            篮球
          </div>
        </van-tab>
        <van-tab to="/">
          <div slot="title"  @click="ball">
            游泳
          </div>
        </van-tab>
        <van-tab to="/">
          <div slot="title"  @click="ball">
            网球
          </div>
        </van-tab>
        <van-tab to="/">
          <div slot="title"  @click="onAll">
            全部
          </div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
// import Bus from '../utils/Bus'
export default {
  data () {
    return {
      active: 0,
      show: true,
      hide: false
    }
  },
  methods: {
    onAll () {
    // console.log(123)
      this.$emit('onAll', this.show)
    },
    ball () {
      this.$emit('ball', this.hide)
    }
  }
}
</script>

<style>

</style>

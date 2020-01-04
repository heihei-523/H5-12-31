<template>
<div>
    <slide-verify
        ref="slideblock"
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        :imgs="imgs"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :slider-text="text"
    ></slide-verify>
    <div>{{msg}}</div>
</div>

</template>

<script>
export default {
  data () {
    return {
      msg: '',
      text: '向右滑'
    }
  },
  computed: {
    imgs: function () {
      return []
    }
  },
  methods: {
    onSuccess () {
      this.msg = 'login success'
    },
    onFail () {
      this.msg = ''
    },
    onRefresh () {
      this.msg = ''
    }
  }
}
</script>

<style>

</style>

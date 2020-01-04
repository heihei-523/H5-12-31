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
  name: 'Slideverify',
  data () {
    return {
      msg: '',
      text: '',
      changeShow: false
    }
  },
  computed: {
    imgs: function () {
      return []
    }
  },
  methods: {
    onSuccess () {
      this.$emit('changeShow', this.changeShow)
      this.msg = ''
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

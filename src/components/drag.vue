<template>
  <div>
  <div id="wrapper" :style="wrapperStyle">
   <drop class="drop" id="target"
      :class="{ 'over': state.over }"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      :style="targetStyle">
   </drop>
<!-- ____________________ -->

   <drag class="drag" id="source"
      :transfer-data="true"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drag="onDrag" v-if="!state.dragged"
      :style="sourceStyle">
    <div slot="image" id="float" :style="sourceStyle">
    </div>
   </drag>

  </div>
 </div>
</template>

<script>
export default {
  name: 'drag',
  data () {
    return {
      state: false,
      trace: [],
      size: {
        width: 100,
        height: 100
      },
      block: {
        x: 10,
        y: 10
      },
      image: '../assets/logo.png'
    }
  },
  computed: {
    wrapperStyle () {
      return {
        width: this.size.width + 'px',
        height: this.size.height + 'px',
        backgroundImage: 'url(' + this.image + ')',
        backgroundSize: 'cover'
      }
    },
    targetStyle () {
      return {
        left: this.block.x + 'px',
        top: this.block.y + 'px'
      }
    },
    sourceStyle () {
      return {
        backgroundImage: 'url(' + this.image + ')',
        backgroundSize: this.size.width + 'px ' + this.size.height + 'px',
        backgroundPosition: -this.block.x + 'px ' + -this.block.y + 'px'
      }
    }
  },
  methods: {
    onDragOver () {
      this.state.over = true
    },
    onDragLeave () {
      this.state.over = false
    },
    onDragStart (data, event) {
      this.init = {
        x: event.offsetX,
        y: event.offsetY
      }
      this.trace = []
    },
    onDrag (data, event) {
      let offsetX = event.offsetX - this.init.x
      let offsetY = event.offsetY - this.init.y
      this.trace.push({
        x: offsetX,
        y: offsetY
      })
    },
    onDragEnd () {
      if (this.state.over) {
        this.state.dragging = false
        this.state.dragged = true
        this.$message.success('拖动成功')
      } else {
        this.state.dragging = false
        this.state.dragged = false
        this.$message.error('拖动失败')
      }
      this.state.over = false
    }
  }
}
</script>

<style>

</style>

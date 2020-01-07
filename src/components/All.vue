<template>
<div>
    <div class="movement">
      <div>
        <img src="../assets/羽毛球.png" alt />
        <span>羽毛球</span>
      </div>
      <div>
        <img src="../assets/篮球.png" alt />
        <span>篮球</span>
      </div>
      <div>
        <img src="../assets/游泳.png" alt />
        <span>游泳</span>
      </div>
      <div>
        <img src="../assets/网球.png" alt />
        <span>网球</span>
      </div>
      <div>
        <img src="../assets/乒乓球.png" alt />
        <span>乒乓球</span>
      </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.movement {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    height: 60px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(92, 93, 102, 1);
    line-height: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

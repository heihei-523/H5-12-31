<template>
  <div class="app">
    <van-nav-bar title="意见反馈" fixed>
      <van-icon name="cross" slot="left" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="top">
      <div class="head">*请选择您想反馈的问题</div>
      <div class="checked">
        <van-checkbox-group v-model="result">
          <van-checkbox name="a">功能异常：功能故障或不可用</van-checkbox>
          <van-checkbox name="b">产品建议：功能不好用，我有建议</van-checkbox>
          <van-checkbox name="c">其他问题</van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
    <div class="textarea">
        <div class="shang">
            <span class="s1">请补充详细问题和意见</span>
            <span class="s2">{{remnant}}/200</span>
        </div>
        <textarea maxlength="200" @input="descInput" v-model="desc" placeholder="请输入您的问题描述，以便我们更好的帮助您解决问题"/>
    </div>
    <div class="btn">
        <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: ['a', 'b', 'c'], // checked
      remnant: 200,
      desc: ''
    }
  },
  methods: {
    descInput () {
      var txtVal = this.desc.length
      this.remnant = 200 - txtVal
    }
  }
}
</script>

<style lang="less" scoped>
.app {
    background-color: #f5f6f7;
}
.kong {
  height: 50px;
  width: 100%;
  background-color: #f5f6f7;
}
.top {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px 10px 0 10px;
    .head {
        width:120px;
        height:16px;
        font-size:11px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(250,100,0,1);
        line-height:16px;
        padding-bottom: 10px;
    }
    .van-checkbox {
        padding: 0 0 12px 0;
    }
    /deep/.van-checkbox__label {
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(46,47,51,1);
        line-height:20px;
    }
}
.textarea {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px 0 10px 0;
    // align-items: center;
    // text-align: center;
    .shang {
        display: flex;
        .s1 {
            flex: 8;
            height:18px;
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(138,140,153,1);
            line-height:18px;
            text-align: left;
            margin-left: 10px;
        }
        .s2 {
            flex: 2;
            height:18px;
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(138,140,153,1);
            line-height:18px;
            text-align: right;
            margin-right: 10px;
        }
    }
    textarea {
        background-color: #f0f2f7;
        padding: 10px;
        border: 0;
        font-size: 11px;
        color:rgba(190,192,204,1);
        height: 106px;
        width: 331px;
        // margin-top: 10px;
        border-radius: 4px;
        margin: 5px auto;
    }
}
.btn {
    text-align: center;
    height: 300px;
    padding-top: 12px;
}
button {
    background-color: #1890ff;
    border: 0;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    width: 350px;
    height: 40px;
}

</style>

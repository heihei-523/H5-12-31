<template>
  <div>
      <van-nav-bar
        title="发票申请"
        @click-left="onClickLeft"
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <div class="headline">
        <p>填写发票信息</p>
        <span>*目前支持纸质发票，快递到付</span>
      </div>
      <!--    表单   -->
      <van-cell-group>
        <van-cell title="发票类型" value="内容" required>
          <van-radio-group v-model="fomeData.radio">
            <van-radio name="1">个人</van-radio>
            <van-radio name="2">企业</van-radio>
          </van-radio-group>
        </van-cell>
        <!-- <van-field v-model="fomeData.value" label="发票类型" required /> -->
        <van-field v-model="fomeData.value" label="发票抬头" required placeholder="填写发票名称"/>
        <van-field
          value="￥400"
          label="发票金额"
          disabled
          readonly
        />
        <van-field v-model="fomeData.value" label="税号" required  placeholder="请填写纳税人识别码"/>
        <van-field v-model="fomeData.value" label="单位地址"  placeholder="请填写地址"/>
        <van-field v-model="fomeData.value" label="银行账户"  placeholder="请填写电话"/>
        <van-field v-model="fomeData.value" label="开户银行"  placeholder="请填写银行账号"/>
        <van-field v-model="fomeData.value" label="开户银行"  placeholder="请填写开户行"/>
      </van-cell-group>
      <div class="konghe"></div>
      <div class="headline">
        <p>邮政地址</p>
      </div>
      <van-field v-model="fomeData.value" label="收件人" placeholder="请填写收件人姓名" required/>
      <van-field v-model="fomeData.value" label="联系方式" placeholder="请填写收件人姓名" required/>
      <van-field
        v-model="fomeData.value"
        label="收件地址"
        disabled
        placeholder="请选择省市区"
        required
        right-icon="arrow-down"
        @click="location"
      />
      <van-field v-model="fomeData.value" label="" placeholder="请输入详细地址"/>
      <div class="btn">
        <van-button type="primary" size="large" color="#1890ff">提交</van-button>
      </div>
      <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '40%' }"
      >
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="onCancel"/>
      </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      areaList: {},
      searchResult: [],
      fomeData: {
        value: '',
        radio: '1'
      }
    }
  },
  methods: {
    onClickLeft () {},
    location () { // 开启弹层
      this.show = true
    },
    onConfirm () { // 点击确定关闭弹层
      this.show = false
    },
    onCancel () { // 点击取消关闭弹层
      this.show = false
    }
  }
}
</script>

<style lang='less' scoped>

.headline {
  display: flex;
  p {
    border-left: 5px solid #1890FF;
    padding-left: 10px;
    color:#333333;
    font-size: 16px;
  }
  span {
    color:rgba(255,156,110,1);
    font-weight:400;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    margin: 19px 0 16px 25px;
  }
}
/deep/.van-cell {
  .van-cell__title {
    flex: 1;
  }
  .van-cell__value {
    flex:3;
  }
}

/deep/.van-radio-group {
  display: flex;
  // width: 200px;
  .van-radio {
    flex: 1;
  }
}
.konghe {
  height: 10px;
  width: 100%;
  background-color: #f5f6f7;
}
.btn {
  padding: 12px 12px 25px 12px;
  background-color: #f5f6f7;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>

<template>
  <div>
      <van-nav-bar
        title="登录"
        @click-left="onClickLeft"
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <img src="../../assets/logo.png" alt="" class="logo">
      <van-cell-group>
        <van-field
          v-model="user.name"
          clearable
          placeholder="请输入手机号"
          maxlength="11"
          @input="onInputName"
          @blur="onblurname"
        >
          <img src="../../assets/icon_phone_number_24.png" alt="" slot="left-icon">
        </van-field>
          <van-field
            v-model="user.sms"
            center
            clearable
            placeholder="请输入验证码"
            @blur="onblursms"
          >
            <img src="../../assets/icon_auth_code_24.png" alt="" slot="left-icon">
            <van-button slot="button" size="small" type="primary" @click="onTime" :disabled="disableBtn">
              <span v-if="timeBnt">发送验证码</span>
              <div>
                <van-count-down
                  :time="time"
                  :format="format"
                  @finish="onfinish"
                  ref="countDown"
                />后重发
              </div>
            </van-button>
          </van-field>
        </van-cell-group>
        <van-button type="primary" size="large" :disabled="disabled" @click="onlogin">登录</van-button>
        <van-checkbox v-model="checked" shape="square">
          <span>同意</span>
          <a href="#">《用户使用协议》</a>
        </van-checkbox>
        <van-popup v-model="show" get-container="body">
          <SlideVerify :message="show" @changeShow="onchangeShow"></SlideVerify>
        </van-popup>

  </div>
</template>

<script>
import SlideVerify from '../../components/slideverify'
export default {
  name: 'Login',
  components: {
    SlideVerify
  },
  data () {
    return {
      format: 'ss',
      time: 60000,
      show: false, // 弹层显示
      checked: false, // 复选框
      user: {
        name: '',
        sms: ''
      },
      disabled: true, // 登录按钮禁用
      timeBnt: true, // 显示发送验证码按钮按钮
      disableBtn: true// 发送验证码时按钮禁用
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    },
    onInputName () {
      if (/^1[3456789]\d{9}$/.test(this.user.name)) {
        this.disableBtn = false
      } else {
        this.disableBtn = true
      }
    },
    onblurname () {
      if (!/^1[3456789]\d{9}$/.test(this.user.name)) {
        this.disableBtn = true
        this.$toast('请输入正确的手机号')
        if (/^1[3456789]\d{9}$/.test(this.user.name) && /^\d{6}$/.test(this.user.sms)) {
          this.disabled = false
        }
      }
    },
    onblursms () {
      if (!/^\d{6}$/.test(this.user.sms)) {
        this.$toast('请输入正确的验证码')
      }
      if (/^1[3456789]\d{9}$/.test(this.user.name) && /^\d{6}$/.test(this.user.sms)) {
        this.disabled = false
      }
    },
    onlogin () {
      if (!this.checked) {
        this.$toast('请勾选协议')
      } else {
        if (this.user.sms === '123456') {
          this.$router.push('/')
        } else {
          this.$toast('验证码错误')
        }
      }
      // this.$refs.slideblock.reset()
    },
    // 点击发送验证码按钮
    onTime () {
      if (/^1[3456789]\d{9}$/.test(this.user.name)) {
        this.disableBtn = false
      }
      this.show = true
    },
    onfinish () {
      this.timeBnt = true
      this.disableBtn = false
    },
    // 关闭弹层时
    onchangeShow (changeShow) {
      this.show = changeShow
      this.timeBnt = false
      this.$refs.countDown.reset()
      this.disableBtn = true
    }
  }
}
</script>

<style scoped lang="less">
  // body {
  //   font-family: "SimHei";
  // }
  .van-ellipsis {
    font-size: 16px;
    font-weight: 600;
    // font-family: "SimHei";
  }
  .logo {
    margin: 30px 151px 0 151px;
    width: 70px;
  }
  .van-nav-bar__left .van-icon-cross {
    font-size: 20px;
    font-weight: 600;
    color: #5c5d66;
  }
  .van-nav-bar__right .van-icon-ellipsis {
    font-size: 20px;
    font-weight: 600;
    color: #5c5d66;
  }
  .van-hairline--top-bottom {
    margin-top: 60px;
  }
  /deep/.van-field__control {
    font-size: 18px;
    // color: #BEC0CC;
    font-family: "SimHei";
  }
  /deep/.van-cell--center .van-field__left-icon{
     height: 24px;
  }
  /deep/.van-field__button {
    background-color: #fff;
    .van-button--primary {
      font-family: "SimHei";
      font-size: 17px;
      background-color: #fff;
      border: none;
      color: #8A8C99;
    }
  }
  .van-button--large {
    border: none;
    border-radius: 5px;
    background-color: #1890FF;
    margin: 33px 30px;
    width: 315px;
  }
  /deep/.van-checkbox {
    padding: 0 100px;
    .van-checkbox__icon {
      font-size: 16px;
    }
    .van-checkbox__label {
      font-size: 13px;
      span {
        color: #8A8C99;
      }
      a {
        color: #1890FF;
      }
    }
  }
  .van-count-down {
    display: inline-block;
    font-size: 16px;
    color: #8A8C99;
  }
  .van-popup {
    border-radius: 10px;
    padding: 10px;
  }
  /deep/canvas {
    border-radius: 10px;
  }
  /deep/.slide-verify .slide-verify-slider {
    border-radius: 10px;
    margin: 0;
  }
  /deep/.slide-verify-slider-mask {
    border-radius: 10px 0 0 10px
  }
  /deep/.slide-verify-slider-mask .slide-verify-slider-mask-item {
    border-radius: 50%
  }

</style>

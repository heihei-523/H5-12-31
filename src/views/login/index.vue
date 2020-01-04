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
          @blur="onblurname"
        >
          <img src="../../assets/icon_phone_number_24.png" alt="" slot="left-icon">
        </van-field>
          <van-field
            v-model="user.sms"
            center
            clearable
            placeholder="请输入验证码"
            @blur="onblurname"
          >
            <img src="../../assets/icon_auth_code_24.png" alt="" slot="left-icon">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-button type="primary" size="large" :disabled="disabled">登录</van-button>
        <van-checkbox v-model="checked" shape="square">
          <span>同意</span>
          <a href="#">《用户使用协议》</a>
        </van-checkbox>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      checked: false,
      user: {
        name: '',
        sms: ''
      },
      disabled: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    },
    onblurname () {
      if (/^1[3456789]\d{9}$/.test(this.user.name) && /^\d{6}$/.test(this.user.sms)) {
        this.disabled = true
      }
    }
    // onblursms () {
    //   if (!/^\d{6}$/.test(this.user.sms)) {
    //
    //   }else {

    //   }
    // }
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

</style>

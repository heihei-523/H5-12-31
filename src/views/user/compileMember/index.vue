<template>
  <div class="app">
    <van-nav-bar title="会员详情" fixed>
      <van-icon name="cross" slot="left" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="kong"></div>
    <div class="tou_xiang">
      <div class="left">会员中心</div>
      <div class="tuo_pian" @click="bottom_show = true">
        <img :src="imgSrc" />
      </div>
      <div>
        <van-icon name="arrow" color="#c8c8cd" size="16px" />
      </div>
    </div>
    <div class="zi_liao">
      <div class="zi_liao_1">
        <div class="left">客户姓名</div>
        <div class="name" @click="onName">{{user_name}}</div>
        <div>
          <van-icon name="arrow" color="#c8c8cd" size="16px" />
        </div>
      </div>
      <div class="zi_liao_1">
        <div class="left">客户性别</div>
        <div class="name" @click="sex_show=true">男</div>
        <div>
          <van-icon name="arrow" color="#c8c8cd" size="16px" />
        </div>
      </div>
      <div class="zi_liao_1">
        <div class="left">客户生日</div>
        <div class="name" @click="date=true">1999年08月09日</div>
        <div>
          <van-icon name="arrow" color="#c8c8cd" size="16px" />
        </div>
      </div>
      <div class="zi_liao_1">
        <div class="left">电话</div>
        <div class="name" @click="onPhone">{{user_phone}}</div>
        <div>
          <van-icon name="arrow" color="#c8c8cd" size="16px" />
        </div>
      </div>
      <div class="zi_liao_1">
        <div class="left">常用邮箱</div>
        <div class="name" @click="onMail">{{user_mail}}</div>
        <div>
          <van-icon name="arrow" color="#c8c8cd" size="16px" />
        </div>
      </div>
    </div>
    <!-- ------------------------------------- -->
    <div class="zi_liao">
      <div class="zi_liao_1">
        <div class="left">会员类型</div>
        <div class="name">个人</div>
      </div>
      <div class="zi_liao_1">
        <div class="left">会员编号</div>
        <div class="name">00 7653 4534 5534</div>
      </div>
      <div class="zi_liao_1">
        <div class="left">物理卡号</div>
      </div>
      <div class="zi_liao_1">
        <div class="left">办理时间</div>
        <div class="name">2019-10-13 14:06</div>
      </div>
      <div class="zi_liao_1">
        <div class="left">所属门店</div>
        <div class="name">乌兰察布体育馆</div>
      </div>
    </div>
    <!-- ------------------------------------- -->
    <button class="btn">保存修改</button>
    <!-- ------------------------------------ -->
    <!-- 弹出层 -->
    <van-popup v-model="show" get-container="body" round>
      <!-- 姓名模块 -->
      <div class="zhong_jian" v-if="name_poput">
        <div class="user_name">客户姓名</div>
        <div class="border">
          <input type="text" placeholder="请输入姓名" v-model="name" />
        </div>
        <div class="ok" @click="onNameOk">完成</div>
      </div>
      <!-- 电话号码模块 -->
      <div class="zhong_jian" v-if="phone_poput">
        <div class="user_name" placeholder="请输入手机号码">电话号码</div>
        <div class="border">
          <input type="text" v-model="phone" />
        </div>
        <div class="ok" @click="onPhoneOk">完成</div>
      </div>
      <!-- 常用邮箱 -->
      <div class="zhong_jian" v-if="mail_poput">
        <div class="user_name">常用邮箱</div>
        <div class="border">
          <input type="text" placeholder="请输入邮箱" v-model="mail" />
        </div>
        <div class="ok" @click="onMailOk">完成</div>
      </div>
      <!-- ------------------------- -->
      <div v-if="error" class="error">
        <div class="error_1">
          <img src="../../../assets/cuo_wu.png" alt />
        </div>
        <div class="error_2">{{layout + '格式不正确'}}</div>
        <div class="error_3">{{'您输入的'+layout+'不正确,请重新输入'}}</div>
      </div>
    </van-popup>
    <!-- 底部弹出层之头像弹出 -->
    <van-popup v-model="bottom_show" position="bottom" :style="{ height: '30%' }">
      <div class="HeadPortrait">
        <div class="H1">
          <input type="file" id="file" class="file-path" @change="changepic" />
          从相册选择
        </div>
        <div class="H1" @click="videoCapture">
            拍照
            <!-- <input type="file" accept="image/*"> -->
        </div>
        <div class="H3">取消</div>
      </div>
    </van-popup>
    <!-- 底部弹出层之性别弹出 -->
    <van-popup v-model="sex_show" position="bottom" :style="{ height: '20%' }">
      <div class="HeadPortrait">
        <div class="H1">男</div>
        <div class="H1">女</div>
      </div>
    </van-popup>
    <!-- 底部弹出层之年龄选择 -->
    <van-popup v-model="date" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'compile',
  data () {
    return {
      camera: 'camera',
      imgSrc: '', // 图片预览
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 10, 1),
      currentDate: new Date(),
      date: false, // 年龄弹层
      sex_show: false, // 性别弹层
      bottom_show: false,
      name_poput: false, // 隐藏姓名弹层
      phone_poput: false, // 隐藏手机模块
      mail_poput: false, // 隐藏邮箱模块
      user_phone: '199 0865 3680',
      phone: '199 0865 3680', // 输入框里的手机号
      show: false,
      user_name: '张晨晨', // 用户姓名
      name: '', // 姓名
      user_mail: '去填写', // 页面里的邮箱
      mail: '', // 输入框里的邮箱
      error: false,
      layout: ''
    }
  },
  methods: {
    videoCapture () {
      var cmr = window.plus.camera.getCamera()
      var res = cmr.supportedVideoResolutions[0]
      var fmt = cmr.supportedVideoFormats[0]
      console.log('Resolution: ' + res + ', Format: ' + fmt)
      cmr.startVideoCapture(function (path) {
        alert('Capture video success: ' + path)
      },
      function (error) {
        alert('Capture video failed: ' + error.message)
      },
      { resolution: res, format: fmt }
      )
    },
    // 图片预览
    changepic (e) {
      let file = e.target.files[0]
      let url = URL.createObjectURL(file)
      this.imgSrc = url
      this.bottom_show = false
    },
    // 点击头像
    // onHeadPortrait () {
    //   this.
    // },
    // 姓名
    onName () {
      this.name_poput = true
      this.phone_poput = false
      this.mail_poput = false // 关闭邮箱弹层
      this.show = true
      this.error = false // 关闭格式不正确
    },
    // 点击姓名下完成
    onNameOk () {
      this.show = false // 关闭弹层
      this.phone_poput = false // 关闭手机弹层
      this.user_name = this.name // 把输入框里的值赋值给页面里的姓名
    },
    // 点击手机
    onPhone () {
      this.show = true // 显示弹层
      this.name_poput = false // 关闭姓名弹层
      this.mail_poput = false // 关闭邮箱弹层
      this.phone_poput = true // 显示手机弹层
      this.error = false
    },
    // 点击邮箱
    onMail () {
      this.show = true // 显示弹层
      this.name_poput = false // 关闭姓名弹层
      this.phone_poput = false // 关闭手机弹层
      this.mail_poput = true // 显示邮箱弹层
      this.error = false // 关闭格式不正确
    },
    // 点击手机下的完成
    onPhoneOk () {
      if (/^1[3456789]\d{9}$/.test(this.phone)) {
        this.user_phone = this.phone // 把输入框里的值赋值给页面里的手机
        this.show = false // 关闭弹层
        this.error = false
      } else {
        this.layout = '手机号码'
        this.phone_poput = false
        this.error = true
      }
    },
    // 点击邮箱下完成
    onMailOk () {
      let regular = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (regular.test(this.mail)) {
        this.user_mail = this.mail // 把输入框里的值赋值给页面里的邮箱
        this.show = false // 关闭弹层
        this.error = false
      } else {
        this.layout = '邮箱'
        this.mail_poput = false // 关闭邮箱弹层
        this.error = true
        this.mail = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.file-path {
  background-color: #fff;
  opacity: 0;
  position: fixed;
}
.app {
  background-color: #f5f6f7;
  height: 812px;
}
.kong {
  height: 54px;
}
.tou_xiang {
  display: flex;
  background-color: #fff;
  align-items: center;
  height: 100px;
  padding: 0 12px;
  margin-bottom: 10px;
  .left {
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
    flex: 8;
  }
  .tuo_pian {
    flex: 2;
    height: 60px;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
.zi_liao {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  // align-items: center;
  height: 250px;
  padding: 0 12px;
  margin-bottom: 10px;
  .zi_liao_1 {
    display: flex;
    height: 50px;
    align-items: center;
    .left {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 4;
    }
    div {
      height: 23px;
      line-height: 13px;
    }
    .name {
      // height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(46, 47, 51, 1);
      line-height: 25px;
      flex: 6;
      text-align: right;
    }
  }
}
.btn {
  width: 351px;
  height: 44px;
  background: rgba(24, 144, 255, 1);
  border-radius: 2px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  margin: 0 12px;
  position: fixed;
  bottom: 0;
}
.zhong_jian {
  width: 280px;
  height: 161px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .user_name {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(46, 47, 51, 1);
    line-height: 22px;
    margin-bottom: 10px;
  }
  input {
    height: 40px;
    width: 232px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(46, 47, 51, 1);
    border: 0;
    text-align: center;
    background-color: #f0f2f7;
  }
  .ok {
    width: 35px;
    height: 32px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(24, 144, 255, 1);
    line-height: 43px;
  }
}
.border {
  height: 60px;
  border-bottom: #f5f6f7 1px solid;
}
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 161px;
  width: 280px;
  .error_1 {
    height: 60px;
    width: 60px;
    margin-bottom: 15px;
    img {
      width: 60px;
    }
  }
  .error_2 {
    width: 144px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 77, 79, 1);
    line-height: 22px;
    text-align: center;
    margin-bottom: 10px;
  }
  .error_3 {
    width: 187px;
    text-align: center;
    height: 16px;
    font-size: 11px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 77, 79, 1);
    line-height: 16px;
  }
}
.HeadPortrait {
  display: flex;
  flex-direction: column;
  align-items: center;

  .H1 {
    width: 100%;
    height: 53px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(24, 144, 255, 1);
    line-height: 53px;
    border-bottom: #f5f6f7 1px solid;
    text-align: center;
  }
  .H3 {
    height: 53px;
    width: 100%;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(138, 140, 153, 1);
    line-height: 53px;
    text-align: center;
  }
}
</style>

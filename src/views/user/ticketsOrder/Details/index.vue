<template>
  <!-- 门票订单列表 -->
  <div>
    <div class="top">
      <div class="ding_dan_hao">
        <div class="ding_dan_id">订单号：123456789066</div>
        <div class="date">待支付（08：29）</div>
      </div>
      <div class="zhong">
        <div class="row_1">
          <div class="row_1-1">乌兰察布体育馆</div>
          <div class="row_1-2">2019/01/07 18:22</div>
        </div>
        <div class="row_2">羽毛球-散客单人票</div>
        <div class="row_3">
          <div class="row_3-1">单次票</div>
          <div class="row_3-2">15元*1张</div>
        </div>
        <div class="row_3">
          <div class="row_3-1">有效期</div>
          <div class="row_3-2">2020-01-01 至 2020-01-01</div>
        </div>
      </div>
      <div class="shi_fu">
        <div class="shi_fu_1">实付：</div>
        <div class="monry">￥200</div>
        <button class="del">撤销订单</button>
        <button class="li_ji_zhi_fu">立即支付</button>
      </div>
    </div>
    <!-- -------------------------------------------------- -->
    <div class="top_1">
      <div class="ding_dan_hao">
        <div class="ding_dan_id">订单号：123456789066</div>
        <div class="date">已支付</div>
      </div>
      <div class="zhong">
        <div class="row_1">
          <div class="row_1-1">乌兰察布体育馆</div>
          <div class="row_1-2">2019/01/07 18:22</div>
        </div>
        <div class="row_2">羽毛球-散客单人票</div>
        <div class="row_3">
          <div class="row_3-1">单次票</div>
          <div class="row_3-2">15元*1张</div>
        </div>
        <div class="row_3">
          <div class="row_3-1">有效期</div>
          <div class="row_3-2">2020-01-01 至 2020-01-01</div>
        </div>
      </div>
      <div class="shi_fu">
        <div class="shi_fu_1">实付：</div>
        <div class="monry">￥200</div>
        <button class="del">再次购买</button>
        <button class="li_ji_zhi_fu" @click="OnPopup">查看二维码</button>
      </div>
    </div>
    <!-- ------------------------------------------------------------- -->
    <div class="top_2">
      <div class="ding_dan_hao">
        <div class="ding_dan_id">订单号：123456789066</div>
        <div class="date">已取消</div>
      </div>
      <div class="zhong">
        <div class="row_1">
          <div class="row_1-1">乌兰察布体育馆</div>
          <div class="row_1-2">2019/01/07 18:22</div>
        </div>
        <div class="row_2">羽毛球-散客单人票</div>
        <div class="row_3">
          <div class="row_3-1">单次票</div>
          <div class="row_3-2">15元*1张</div>
        </div>
        <div class="row_3">
          <div class="row_3-1">有效期</div>
          <div class="row_3-2">2020-01-01 至 2020-01-01</div>
        </div>
      </div>
      <div class="shi_fu">
        <div class="shi_fu_1">实付：</div>
        <div class="monry">￥200</div>
        <button class="li_ji_zhi_fu">重新预定</button>
      </div>
    </div>
    <!-- ------------------------------------------------------------------ -->
    <van-popup v-model="show" get-container="body">
      <van-swipe @change="onChange" :width="165" :height="170" :show-indicators="indicators">
      <van-swipe-item>
        <img src="../../../../assets/wxming.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../../assets/wxming.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../../assets/wxming.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../../assets/wxming.png" alt />
      </van-swipe-item>
      <!-- <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div> -->
    </van-swipe>
    <div class="custom-indicator">{{ current + 1 }}/4</div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      indicators: false,
      show: false,
      current: 0
    }
  },
  methods: {
    OnPopup () {
      this.show = true
    },
    onChange (index) {
      this.current = index
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-swipe {
  padding-left: 13px;
  padding-top: 10px;
  width: 162px;
  height: 170px;
  img {
    width: 150px;
    height: 150px;
  }
}
.custom-indicator {
    height: 30px;
    width: 165px;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(92,93,102,1);
    text-align: center;
}
.top {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 12px;
  margin-bottom: 10px;
  .ding_dan_hao {
    display: flex;
    border-bottom: 1px solid #f5f6f7;
    align-items: center;
    .ding_dan_id {
      flex: 7;
      height: 35px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 28px;
    }
    .date {
      flex: 3;
      height: 35px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 77, 79, 1);
      line-height: 28px;
      text-align: right;
    }
  }
  .zhong {
    padding-bottom: 10px;
    border-bottom: #f5f6f7 1px solid;
    .row_1 {
      height: 50px;
      display: flex;
      background-color: #fff;
      align-items: center;
      .row_1-1 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 200px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(46, 47, 51, 1);
        line-height: 22px;
        flex: 7;
      }
      .row_1-2 {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 17px;
        flex: 3;
        text-align: right;
      }
    }
    .row_2 {
      width: 121px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
    }
    .row_3 {
      display: flex;
      height: 20px;
      align-items: center;
      .row_3-1 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 20px;
      }
      .row_3-2 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(46, 47, 51, 1);
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }
  .shi_fu {
    display: flex;
    height: 44px;
    align-items: center;
    .shi_fu_1 {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 0.8;
    }
    .monry {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 2;
    }
    .del {
      width: 96px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      border: 1px solid rgba(223, 223, 223, 1);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
    .li_ji_zhi_fu {
      width: 96px;
      height: 30px;
      background-color: #fff;
      border-radius: 2px;
      border: 1px solid rgba(250, 100, 0, 1);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(250, 100, 0, 1);
    }
  }
}
.top_1 {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 12px;
  margin-bottom: 10px;
  .ding_dan_hao {
    display: flex;
    border-bottom: 1px solid #f5f6f7;
    align-items: center;
    .ding_dan_id {
      flex: 7;
      height: 35px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 28px;
    }
    .date {
      flex: 3;
      height: 35px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1890ff;
      line-height: 28px;
      text-align: right;
    }
  }
  .zhong {
    padding-bottom: 10px;
    border-bottom: #f5f6f7 1px solid;
    .row_1 {
      height: 50px;
      display: flex;
      background-color: #fff;
      align-items: center;
      .row_1-1 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 200px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(46, 47, 51, 1);
        line-height: 22px;
        flex: 7;
      }
      .row_1-2 {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 17px;
        flex: 3;
        text-align: right;
      }
    }
    .row_2 {
      width: 121px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
    }
    .row_3 {
      display: flex;
      height: 20px;
      align-items: center;
      .row_3-1 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 20px;
      }
      .row_3-2 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(46, 47, 51, 1);
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }
  .shi_fu {
    display: flex;
    height: 44px;
    align-items: center;
    .shi_fu_1 {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 0.8;
    }
    .monry {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 2;
    }
    .del {
      width: 96px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      border: 1px solid rgba(223, 223, 223, 1);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
    .li_ji_zhi_fu {
      width: 96px;
      height: 30px;
      background-color: #1890ff;
      border-radius: 2px;
      font-size: 14px;
      border: 0;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #fff;
    }
  }
}
.top_2 {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 12px;
  margin-bottom: 10px;
  .ding_dan_hao {
    display: flex;
    border-bottom: 1px solid #f5f6f7;
    align-items: center;
    .ding_dan_id {
      flex: 7;
      height: 35px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(138, 140, 153, 1);
      line-height: 28px;
    }
    .date {
      flex: 3;
      height: 35px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #b8b8c1;
      line-height: 28px;
      text-align: right;
    }
  }
  .zhong {
    padding-bottom: 10px;
    border-bottom: #f5f6f7 1px solid;
    .row_1 {
      height: 50px;
      display: flex;
      background-color: #fff;
      align-items: center;
      .row_1-1 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 200px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(46, 47, 51, 1);
        line-height: 22px;
        flex: 7;
      }
      .row_1-2 {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 17px;
        flex: 3;
        text-align: right;
      }
    }
    .row_2 {
      width: 121px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
    }
    .row_3 {
      display: flex;
      height: 20px;
      align-items: center;
      .row_3-1 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(138, 140, 153, 1);
        line-height: 20px;
      }
      .row_3-2 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(46, 47, 51, 1);
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }
  .shi_fu {
    display: flex;
    height: 44px;
    align-items: center;
    .shi_fu_1 {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 0.8;
    }
    .monry {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(92, 93, 102, 1);
      line-height: 20px;
      flex: 4;
    }
    .del {
      width: 96px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      border: 1px solid rgba(223, 223, 223, 1);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
    .li_ji_zhi_fu {
      width: 96px;
      height: 30px;
      border-radius: 2px;
      font-size: 14px;
      border: #1890ff solid 1px;
      background-color: #fff;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1890ff;
    }
  }
}
</style>

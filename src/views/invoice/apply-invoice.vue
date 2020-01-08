<template>
  <div class="app">
      <van-nav-bar
        title="发票申请"
        @click-left="onClickLeft"
        fixed
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <div class="kong-box"></div>
      <div class="xuan_ze">
          <span>
            选择订单
          </span>
      </div>
      <div class="card">
          <div class="order">
              <span class="order_name">订单号：</span>
              <span class="orde_id">123456789066</span>
          </div>
          <div class="middle">
              <div class="checkbox">
                  <p>隆兴羽毛球超级馆</p>
                  <van-checkbox v-model="checked"></van-checkbox>
              </div>
              <div class="date">
                  <div class="yu_mao">羽毛球</div>
                  <div class="week">周日(03/13)</div>
              </div>
              <div class="chang_di">
                  <div class="one">第1号场地</div>
                  <div class="shi_jian">12：00-14：00</div>
                  <div class="money">￥100</div>
              </div>
              <div class="chang_di">
                  <div class="one">第2号场地</div>
                  <div class="shi_jian">12：00-14：00</div>
                  <div class="money">￥100</div>
              </div>
          </div>
          <div class="shi_fu">
              <div class="shi_fu_1">实付：</div>
              <div class="qian">￥200.00</div>
          </div>
      </div>
      <div class="card">
          <div class="order">
              <span class="order_name">订单号：</span>
              <span class="orde_id">123456789066</span>
          </div>
          <div class="middle">
              <div class="checkbox">
                  <p>隆兴羽毛球超级馆</p>
                  <van-checkbox v-model="checked"></van-checkbox>
              </div>
              <div class="date">
                  <div class="yu_mao">羽毛球</div>
                  <div class="week">周日(03/13)</div>
              </div>
              <div class="chang_di">
                  <div class="one">第1号场地</div>
                  <div class="shi_jian">12：00-14：00</div>
                  <div class="money">￥100</div>
              </div>
              <div class="chang_di">
                  <div class="one">第2号场地</div>
                  <div class="shi_jian">12：00-14：00</div>
                  <div class="money">￥100</div>
              </div>
          </div>
          <div class="shi_fu">
              <div class="shi_fu_1">实付：</div>
              <div class="qian">￥200.00</div>
          </div>
      </div>
      <div class="card">
          <div class="order">
              <span class="order_name">订单号：</span>
              <span class="orde_id">123456789066</span>
          </div>
          <div class="middle">
              <div class="checkbox">
                  <p>隆兴羽毛球超级馆</p>
                  <van-checkbox v-model="checked"></van-checkbox>
              </div>
              <div class="date">
                  <div class="yu_mao">羽毛球</div>
                  <div class="week">周日(03/13)</div>
              </div>
              <div class="chang_di">
                  <div class="one">第1号场地</div>
                  <div class="shi_jian">12：00-14：00</div>
                  <div class="money">￥100</div>
              </div>
              <div class="chang_di">
                  <div class="one">第2号场地</div>
                  <div class="shi_jian">12：00-14：00</div>
                  <div class="money">￥100</div>
              </div>
          </div>
          <div class="shi_fu">
              <div class="shi_fu_1">实付：</div>
              <div class="qian">￥200.00</div>
          </div>
      </div>
      <div class="btn">
          <van-button type="primary" size="large" color="#1890ff">下一步</van-button>
      </div>
      <div class="asd"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  methods: {
    onClickLeft () {

    }
  }
}
</script>

<style lang="less" scoped>
.app {
    height: 667px;
    background-color: #F5F6F7;
}
.asd {
    height: 65px;
}
.kong-box {
    height: 53px;
    width: 100%;
    background-color: #F5F6F7;
}
.xuan_ze {
    height: 27px;
    padding-top: 9px;
    background-color: #fff;
    span {
        display: block;
        padding-left: 8px;
        border-left: 5px solid #1890FF;
        width:360px;
        height:18px;
        background:rgba(255,255,255,1);
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(92,93,102,1);
        line-height:16px;
    }
}
.card {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    border-top: #F5F6F7 6px solid;
    padding-left: 8px;
    .order {
        display: flex;
        height: 36px;
        align-items: center;
        border-bottom: #F5F6F7 1px solid;
        .order_name {
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(138,140,153,1);
            flex:1.5;
        }
        .orde_id {
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(138,140,153,1);
            flex:9;
        }
    }
    .middle {
        display: flex;
        flex-direction: column;
        .checkbox {
            display: flex;
            p {
            height:22px;
            flex: 9;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(46,47,51,1);
            line-height:22px;
            }
            .van-checkbox {
                flex: 1;
            }
        }
        .date {
            display: flex;
            .yu_mao {
                flex: 1;
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(138,140,153,1);
                line-height:20px;
            }
            .week {
                flex: 7;
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(138,140,153,1);
                line-height:20px;
            }
        }
        .chang_di {
            display: flex;
            padding-top: 5px;
            .one {
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(138,140,153,1);
                line-height:20px;
                flex:2;
            }
            .shi_jian {
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(138,140,153,1);
                line-height:20px;
                flex: 6;
            }
            .money {
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(92,93,102,1);
                line-height:20px;
                flex: 1.5;
            }
        }
    }
    .shi_fu {
        display: flex;
        height: 44px;
        align-items: center;
        border-top: 1px #F5F6F7 solid;
        margin-top: 12px;
        .shi_fu_1 {
            flex: 8;
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(125,125,125,1);
            line-height:20px;
        }
        .qian {
            flex: 2;
            height:19px;
            font-size:16px;
            font-family:SFProText-Medium,SFProText;
            font-weight:500;
            color:rgba(92,93,102,1);
            line-height:19px;
        }
    }
}
.btn {
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    padding-top: 5px;
    .van-button {
        width:350px;
        height:40px;
        margin-left: 13px;
        border-radius: 4px;
    }
}
</style>

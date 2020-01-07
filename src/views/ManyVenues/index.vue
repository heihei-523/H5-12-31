<template>
  <div>
    <!-- 单馆的首页 -->
    <div>
      <van-nav-bar :title="venueName" @click-left="onClickLeft">
        <van-icon name="cross" slot="left" />
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div>
        <div class="beiJingf">
          <span>
            <img src="../../assets/icon_location.png" alt />
          </span>
          <span class="beiJing">{{address}}</span>
          <span>
            <img src="../../assets/icon_dropdown.png" alt />
          </span>
        </div>
      </div>
      <img :src="signImg" class="tuo" />
      <div class="guanming">
        <h5>{{venueName}}</h5>
        <span>
          <img src="../../assets/icon_iphone.png" alt />
        </span>
      </div>
      <div class="working">
        <img src="../../assets/ic_list_time.png" alt />
        <span>{{"工作日" + open + "-" + close}}</span>
        <span>{{"工作日" + open + "-" + close}}</span>
      </div>
      <van-button type="default" class="yuding">预定</van-button>
      <van-button type="default" class="yuding">购票</van-button>
      <div>
        <div></div>
        <h5 class="jianjie">场馆简介</h5>
        <p class="p">
          2020年1月4日开始至7日，我国自西向东出现大范围雨雪天气过程。中央气象台5日上午10点继续发布暴雪蓝色预警。
          它来啦 它来啦
          他“携风带雪”向你走来啦
        </p>
        <p v-show="more">i很多覅的福克斯当年覅粉红丝带方式</p>
      </div>
      <van-collapse v-model="activeNames" :border="false" @change="onChangeCollapse">
        <van-collapse-item :title="collapsTitile" name="2"></van-collapse-item>
      </van-collapse>
    </div>
    <div class="emptybox"></div>
    <div class="reserve">
      <van-tabs v-model="active" class="tabs">
        <van-tab :title="item.sportTypeName" v-for="(item,index) in sites" :key="index"></van-tab>
      </van-tabs>
      <div class="bottom">
        <img src="../../assets/icon_yuding.png" alt />
        <p class="right">场地预定</p>
        <span :value="date" @click="show = true">更多日期</span>
        <!-- <van-cell title="更多日期" :value="date" @click="show = true" /> -->
        <van-calendar v-model="show" @confirm="onConfirm" />
        <img src="../../assets/icon_arrow.png" alt class="icon_arrow" />
      </div>
      <div class="date">
        <van-tabs :line-height="0" :swipe-threshold="3">
          <van-tab v-for="index in 7" :title="'周 ' + index" :key="index">
            <div slot="title">
              {{targetMonth + 1 + '月' + (targetDate+index-1) + '日'}}
              <br />
              <div v-if="index==1" class="getDay">(今天)</div>
              <div v-else class="getDay">{{"周"+(targetgetDay+index-1)}}</div>
              <van-button round type="info" size="small" plain color="#1890FF">预定</van-button>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="emptybox"></div>
    <div class="reserve">
      <div class="bottom">
        <img src="../../assets/icon_menpiao.png" alt />
        <p class="menpiao right">门票</p>
        <span>查看更多</span>
        <img src="../../assets/icon_arrow.png" alt class="icon_arrow" />
      </div>
      <van-cell-group>
        <van-cell
          :title="ticket.ticketName"
          value
          :label="'￥' + ticket.ticketPrice"
          v-for="ticket in tickets"
          :key="ticket.ticketId"
        >
          <span slot="icon" class="span">
            <s>￥120.00</s>
          </span>
          <van-button round type="info" size="small" plain color="#1890FF" slot="right-icon">购买单人票</van-button>
        </van-cell>
        <!-- <van-cell title="羽毛球-闪客单人票" value="" label="￥80.00">
                <span slot="icon" class="span"><s>￥100.00</s></span>
                <van-button round type="info" size="small" plain color="#1890FF" slot="right-icon">购买单人票</van-button>
        </van-cell>-->
      </van-cell-group>
    </div>
    <div class="emptybox"></div>
    <div class="reserve reserves">
      <div class="bottom">
        <img src="../../assets/icon_card.png" alt />
        <p class="menpiao right">在线购买会员</p>
        <span class="examine">查看更多</span>
        <img src="../../assets/icon_arrow.png" alt class="icon_arrow" />
      </div>
    </div>
    <!-- ---------------------------会员次卡---------------------------------------- -->
    <div class="member">
        <div class="member_1">
            <img src="../../assets/次卡备份.png" alt="">
        </div>
        <div class="member_right">
            <p>会员次卡</p>
            <span class="cardClass">卡类型</span>
            <div>
                <span>单次卡</span>
                <span>多次卡</span>
            </div>
        </div>
    </div>
    <!-- --------------------会员期限卡-------------------------------- -->
    <div class="member1">
        <div class="member_1">
            <img src="../../assets/期限卡备份.png" alt="">
        </div>
        <div class="member_right">
            <p>会员期限卡</p>
            <span class="cardClass">卡类型</span>
            <div>
                <span>年卡</span>
                <span>季卡</span>
                <span>月卡</span>
            </div>
        </div>
    </div>
    <!-- --------------------------会员储值卡--------------------------------------- -->
    <div class="member2">
        <div class="member_1">
            <img src="../../assets/储值卡备份.png" alt="">
        </div>
        <div class="member_right">
            <p>会员储值卡</p>
            <span class="cardClass">卡类型</span>
            <div>
                <span>会员储值卡</span>
            </div>
        </div>
    </div>
    <!-- ----------------------------------------------------------------------------- -->
    <div class="zuidi">
      <div class="biaoti">场馆介绍</div>
      <div class="neiRong">
        重办省周华见收管江你展七思知山办共接北使次如
        相革素号角维三学济美众器米风时报关热条结思行工解华听种根交列者克入和厂什象议往石天能离我海的。
      </div>
      <div class="biaoti">购买须知</div>
      <div class="neiRong">好的界面设计并不始于图片，而是始于对人的理解，比如人们喜欢什么，为什么人们会试用某种特定的软件，他们可能与之怎样交互</div>
      <div>
        <img :src="signImg" alt />
      </div>
      <div class="neiRong">
        我认为，大多数设计
        师只是试图从他们已经做过的事情中努力，在讲故事方面并没有什么特别之处，而我的回归，将伴随着一个伟大的演讲
      </div>
    </div>
  </div>
</template>

<script>
import { venueBetails } from '@/api/mock'
// import moment from 'moment'
export default {
  name: 'venueBetails',
  data () {
    return {
      targetDate: new Date().getDate(), // 获取当前天
      targetMonth: new Date().getMonth(), // 获取当前月份
      targetgetDay: new Date().getDay(), // 获取当前星期
      date: '', // 日历日期
      show: false,
      active: 2,
      more: false,
      collapsTitile: '查看更多',
      activeNames: ['1'],
      venueName: '', // 场馆名称
      signImg: '',
      close: '',
      open: '',
      sites: [],
      tickets: [],
      address: ''
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    onClickLeft () {},
    onChangeCollapse () {
      if (this.collapsTitile === '查看更多') {
        this.more = true
        this.collapsTitile = '收起'
      } else {
        this.collapsTitile = '查看更多'
        this.more = false
      }
    },
    formatDate () {
      return `${this.targetMonth + 1}/${this.targetgetDay}`
    },
    onConfirm (date) {
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
    },
    async onLoad () {
      const res = await venueBetails()
      console.log(res)
      this.venueName = res.data.venueName
      this.signImg = res.data.signImg
      this.open = res.data.open
      this.close = res.data.close
      this.sites = res.data.sites
      this.tickets = res.data.tickets
      this.address = res.data.address
    }
  }
}
</script>

<style lang="less" scoped>
.member {
    display: flex;
    width: 369px;
    height: 90px;
    margin-left: 10px;
    margin-bottom: 15px;
    .member_1 {
        display: inline-block;
        width: 140px;
        height: 90px;
    }
    .member_right {
        display: inline-block;
        margin-top: 4px;
        margin-left: 6px;
        height: 86px;
        width: 222px;
        p {
            display: block;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(92,93,102,1);
            margin-bottom: 12px;
        }
        .cardClass {
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(190,192,204,1);
        }
        div  {
            display: block;
            font-size:11px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(24,144,255,1);
            line-height:16px;
            span {
                width:45px;
                height:20px;
                background:rgba(202,230,255,1);
                margin-right: 5px;
                margin-right: 3px;
                border-radius: 2px;
            }
        }
    }
}
//-------------------------------------------------------------------------
.member1 {
    display: flex;
    width: 369px;
    height: 90px;
    margin-left: 10px;
    margin-bottom: 15px;
    .member_1 {
        display: inline-block;
        width: 140px;
        height: 90px;
    }
    .member_right {
        display: inline-block;
        margin-top: 4px;
        margin-left: 6px;
        height: 86px;
        width: 222px;
        p {
            display: block;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(92,93,102,1);
            margin-bottom: 12px;
        }
        .cardClass {
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(190,192,204,1);
        }
        div  {
            display: block;
            font-size:11px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:#FA6400;
            line-height:16px;
            span {
                width:45px;
                height:20px;
                background:rgba(255,214,187,1);
                margin-right: 5px;
                margin-right: 3px;
                border-radius: 2px;
            }
        }
    }
}
//------------------------------------------------------------------------//
.member2 {
    display: flex;
    width: 369px;
    height: 90px;
    margin-left: 10px;
    margin-bottom: 15px;
    .member_1 {
        display: inline-block;
        width: 140px;
        height: 90px;
    }
    .member_right {
        display: inline-block;
        margin-top: 4px;
        margin-left: 6px;
        height: 86px;
        width: 222px;
        p {
            display: block;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(92,93,102,1);
            margin-bottom: 12px;
        }
        .cardClass {
            font-size:13px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(190,192,204,1);
        }
        div  {
            display: block;
            font-size:11px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:#5C5D66;
            line-height:16px;
            span {
                width:45px;
                height:20px;
                background:#DEDFE3;
                margin-right: 5px;
                margin-right: 3px;
                border-radius: 2px;
            }
        }
    }
}
//-------------------------------------------------------------------------
.t2 {
  width: 375px;
  height: 161px;
}
.tuo {
  border-radius: 3%;
  margin: 0 10px;
  width: 351px;
  height: 151px;
}
.beiJingf {
  padding-left: 10px;
  .beiJing {
    color: #8a8c99;
    font-size: 14px;
    vertical-align: middle;
  }
}

/deep/.date {
  .van-tabs__nav--line {
    .van-ellipsis {
      .van-tab__text {
        border: solid 1px #e5e5e5;
      }
    }
  }
}

.guanming {
  display: flex;
  h5 {
    width: 350px;
  }
}
.p {
  margin-left: 10px;
}
.working {
  display: flex;
  font-size: 13px;
  color: #5c5d66;
  img {
    margin-left: 10px;
    margin-right: 10px;
  }
  span {
    margin-right: 10px;
  }
}
.yuding {
  margin-bottom: 15px;
  margin-top: 15px;
  width: 172px;
  margin-left: 10px;
  color: #1890ff;
}
.jianjie {
  padding-left: 10px;
  border-left: #1890ff 5px solid;
  color: #5c5d66;
  font-size: 14px;
}
h5 {
  margin: 0;
  padding: 0;
}
/deep/.van-collapse-item .van-collapse-item__title--expanded::after {
  visibility: hidden;
}
/deep/.van-cell__title {
  text-align: center;
  background-color: #fff;
  padding-left: 120px;
  span {
    margin: 0;
    padding: 0;
  }
}
/deep/.van-collapse-item__title .van-cell__right-icon {
  margin: 0;
  padding-right: 150px;
}
.emptybox {
  background-color: #f5f6f7;
  height: 10px;
}
p {
  margin: 0;
  padding: 0;
  display: inline-block;
  font-size: 14px;
}
.reserve {
  padding: 10px;
  .bottom {
    display: flex;
    padding: 11px 0 1px 0;
    span {
      // vertical-align: top;
      padding-top: 4px;
      display: inline-block;
      // margin: 0 0 0 170px;
      font-size: 13px;
      color: #8a8c99;
    }
    img {
        margin-right: 6px;
    }
    .icon_arrow {
      padding-top: 3px;
    }
    .right {
      width: 250px;
    }
  }
}
.date {
  height: 100px;
}
/deep/.date .van-tabs__wrap--scrollable {
  height: 100px;
}
/deep/.date .van-ellipsis {
  font-weight: 400;
  white-space: pre-wrap;
  width: 100px;
  height: 98px;
  span {
    display: block;
    height: 90px;
    line-height: 23px;
    border: #1890ff 1px solid;
    padding-top: 6px;
    .getDay {
      font-size: 14px;
      margin-bottom: 3px;
      color: #8a8c99;
    }
    .van-button__text {
      padding: 0;
      border: 0;
    }
    .van-button--info {
      padding-top: 2px;
    }
  }
}
/deep/.van-tabs__nav--line {
  height: 100px;
  padding: 0;
}
.menpiao {
  width: 200px;
}
.reserve {
  /deep/.van-cell--clickable:active {
    background-color: #fff;
  }
  /deep/.van-cell__title {
    background-color: #fff;
    text-align: left;
    padding: 0;
    .van-cell__label {
      font-size: 14px;
      color: #fa6400;
    }
  }
  /deep/.van-cell {
    position: relative;
    .span {
      position: absolute;
      color: #bec0cc;
      font-size: 11px;
      left: 69px;
      top: 34px;
    }
  }
  /deep/.tabs {
    .van-tabs__nav--line {
      height: 56px;
    }
  }
}
.zuidi {
  .biaoti {
    border-left: #1890ff 5px solid;
    padding-left: 10px;
    width: 56px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(92, 93, 102, 1);
    line-height: 20px;
  }
  .neiRong {
    padding-left: 10px;
    width: 351px;
    height: 60px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(138, 140, 153, 1);
    line-height: 20px;
  }
}
</style>

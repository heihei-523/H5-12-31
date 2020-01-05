<template>
  <div>
    <div>
      <van-nav-bar :title="venueName" @click-left="onClickLeft">
        <van-icon name="cross" slot="left" />
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <img :src="signImg" alt />
      <div class="guanming">
        <h5>{{venueName}}</h5>
        <span>
          <img src="../../assets/icon_iphone.png" alt />
        </span>
      </div>
      <div class="working">
        <img src="../../assets/ic_list_time.png" alt="">
        <span>{{"工作日" + open + "-" + close}}</span>
        <span>{{"工作日" + open + "-" + close}}</span>
      </div>
      <van-button type="default" class="yuding">预定</van-button>
      <van-button type="default" class="yuding">购票</van-button>
      <div>
        <div></div>
        <h5 class="jianjie">场馆简介</h5>
        <p class="p">2020年1月4日开始至7日，我国自西向东出现大范围雨雪天气过程。中央气象台5日上午10点继续发布暴雪蓝色预警。
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
        <van-tabs v-model="active">
            <van-tab :title="item.sportTypeName" v-for="(item,index) in sites" :key="index"></van-tab>
        </van-tabs>
        <div class="bottom">
            <img src="../../assets/icon_yuding.png" alt="" >
            <p>场地预定</p>
            <span :value="date" @click="show = true">更多日期</span>
            <!-- <van-cell title="更多日期" :value="date" @click="show = true" /> -->
            <van-calendar v-model="show" @confirm="onConfirm"/>
            <img src="../../assets/icon_arrow.png" alt="" class="icon_arrow">
        </div>
        <div class="date">
            <van-tabs :line-height="0" :swipe-threshold="3">
                <van-tab v-for="index in 7" :title="'周 ' + index" :key="index">
                    <div slot="title">
                            {{targetMonth + 1 + '月' + (targetDate+index-1) + '日'}}
                        <br/>
                        <div v-if="index==1" class="getDay">(今天)</div>
                        <div v-else class="getDay">
                            {{"周"+(targetgetDay+index-1)}}
                        </div>
                        <van-button round type="info" size="small" plain color="#1890FF">预定</van-button>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
    <div class="emptybox"></div>
    <div class="reserve">
        <div class="bottom">
            <img src="../../assets/icon_menpiao.png" alt="" >
            <p class="menpiao">门票</p>
            <span>查看更多</span>
            <img src="../../assets/icon_arrow.png" alt="" class="icon_arrow">
        </div>
        <van-cell-group>
            <van-cell :title="ticket.ticketName" value="" :label="ticket.ticketPrice" v-for="ticket in tickets" :key="ticket.ticketId">
                <span slot="icon" class="span"><s>￥120.00</s></span>
                <van-button round type="info" size="small" plain color="#1890FF" slot="right-icon">购买单人票</van-button>
            </van-cell>
            <!-- <van-cell title="羽毛球-闪客单人票" value="" label="￥80.00">
                <span slot="icon" class="span"><s>￥100.00</s></span>
                <van-button round type="info" size="small" plain color="#1890FF" slot="right-icon">购买单人票</van-button>
            </van-cell> -->
        </van-cell-group>
    </div>
    <div class="emptybox"></div>
    <div class="reserve reserves">
        <div class="bottom">
            <img src="../../assets/icon_card.png" alt="" >
            <p class="menpiao">在线购买会员</p>
            <span class="examine">查看更多</span>
            <img src="../../assets/icon_arrow.png" alt="" class="icon_arrow">
        </div>
        <div>
            <div class="membership">
                <img src="../../assets/次卡备份.png" alt="">
            </div>
            <div class="character">
                <p class="card">会员次卡</p>
                <span>卡类型</span>
                <div>
                    <div>单次卡</div>
                    <div class="Manycard">多次卡</div>
                </div>
            </div>
        </div>
        <div class="TimeCards">
            <div class="TimeCard">
                <img src="../../assets/期限卡备份.png" alt="">
            </div>
            <div class="character">
                <p class="card cards">会员期限卡</p>
                <span>卡类型</span>
                <div class="charactersa">
                    <div class="nian">年卡</div>
                    <div class="ji">季卡</div>
                    <div class="yue">月卡</div>
                </div>
            </div>
        </div>
        <div>
            <div class="membership stored-value">
                <img src="../../assets/储值卡备份.png" alt="">
            </div>
            <div class="character">
                <p class="card chuzhi">会员储值卡</p>
                <span class="leixing">卡类型</span>
                <div class="zuihou">
                    <div class="xiaohezi">会员储值卡</div>
                </div>
            </div>
        </div>
    </div>
    <div class="zuidi">
        <div class="biaoti">场馆介绍</div>
        <div class="neiRong">重办省周华见收管江你展七思知山办共接北使次如
            相革素号角维三学济美众器米风时报关热条结思行工解华听种根交列者克入和厂什象议往石天能离我海的。
        </div>
        <div class="biaoti">购买须知</div>
        <div class="neiRong">
            好的界面设计并不始于图片，而是始于对人的理解，比如人们喜欢什么，为什么人们会试用某种特定的软件，他们可能与之怎样交互
        </div>
        <div>
            <img :src="signImg" alt="">
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
      tickets: []
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
    }
  }
}
</script>

<style lang="less" scoped>

/deep/.date {
    .van-tabs__nav--line {
        .van-ellipsis {
            .van-tab__text {
            border:solid 1px #E5E5E5;
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
.working {
    display: flex;
    font-size: 13px;
    color: #5C5D66;
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
    color: #1890FF;
}
.jianjie {
    padding-left: 10px;
    border-left: #1890FF 5px solid;
    color: #5C5D66;
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
    background-color: #F5F6F7;
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
        padding: 15px 0 15px 0;
        .p {
        width: 80px;
        font-size: 16px;
        vertical-align: top;
        padding-left: 15px;
        padding-top: 2px;
        // margin-left: 10px;
        }
        span {
            // vertical-align: top;
            padding-top: 4px;
            display: inline-block;
            margin: 0 0 0 170px;
            font-size: 13px;
            color: #8A8C99;
        }
        .icon_arrow {
            padding-top: 3px;
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
        border: #1890FF 1px solid;
        padding-top: 6px;
        .getDay {
            font-size: 14px;
            margin-bottom: 3px;
            color: #8A8C99;
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
    margin-right: 50px;
    // width: 200px;
    // vertical-align:middle;
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
            color: #FA6400;
        }
    }
    /deep/.van-cell {
        position: relative;
        .span {
            position: absolute;
            color: #BEC0CC;
            font-size: 11px;
                left: 69px;
                top: 34px;
        }
    }
}
.reserve {
        .membership {
        // display: inline-block;
        float: left;
        margin-right: 10px;
        }
        .character {
            position: relative;
            .card {
                font-size: 16px;
                font-weight: 500;
                color: #5C5D66;
                font-family: "SimHei";
            }
            span {
                display: block;
                font-size: 13px;
                color: #BEC0CC;
            }
            div {
                padding-top: 2px;
                color: #1890FF;
                background-color: #CAE6FF;
                text-align: center;
                font-size: 11px;
                height: 18px;
                width: 45px;
                // border-right: #fff 1px solid;
                border-right: 5px;
                display: inline-block;
            }
            .Manycard {
                position: absolute;
                top: 60px;
                left: 200px;
            }
        }
    .bottom {
        .examine {
        margin: 0 0 0 100px;
       }
    }
    .TimeCards {
        position: relative;
        .TimeCard {
            position: absolute;
            left: 0;
            top: 15px;
        }
        .cards {
            position: absolute;
            top: 18px;
        }
        span {
            position: absolute;
            top: 40px;
            left: 147px;
        }
        .charactersa {
            width: 0;
            position: absolute;
            .yue {
                background-color: #FFD6BB;
                color: #FA6400;
                position: absolute;
                left: 0;
                top:71px;
            }
            .nian {
                background-color: #FFD6BB;
                color: #FA6400;
                position: absolute;
                left: 50px;
                top:71px
            }
            .ji {
                background-color: #FFD6BB;
                color: #FA6400;
                position: absolute;
                left: 100px;
                top: 71px;
            }
        }
    }
    .stored-value {
        position: relative;
        img {
            position: absolute;
            left: -150px;
            top: 112px;
        }
    }
    .character {
        position: relative;
            .chuzhi {
            position: absolute;
            left: 150px;
            top: 117px;
           }
           .leixing {
               position: absolute;
               left: 148px;
               top: 142px;
           }
           .zuihou {
               width: 0;
               .xiaohezi {
               position: absolute;
               background-color: #DEDFE3;
               color: #5C5D66;
               width: 67px;
               height: 20px;
               border-radius: 5%;
               top: 172px;
               left: 149px;
                }
            }

        }
}
.reserves {
    overflow: hidden;
    height: 370px;
}
.zuidi {
    .biaoti {
        border-left: #1890FF 5px solid;
        padding-left: 10px;
        width:56px;
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(92,93,102,1);
        line-height:20px;
    }
    .neiRong {
        padding-left: 10px;
        width:351px;
        height:60px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(138,140,153,1);
        line-height:20px;
    }
}
</style>

<template>
  <div>
    <!-- 标题头部 -->
      <van-nav-bar
        title="场地预定"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon name="cross" slot="left"/>
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
      <!-- 星期栏 -->
      <van-tabs v-model="active" class="dateTab" :swipe-threshold="7">
        <van-tab v-for="item in 7" :key="item">
          <div class="dateDiv" slot="title">
            <div class="week">{{'星期'+item}}</div>
            <div class="mouth">10/15</div>
          </div>
          <div>
            <!-- 表格内容 -->
            <!-- {{'内容'+item}} -->
            <!-- <table-a></table-a> -->
            <div>
              <div class="table">
                  <van-tabs swipeable :swipe-threshold="4" line-height="0">
                    <van-tab v-for="(item,index) in placeList" :key="index">
                        <div slot="title" class="table-a">
                            <div>{{item.itemName}}号场</div>
                            <div class="table-b"
                                v-for="(item,index) in item.stockList"
                                :key="index"
                                >
                                {{item.isLock ? '已售出' : '¥'+item.salePrice }}
                            </div>
                        </div>
                    </van-tab>
                  </van-tabs>
              </div>
              <img src="../../assets/tuli@2x.png" alt="">
          </div>
            <!-- 表格内容 -->

          </div>
        </van-tab>
      </van-tabs>
      <!-- <van-tabs v-model="active" swipeable>
        <van-tab v-for="index in 10" :title="'选项 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs> -->
  </div>
</template>

<script>
// import tableA from '@/components/table'
import { GroundBlock } from '../../api/mock'
export default {
  name: 'place',
  // components: {
  //   tableA
  // },
  data () {
    return {
      active: 0,
      placeList: []
    }
  },
  created () {
    this.onload()
  },
  methods: {
    onClickLeft () {
      // navbar 返回
    },
    onClickRight () {
      // navbar 菜单
    },
    async onload () {
      const res = await GroundBlock()
      console.log(res)
      this.placeList = res.data.itemList
    }
  }
}
</script>

<style lang='less' scoped>
  .van-nav-bar /deep/ .van-icon{
    color:#5c5d66;
    font-size: 24px;
  }
  .van-tabs /deep/ .van-tabs__wrap{
    height: 49px;
    .van-tab__text{
      line-height: 32px;
    }
    .dateDiv{
    //  height: 20px;
      .week, .mouth{
        height: 15px;
      }
    }
  }
  .table {
        padding-left: 55px;
        height: 467px;
        background-color: #00f;
        .van-tabs /deep/ .van-tabs__wrap{
            height: 467px;
           .van-tab{
            width: 72px;
           }
        }
        .table-b{
            height: 32px;
            border: 1px #C7C7CC solid;
            border-bottom: 0
        }

    }
    img{
        width:375px;
        background:rgba(245,246,247,1);
    }

</style>

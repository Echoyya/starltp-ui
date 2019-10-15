<template>
    <div class="translate-banner clear">
        <div class="banner">
            <img :src="banner" />
            <div class="banner-info">
                <div v-for="(item,index) in info.split('|')" :key="index" class="item">{{item}}</div>
            </div>
        </div>
        <div class="order-content">
            <div class="title">
                <i class="iconfont dingdan">&#xe601;</i> {{title}}
            </div>
            <div class="steps">
                <div class="step active"><i class="iconfont">&#xe607;</i>{{step[0]}}</div>
                <i class="iconfont xiangyou">&#xe615;</i>
                <div class="step"><i class="iconfont">&#xe609;</i>{{step[1]}}</div>
                <i class="iconfont xiangyou">&#xe615;</i>
                <div class="step"><i class="iconfont">&#xe60a;</i>{{step[2]}}</div>
                <i class="iconfont xiangyou">&#xe615;</i>
                <div class="step"><i class="iconfont">&#xe606;</i>{{step[3]}}</div>
                <i class="iconfont xiangyou">&#xe615;</i>
                <div class="step"><i class="iconfont">&#xe608;</i>{{step[4]}}</div>
                <i class="iconfont xiangyou">&#xe615;</i>
                <div class="step"><i class="iconfont">&#xe60b;</i>{{step[5]}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'title',
    'step',
    'banner',
    'info'
  ]
}
</script>
<style lang="less">
.translate-banner {
    .banner {
        position: relative;
        width: 100%;
        img {
            display: block;
            font-size: 0;
            width: 100%;
        }
        .banner-info {
          position: absolute;
          width: 1092px;
          font-size: 20px;
          color: rgba(255,255,255,0.9);
          top: 50%;
          margin-top: -15px;
          left: 50%;
          margin-left: -546px;
          .item{
            display: inline-block;
            &:not(:last-child){
              &:after{
                content: '|';
                padding-left: 25px;
                padding-right: 25px;
              }
            }
          }
        }
    }
    .order-content {
        background-color: #ffffff;
        width: 1092px;
        margin: 20px auto 0;
        padding: 20px 30px;
        text-align: left;
        .title {
            text-align: left;
            color: #a27c4c;
            font-size: 15px;
            font-weight: bold;
            .dingdan{
              font-size: 20px;
            }
        }
        .steps {
            display: inline-flex;
            margin: 20px 30px;
            padding-bottom: 20px;
            text-align: left;
            border-bottom: 1px solid #e4e4e4;
            .step {
                display: inline-block;
                color: #999999;
                line-height: 1.8;
                .iconfont {
                    font-size: 16px;
                    margin-right: 8px;
                }
            }
            .xiangyou {
                font-size: 14px;
                line-height: 1.8;
                padding: 2px 20px 0;
            }
            .active {
                color: #a27c4c;
            }
            .iconfont {
                font-size: 14px;
            }
        }
    }
}
</style>

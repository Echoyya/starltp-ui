<template>
    <div class="index-fixed">
        <div class="item">
            <i class="iconfont">&#xe64d;</i><p>{{$t('index.fixed.tel')}}</p>
            <div class="float">
                <div class="content">
                    <img src="~static/tel.jpg" height="84px">
                </div>
            </div>
        </div>
        <div class="item">
            <i class="iconfont">&#xe63f;</i><p>{{$t('index.fixed.wechat')}}</p>
            <div class="float">
                <div class="content">
                    <img src="~static/qrcode.jpg" width="168px">
                </div>
            </div>
        </div>
        <!-- <div class="item">
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2246872773&site=qq&menu=yes">
        <i class="iconfont">&#xe612;</i><p>{{$t('index.fixed.qq')}}</p>
        <div class="float">
          <div class="content">
            <img src="~static/qqqrcode.jpg" width="168px">
          </div>
        </div>
      </a>
    </div> -->
        <div class="item">
            <i class="iconfont">&#xe635;</i><p>{{$t('index.fixed.order')}}</p>
            <div class="float">
                <ul class="content order">
                    <nuxt-link class="nav-item" tag="li" :to="$i18n.path('video')" style="margin-top: 12px"><a>{{$t('menu.shortVideo')}}</a></nuxt-link>
                    <nuxt-link class="nav-item" tag="li" :to="$i18n.path('thematic')" ><a>{{$t('menu.shortThematic')}}</a></nuxt-link>
                    <nuxt-link class="nav-item" tag="li" :to="$i18n.path('interpretation')" ><a>{{$t('menu.shortInterpretation')}}</a></nuxt-link>
                    <nuxt-link class="nav-item" tag="li" :to="$i18n.path('dubbing')" ><a>{{$t('menu.shortDubbing')}}</a></nuxt-link>
                </ul>
            </div>
        </div>
        <div class="item translator" @click="gotoTranslator">
            <i class="iconfont">&#xe614;</i><p>{{$t('index.fixed.translator')}}</p>
        </div>
    </div>
</template>
<script>
  import api from '../../utils/api'
  import utils from '../../utils/utils'

  export default {
    methods: {
      gotoTranslator () {
        utils.toTranslator(api.translatorsiteURL)
      }
    }
  }
</script>
<style lang="less">
.index-fixed {
  position: fixed;
  top:66%;
  left:50%;
  margin-top: -188px;
  margin-left: 546px;
  .item {
    position: relative;
    width: 84px;
    height: 84px;
    background-color: #ffffff;
    margin-bottom: 10px;
    box-shadow: 0 0 50px #999999;
    color: #a27c4c;
    border-radius: 2px;
    cursor: pointer;
    .iconfont {
      font-size: 32px;
      line-height: 60px;
    }
    p {
      font-size: 12px;
    }
    .float {
      position: absolute;
      display: none;
      top: 0;
      right: 84px;
      padding-right: 15px;
      .content {
        background-color: #ffffff;
        box-shadow: 0 0 50px #999999;
        img {
          font-size: 0;
          display: block;
        }
        .nav-item {
          text-align:left;
          line-height: 20px;
          margin-bottom: 12px;
          word-break: keep-all;
          & a:hover{
            padding-bottom: 3px;
            border-bottom: 1px solid #a27c4c;
          }
        }
        .tel {
          width: 150px;
          line-height: 40px;
          margin-top: 30px;
        }
        &.order{
          word-break: keep-all;
          padding: 5px 15px;
        }
      }
    }
    &:hover{
      .float {
        display: block;
      }
    }
  }
  .item.translator {
    color: #a27c4c;
  }
}
@media screen and (max-width: 1260px) {
  .index-fixed {
    margin-left: 0;
    left: auto;
    right: 15px;
  }
}
@media screen and (max-height: 800px) {
  .index-fixed {
    top: auto;
    bottom: 90px;
  }
}
</style>

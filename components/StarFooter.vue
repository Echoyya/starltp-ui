<template>
    <div class="footer">
        <div class="content">
            <div class="foot-info clear">
                <div class="left-content clear">
                    <ul class="foot-nav-menu clear" :class="{'cn':$i18n.locale=='cn'}">
                        <li class="title">{{$t('index.business.title')}}</li>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('video')" ><a>{{$t('menu.shortVideo')}}</a></nuxt-link>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('thematic')" ><a>{{$t('menu.shortThematic')}}</a></nuxt-link>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('interpretation')" ><a>{{$t('menu.shortInterpretation')}}</a></nuxt-link>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('dubbing')" ><a>{{$t('menu.shortDubbing')}}</a></nuxt-link>
                    </ul>
                    <ul class="foot-nav-menu clear" :class="{'cn':$i18n.locale=='cn'}">
                        <li class="title">{{$t('footer.service')}}</li>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('service/fees')" ><a>{{$t('menu.fees')}}</a></nuxt-link>
                        <!-- <nuxt-link class="nav-item" tag="li" :to="$i18n.path('service/guide')" ><a>译员指南</a></nuxt-link> -->
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('service/business')" ><a>{{$t('menu.shortBusiness')}}</a></nuxt-link>
                    </ul>
                    <ul class="foot-nav-menu clear" :class="{'cn':$i18n.locale=='cn'}">
                        <li class="title">{{$t('footer.group')}}</li>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('system/partner')" ><a>{{$t('menu.partner')}}</a></nuxt-link>
                        <!-- <nuxt-link class="nav-item" tag="li" :to="$i18n.path('system/interpreter')" ><a>资深译员</a></nuxt-link> -->
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('system/certification')" ><a>{{$t('menu.certification')}}</a></nuxt-link>
                    </ul>
                    <ul class="foot-nav-menu clear" :class="{'cn':$i18n.locale=='cn'}">
                        <li class="title">{{$t('footer.about')}}</li>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('about')" ><a>{{$t('menu.about')}}</a></nuxt-link>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('about/case')" ><a>{{$t('menu.case')}}</a></nuxt-link>
                        <nuxt-link class="nav-item" tag="li" :to="$i18n.path('about/join-us')" ><a>{{$t('menu.join')}}</a></nuxt-link>
                    </ul>
                </div>
                <div class="divider clear"></div>
                <div class="right-content clear">
                    <img src="~static/qrcode.jpg">
                    <div class="address">
                        <p><i class="iconfont">&#xe9ff;</i>{{$t('footer.address')}}</p>
                        <p><i class="iconfont">&#xe604;</i>+86-10-53012890</p>
                        <p><i class="iconfont">&#xe692;</i><a href="mailto:nts@startimes.com.cn">nts@startimes.com.cn</a></p>
                        <p><i class="iconfont">&#xe611;</i>100176</p>
                    </div>
                </div>
            </div>
            <div class="copy-right clear">
                Copyright @2017-2018 StarTimes All Right Reserved
            </div>
        </div>
    </div>
</template>
<style lang="less">
.footer {
  width: 100%;
  background-color: #ffffff;
  .content{
    margin: 0 auto;
    width: 1000px;
    .foot-info{
      width: 100%;
      padding: 60px 0 40px;
      padding-left: 0\0; // 兼容IE8的写法
      padding-right: 0\0; // 兼容IE8的写法
      display: flex;
      .left-content,.right-content{
        width: 599px;
        display: flex;
        float: left;
      }
      .foot-nav-menu{
        float: left;
        margin-right: 30px;
        text-align: center;
        .title{
          font-size: 14px;
          margin-bottom: 15px;
        }
        .nav-item{
          color: #999999;
          line-height: 1.6;
          a{
            font-size: 12px;
            color: #999999;
            text-decoration: none;
          }
        }
        &:last-child{
          margin-right: 10px;
        }
        &.cn {
          margin-left: 0;
          width: 20%;
          &:last-child{
            margin-right: 50px;
          }
        }
      }
      .right-content{
        float: right;
        display: flex;
        padding: 10px 0 0 65px;
        img{
          display: block;
          float: left;
          width: 88px;
          height: 88px;
          border: 2px solid #ffffff;
        }
        .address{
          margin-left: 20px;
          float: left;
          p{
            .iconfont{
              margin-right: 10px;
            }
            font-size: 12px;
            line-height: 1.2;
            margin-bottom: 5px;
          }
        }
      }
      .divider{
        float: left;
        width: 2px;
        height: 90px;
        margin-top: 10px;
        background: #e4e4e4;
        border: 0;
      }
    }
    .copy-right{
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #999999;
        border-top: 1px solid #e4e4e4;
        font-size: 12px;
    }
  }
}
</style>

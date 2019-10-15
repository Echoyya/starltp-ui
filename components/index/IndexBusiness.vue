<template>
    <div class="business">
        <div class="index-title">
            {{$t('index.business.title')}}
        </div>
        <div class="info clear">
            <div class="business-item left-margin clear">
                <nuxt-link class="business-link" :to="$i18n.path('video')">
                    <i class="iconfont">&#xe64c;</i>
                    <div class="content">
                        <h3>{{$t('menu.video')}}</h3>
                        <p>{{$t('index.business.video')}}</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="business-item right-margin clear">
                <nuxt-link class="business-link" :to="$i18n.path('thematic')">
                    <i class="iconfont">&#xe6f9;</i>
                    <div class="content">
                        <h3>{{$t('menu.thematic')}}</h3>
                        <p>{{$t('index.business.thematic')}}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <div class="info clear">
            <div class="business-item left-margin clear">
                <nuxt-link class="business-link" :to="$i18n.path('interpretation')">
                    <i class="iconfont">&#xe631;</i>
                    <div class="content">
                        <h3>{{$t('menu.interpretation')}}</h3>
                        <p>{{$t('index.business.interpretation')}}</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="business-item right-margin clear">
                <nuxt-link class="business-link" :to="$i18n.path('dubbing')">
                    <i class="iconfont">&#xe60d;</i>
                    <div class="content">
                        <h3>{{$t('menu.dubbing')}}</h3>
                        <p>{{$t('index.business.dubbing')}}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.business {
    .info {
        width: 1200px;
        margin: 0 auto;
        .business-item {
            display: inline-flex;
            display: inline-block/0;
            margin-top: 10px;
            margin-bottom: 50px;
            width: 460px;
            float: left;
            .business-link{
              display: inline-flex;
              display: inline-block/0;
              color: #000;
            }
            .iconfont {
                font-size: 50px;
            }
            .content {
                display: inline-block;
                text-align:justify;
                padding: 0 50px;
                & h3 {
                    color: #a27c4c;
                    font-size: 16px;
                    font-weight: normal;
                }
                & p {
                    margin-top: 10px;
                    font-size: 12px;
                    color: #999999;
                    line-height: 1.8;
                }
            }
            &.left-margin{
              margin-left: 140px;
            }
            &.right-margin{
              margin-left: 60px;
            }
        }
    }
}
</style>

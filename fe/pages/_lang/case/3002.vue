<template>
    <div class="container page-default">
        <div class="page-nav">
            {{$t('footer.about')}} > <nuxt-link :to="$i18n.path('about/case')">{{$t('aboutUs.cases')}}</nuxt-link> > {{$t('case.caseDetail')}}
        </div>
        <div class="case-detail">
            <div class="case-video">
                <video-player video="https://newtranstar.oss-cn-beijing.aliyuncs.com/SheJianShangDeZhongGuo2/171907.m3u8" />
            </div>
            <div class="case-content">
                <p class="case-title">{{$t('case.3002.title')}}</p>
                <p><span>{{$t('case.detail')}}</span>{{$t('case.3002.desc')}}</p>
                <p><span>{{$t('case.language')}}</span>{{$t('case.3002.language')}}</p>
                <p><span>{{$t('case.evaluation')}}</span>{{$t('case.3002.comment')}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import VideoPlayer from '~/components/VideoPlayer'

export default {
  layout: 'static',
  components: {
    VideoPlayer
  }
}
</script>

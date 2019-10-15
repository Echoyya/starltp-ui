<template>
  <div class="container page-default">
    <div class="page-nav">
      {{$t('footer.about')}} > <nuxt-link :to="$i18n.path('about/case')">{{$t('aboutUs.cases')}}</nuxt-link> > {{$t('case.caseDetail')}}
    </div>
    <div class="case-detail">
      <div class="case-video">
        <video-player video="https://newtranstar.oss-cn-beijing.aliyuncs.com/huaqiangu/143456.m3u8" />
      </div>
      <div class="case-content">
        <p class="case-title">{{$t('case.3001.title')}}</p>
        <p><span>{{$t('case.detail')}}</span>{{$t('case.3001.desc')}}</p>
        <p><span>{{$t('case.language')}}</span>{{$t('case.3001.language')}}</p>
        <p><span>{{$t('case.cycle')}}</span>{{$t('case.3001.time')}}</p>
        <p><span>{{$t('case.evaluation')}}</span>{{$t('case.3001.comment')}}</p>
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

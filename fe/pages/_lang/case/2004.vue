<template>
    <div class="container page-default">
        <div class="page-nav">
            {{$t('footer.about')}} > <nuxt-link :to="$i18n.path('about/case')">{{$t('aboutUs.cases')}}</nuxt-link> > {{$t('case.caseDetail')}}
        </div>
        <div class="case-detail">
            <div class="case-img">
                <img src="~static/case/thematic/2004-1.png" />
            </div>
            <div class="case-content">
                <p class="case-title">{{$t('case.2004.title')}}</p>
                <p><span>{{$t('case.detail')}}</span>{{$t('case.2004.desc')}}</p>
                <p><span>{{$t('case.language')}}</span>{{$t('case.2004.language')}}</p>
                <p><span>{{$t('case.wordNum')}}</span>{{$t('case.2004.sets')}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  layout: 'static'
}
</script>

<template>
    <div class="container page-default">
        <div class="page-nav">
            {{$t('footer.about')}} > <nuxt-link :to="$i18n.path('about/case')">{{$t('aboutUs.cases')}}</nuxt-link> > {{$t('case.caseDetail')}}
        </div>
        <div class="case-detail">
            <div class="case-img">
                <img src="~static/case/interpretation/4001-1.jpg" />
            </div>
            <div class="case-content">
                <p class="case-title">{{$t('case.4001.title')}}</p>
                <p><span>{{$t('case.detail')}}</span>{{$t('case.4001.desc')}}</p>
                <p><span>{{$t('case.language')}}</span>{{$t('case.4001.language')}}</p>
                <p><span>{{$t('case.time')}}</span>{{$t('case.4001.time')}}</p>
                <p><span>{{$t('case.evaluation')}}</span>{{$t('case.4001.comment')}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  layout: 'static'
}
</script>

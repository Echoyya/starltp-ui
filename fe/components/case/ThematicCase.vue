<template>
    <div class="case-list">
        <div class="case-group">
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/2001')">
                    <img src="~static/case/thematic/2001.png" />
                    <p>{{$t('case.2001.shortTitle')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/2002')">
                    <img src="~static/case/thematic/2002.png" />
                    <p>{{$t('case.2002.shortTitle')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/2003')">
                    <img src="~static/case/thematic/2003.png" />
                    <p>{{$t('case.2003.shortTitle')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/2004')">
                    <img src="~static/case/thematic/2004.png" />
                    <p>{{$t('case.2004.shortTitle')}}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="less">
</style>

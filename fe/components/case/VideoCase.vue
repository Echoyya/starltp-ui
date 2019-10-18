<template>
    <div class="case-list">
        <div class="case-group">
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/1001')">
                    <img src="~static/case/video/1001.jpg" />
                    <p>{{$t('case.1001.title')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/1002')">
                    <img src="~static/case/video/1002.jpg" />
                    <p>{{$t('case.1002.title')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/1003')">
                    <img src="~static/case/video/1003.jpg" />
                    <p>{{$t('case.1003.title')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/1004')">
                    <img src="~static/case/video/1004.jpg" />
                    <p>{{$t('case.1004.title')}}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="less">
</style>

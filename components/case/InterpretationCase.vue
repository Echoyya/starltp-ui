<template>
    <div class="case-list">
        <div class="case-group">
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/4001')">
                    <img src="~static/case/interpretation/4001.jpg" />
                    <p>{{$t('case.4001.short')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/4002')">
                    <img src="~static/case/interpretation/4002.jpg" />
                    <p>{{$t('case.4002.short')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/4003')">
                    <img src="~static/case/interpretation/4003.jpg" />
                    <p>{{$t('case.4003.short')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/4004')">
                    <img src="~static/case/interpretation/4004.jpg" />
                    <p>{{$t('case.4004.short')}}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="less">
</style>

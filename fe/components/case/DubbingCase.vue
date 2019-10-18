<template>
    <div class="case-list">
        <div class="case-group">
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/3001')">
                    <img src="~static/case/dubbing/3001.jpg" />
                    <p>{{$t('case.3001.title')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/3002')">
                    <img src="~static/case/dubbing/3002.jpg" />
                    <p>{{$t('case.3002.title')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/3003')">
                    <img src="~static/case/dubbing/3003.jpg" />
                    <p>{{$t('case.3003.title')}}</p>
                </nuxt-link>
            </div>
            <div class="case-item">
                <nuxt-link :to="$i18n.path('case/3004')">
                    <img src="~static/case/dubbing/3004.jpg" />
                    <p>{{$t('case.3004.title')}}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="less">
</style>

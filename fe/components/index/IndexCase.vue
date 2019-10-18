<template>
    <div class="case">
        <div class="index-title">{{$t('index.case.title')}}</div>
        <div class="case-title">
            <span :class="{active:type==1}" @click="SET_TYPE(1)">{{$t('menu.video')}}</span>
            <i class="iconfont">&#xe7f9;</i>
            <span :class="{active:type==2}" @click="SET_TYPE(2)">{{$t('menu.thematic')}}</span>
            <i class="iconfont">&#xe7f9;</i>
            <span :class="{active:type==3}" @click="SET_TYPE(3)">{{$t('menu.interpretation')}}</span>
            <i class="iconfont">&#xe7f9;</i>
            <span :class="{active:type==4}" @click="SET_TYPE(4)">{{$t('menu.dubbing')}}</span>
        </div>
        <div v-if="type==1" class="case-list">
            <div v-for="(item,index) in CASE_VIDEO" :key="index" class="case-item">
                <img :src="getUrl(item)" />
                <div class="mask">
                    <h3>{{language === 'CHINESE' ? item.subContents[0].title : item.subContents[1].title}}</h3>
                    <p>{{language === 'CHINESE' ? item.subContents[0].briefIntroduction : item.subContents[1].briefIntroduction}}</p>
                    <nuxt-link
                        class="detail"
                        :to="{ path:$i18n.path('case'), query:{ id: item.id}}"
                    >{{$t('menu.checkDetail')}}</nuxt-link>
                </div>
            </div>
        </div>
        <div v-if="type==2" class="case-list">
            <div v-for="(item,index) in CASE_THEMATIC" :key="index" class="case-item">
                <img :src="getUrl(item)" />
                <div class="mask">
                    <h3>{{language === 'CHINESE' ? item.subContents[0].title : item.subContents[1].title}}</h3>
                    <p>{{language === 'CHINESE' ? item.subContents[0].briefIntroduction : item.subContents[1].briefIntroduction}}</p>
                    <nuxt-link
                        class="detail"
                        :to="{ path:$i18n.path('case'), query:{ id: item.id}}"
                    >{{$t('menu.checkDetail')}}</nuxt-link>
                </div>
            </div>
        </div>
        <div v-if="type==3" class="case-list">
            <div v-for="(item,index) in CASE_INTERPRETATION" :key="index" class="case-item">
                <img :src="getUrl(item)" />
                <div class="mask">
                    <h3>{{language === 'CHINESE' ? item.subContents[0].title : item.subContents[1].title}}</h3>
                    <p>{{language === 'CHINESE' ? item.subContents[0].briefIntroduction : item.subContents[1].briefIntroduction}}</p>
                    <nuxt-link
                        class="detail"
                        :to="{ path:$i18n.path('case'), query:{ id: item.id}}"
                    >{{$t('menu.checkDetail')}}</nuxt-link>
                </div>
            </div>
        </div>
        <div v-if="type==4" class="case-list">
            <div v-for="(item,index) in CASE_DUBBING" :key="index" class="case-item">
                <img :src="getUrl(item)" />
                <div class="mask">
                    <h3>{{language === 'CHINESE' ? item.subContents[0].title : item.subContents[1].title}}</h3>
                    <p>{{language === 'CHINESE' ? item.subContents[0].briefIntroduction : item.subContents[1].briefIntroduction}}</p>
                    <nuxt-link
                        class="detail"
                        :to="{ path:$i18n.path('case'), query:{ id: item.id}}"
                    >{{$t('menu.checkDetail')}}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import api from '../../utils/api'
import { getContent } from '../../service/lcmsService'

export default {
    data() {
        return {
            length: 0,
            staticUrl: api.staticUrl,
            CASE_VIDEO: [],
            CASE_THEMATIC: [],
            CASE_INTERPRETATION: [],
            CASE_DUBBING: [],
            language: ''
        }
    },
    computed: {
        ...mapState(['type'])
    },
    mounted() {
        this.language = this.$route.path.includes('/en/') ? 'ENGLISH' : 'CHINESE'
        const _this = this
        const typeArr = ['CASE_VIDEO', 'CASE_THEMATIC', 'CASE_INTERPRETATION', 'CASE_DUBBING']
        typeArr.map(item => {
            const params = {
                page_number: 1,
                page_size: 4,
                sort_property: 'SHOWORDER',
                sort_direction: 'ASC',
                contentModule: item,
                publishStatus: 'PUBLISHED'
            }
            getContent(params, function(res) {
                _this[item] = res.datas
                if (item === 'CASE_VIDEO') {
                    _this.length = 4
                    console.log(_this.item)
                }
            })
        })
    },
    methods: {
        ...mapMutations(['SET_TYPE']),
        getUrl(content) {
            const url = this.language === 'CHINESE' ? content.subContents[0].posterResourceUrl : content.subContents[1].posterResourceUrl
            return this.staticUrl + url
        }
    }
}
</script>
<style lang="less">
.case {
    background-color: #f7f7f7;
    .index-title {
        padding-bottom: 30px;
    }
    .case-title {
        color: #a27c4c;
        font-size: 16px;
        padding-bottom: 20px;
        span {
            cursor: pointer;
        }
        .active {
            color: #000000;
        }
    }
    .iconfont {
        font-size: 18px;
        margin: 0 5px;
    }
    .case-list {
        width: 1092px;
        margin: 0 auto;
        padding-bottom: 40px;
        .case-item {
            position: relative;
            display: inline-block;
            width: 260px;
            height: 350px;
            cursor: pointer;
            &:not(:last-child) {
                margin-right: 15px;
            }
            img {
                display: block;
                font-size: 0;
                width: 100%;
                height: 100%;
            }
            .mask {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 20;
                background-color: rgba(198, 167, 128, 0.9);
                color: rgba(255, 255, 255, 0.9);
                h3 {
                    margin-top: 80px;
                    font-size: 16px;
                    font-weight: normal;
                    padding: 0 20px;
                }
                p {
                    margin: 20px 0 50px;
                    padding: 0 50px;
                    font-size: 12px;
                    height: 65px;
                    line-height: 1.8;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }
                .detail {
                    display: inline-block;
                    position: absolute;
                    bottom: 40px;
                    left: 65px;
                    cursor: pointer;
                    color: rgba(255, 255, 255, 0.9);
                    width: 130px;
                    height: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    line-height: 30px;
                    background: transparent;
                }
            }
            &:hover {
                .mask {
                    display: block;
                }
            }
        }
    }
}
</style>

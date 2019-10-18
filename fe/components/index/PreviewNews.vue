<template>
    <div class="index-news">
        <div class="title">
            <span>{{$t('index.news.title')}}</span>
        </div>
        <div id="newsList">
            <div class="list">
                <div id="list1">
                    <ul>
                        <li v-for="(item,index) in newsList" :key="index">
                            <nuxt-link
                                :to="{ path:$i18n.path('previewNew'), query:{ id: item.id}}"
                            >{{language === 'CHINESE' ? item.subContents[0].title : item.subContents[1].title}}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div id="list2">
                    <ul>
                        <li v-for="(item,index) in newsList" :key="index">
                            <nuxt-link
                                :to="{ path:$i18n.path('previewNew'), query:{ id: item.id}}"
                            >{{language === 'CHINESE' ? item.subContents[0].title : item.subContents[1].title}}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getContent } from '../../service/lcmsService'
let timeout = null

export default {
    data() {
        return {
            newsList: [],
            language: ''
        }
    },
    mounted() {
        const _this = this
        this.language = this.$route.path.includes('/en/') ? 'ENGLISH' : 'CHINESE'
        const params = {
            page_number: 1,
            page_size: 999,
            sort_property: 'SHOWORDER',
            sort_direction: 'ASC',
            contentModule: 'LATEST_NEWS'
        }
        getContent(params, function(res) {
            _this.newsList = res.datas
            const newsList = document.getElementById('newsList')
            const list1 = document.getElementById('list1')
            const list2 = document.getElementById('list2')
            timeout = setInterval(_this.marquee.bind(_this, newsList, list1, list2), 30)
            newsList.onmouseout = function() {
                timeout = setInterval(_this.marquee.bind(_this, newsList, list1, list2), 30)
            }
            newsList.onmouseover = function() {
                clearInterval(timeout)
            }
        })
    },
    methods: {
        marquee(newsList, list1, list2) {
            if (newsList.scrollLeft - list2.offsetWidth >= 0) {
                newsList.scrollLeft -= list1.offsetWidth
            } else {
                newsList.scrollLeft++
            }
        }
    }
}
</script>

<style lang="less">
.index-news {
    width: 100%;
    padding: 0 40px 5px;
    border-bottom: 1px solid #e7e7e7;
    position: relative;
    .title {
        width: 900px;
        margin: 0 auto;
        text-align: left;
        line-height: 30px;
        height: 30px;
        margin-bottom: -30px;
        span {
            background-color: #fff;
            z-index: 99;
            font-size: 12px;
            color: #696868;
            padding-right: 15px;
        }
    }
    #newsList {
        width: 900px;
        margin: 0 auto;
        overflow: hidden;
        .list {
            width: 8000%;
            height: 30px;
            div {
                float: left;
            }
            ul {
                float: left;
                height: 30px;
                overflow: hidden;
                zoom: 1;
                li {
                    float: left;
                    line-height: 30px;
                    list-style: none;
                    a {
                        margin-right: 30px;
                        font-size: 12px;
                        color: #696868;
                        // text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>

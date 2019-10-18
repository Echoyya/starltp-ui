<template>
  <div class="container page-default">
    <div class="page-nav">
      {{$t('footer.about')}} > <nuxt-link :to="$i18n.path('about/previewCase')">{{$t('aboutUs.cases')}}</nuxt-link> > {{$t('case.caseDetail')}}
    </div>
    <div class="case-detail">
      <div class="detail" v-html="language === 'CHINESE' ? content.subContents[0].details : content.subContents[1].details"></div>
    </div>
  </div>
</template>

<script>
  import { getContentById } from '../../service/lcmsService'
  export default {
    layout: 'staticPreview',
    data () {
      return {
        content: {
          subContents: [{}, {}]
        }
      }
    },
    created () {
      this.language = this.$route.path.indexOf('/en/') > -1 ? 'ENGLISH' : 'CHINESE'
      let id = this.$route.query.id
      const params = {
        id: id
      }
      const _this = this
      getContentById(params, function (res) {
        _this.content = res
      })
    }
  }
</script>

<style lang="less">
  .news.content{
    width: 1092px;
    margin: 0 auto 40px;
    background: #ffffff;
    padding: 20px;
    .title{
      margin-top: 20px;
      text-align: center;
      color: #a27c4c;
    }
    .info {
      text-align: center;
      margin-top: 10px;
      .date {
        padding: 0 15px;
        color: #a27c4c;
      }
      .author{
        padding: 0 15px;
        color: #8c8c8c;
      }
    }
    .detail {
      margin-top: 20px;
      p {
        margin: 15px auto;
      }
      .img {
        text-align: center;
        span {
          display: block;
          color: #8c8c8c;
        }
        img{
          width: 624px;
        }
      }
      .text {
        width: 960px;
        line-height: 2.2;
        text-indent: 28px;
      }
    }
  }
</style>

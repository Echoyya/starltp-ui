<template>
    <div class="news content">
        <h3 class="title">{{language === 'CHINESE' ? content.subContents[0].title : content.subContents[1].title}}</h3>
        <div class="info">
            <span class="date">{{content.publishedTime}}</span>
            <span class="author">{{language === 'CHINESE' ? content.subContents[0].author : content.subContents[1].author}}</span>
        </div>
        <div class="detail" v-html="language === 'CHINESE' ? content.subContents[0].details : content.subContents[1].details">
        </div>
    </div>
</template>

<script>
  import { getContentById } from '../../service/lcmsService'
  import moment from 'moment-timezone'
  export default {
    layout: 'staticPreview',
    data () {
      return {
        language: '',
        content: {
          subContents: [{}, {}]
        }
      }
    },
    created () {
      this.language = this.$route.path.includes('/en/') ? 'ENGLISH' : 'CHINESE'
      const id = this.$route.query.id
      const params = {
        id
      }
      const _this = this
      getContentById(params, function (res) {
        res.publishedTime = moment(res.publishedTime).format('YYYY-MM-DD')
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
      /*.img {*/
      /*text-align: center;*/
      /*span {*/
      /*display: block;*/
      /*color: #8c8c8c;*/
      /*}*/
      /*img{*/
      /*width: 624px;*/
      /*}*/
      /*}*/
      .text {
        width: 960px;
        line-height: 2.2;
        text-indent: 28px;
      }
    }
  }
</style>

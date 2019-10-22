<template>
    <div class="news content">
        <h3 class="title">{{news.title}}</h3>
        <div class="info">
            <span class="date">{{news.date}}</span>
            <span class="author">{{news.author}}</span>
        </div>
        <div class="detail">
            <template v-for="item in news.content">
                <p v-if="item.indexOf('img:')>=0" class="img">
                    <img :src="item | getImgSrc" />
                    <span>{{item | getImgDesc}}</span>
                </p>
                <p v-else class="text">{{item}}</p>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'static',
  filters: {
    getImgSrc (value) {
      return value.split(':')[1]
    },
    getImgDesc (value) {
      return value.split(':')[2]
    }
  },
  data () {
    return {
      news: {
        title: '',
        date: '',
        author: '',
        content: ''
      }
    }
  },
  created () {
    this.news = this.$t('news.' + this.$route.params.id)
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

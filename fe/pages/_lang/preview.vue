<template>
    <div class="container index">
        <video id="video" src="https://newtranstar.oss-cn-beijing.aliyuncs.com/index-v/index2.mp4" preload="auto" loop="loop" width="100%" poster="~static/video/video1.jpg"></video>
        <preview-news></preview-news>
        <preview-business></preview-business>
        <index-procedure></index-procedure>
        <index-advantage></index-advantage>
        <preview-case></preview-case>
        <index-cooperation></index-cooperation>
    </div>
</template>

<script>
import banner1 from '~/static/banner-1.jpg'
import banner2 from '~/static/banner-2.jpg'
import banner3 from '~/static/banner-3.jpg'

import SwiperBanner from '~/components/index/SwiperBanner'
import PreviewNews from '~/components/index/PreviewNews'
import PreviewBusiness from '~/components/index/PreviewBusiness'
import IndexProcedure from '~/components/index/IndexProcedure'
import IndexAdvantage from '~/components/index/IndexAdvantage'
import PreviewCase from '~/components/index/PreviewCase'
import IndexCooperation from '~/components/index/IndexCooperation'

export default {
  layout: 'preview',
  components: {
    SwiperBanner,
    PreviewBusiness,
    PreviewNews,
    IndexProcedure,
    IndexAdvantage,
    PreviewCase,
    IndexCooperation
  },
  data () {
    return {
      carousel_height: 0,
      banners: [
        {
          url: banner1
        },
        {
          url: banner2
        },
        {
          url: banner3
        }
      ]
    }
  },
  mounted () {
    document.getElementById('video').play()
  }
}
</script>

<style lang="less">
.index{
  background-color: #ffffff;
  .el-carousel{
    width: 100%;
  }
  .index-title{
    padding: 50px 0;
    font-size: 24px;
    color: #373d41;
    &:after{
      display: block;
      margin: 15px auto 10px;
      content: '';
      width: 65px;
      height: 1px;
      background-color: #0c1c2b;
    }
  }
}
</style>

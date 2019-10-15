<template>
<div class="container index">
  <video id="video" src="https://newtranstar.oss-cn-beijing.aliyuncs.com/index-v/index2.mp4" autoplay loop="loop" width="100%" poster="~static/video/video1.jpg"></video>
  <index-news></index-news>
  <index-business></index-business>
  <index-procedure></index-procedure>
  <index-advantage></index-advantage>
  <index-case></index-case>
  <index-cooperation></index-cooperation>
  <index-fixed-bar></index-fixed-bar>
</div>
</template>

<script>
import banner1 from '~/static/banner-1.jpg'
import banner2 from '~/static/banner-2.jpg'
import banner3 from '~/static/banner-3.jpg'

import SwiperBanner from '~/components/index/SwiperBanner'
import IndexNews from '~/components/index/IndexNews'
import IndexBusiness from '~/components/index/IndexBusiness'
import IndexProcedure from '~/components/index/IndexProcedure'
import IndexAdvantage from '~/components/index/IndexAdvantage'
import IndexCase from '~/components/index/IndexCase'
import IndexCooperation from '~/components/index/IndexCooperation'
import IndexFixedBar from '~/components/index/IndexFixedBar'

export default {
  layout: 'index',
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
  components: {
    SwiperBanner,
    IndexBusiness,
    IndexNews,
    IndexProcedure,
    IndexAdvantage,
    IndexCase,
    IndexCooperation,
    IndexFixedBar
  },
  mounted () {
    this.videoPlay()
  },
  methods: {
    videoPlay: function () {
      var video = document.getElementById('video')
      video.onloadedmetadata = function () {
        video.play()
      }
    }
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

<template>
    <div>
        <star-header-preview/>
        <div class="banner">
            <img src="~static/static-banner.jpg" />
        </div>
        <nuxt/>
        <star-footer-preview />
    </div>
</template>

<script>
import StarHeaderPreview from '~/components/StarHeaderPreview.vue'
import StarFooterPreview from '~/components/StarFooterPreview.vue'

export default {
  head () {
    return { title: this.$t('menu.site') }
  },
  components: {
    StarHeaderPreview,
    StarFooterPreview
  }
}
</script>

<style lang="less">
html {
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
input, textarea, select, button {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
body {
  background-color: #f6f6f6;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.clear {
  zoom: 1;
}

.clear:after {
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  color: #a27c4c;
  text-decoration: none;
}
.banner {
    width: 100%;
    img {
        display: block;
        font-size: 0;
        width: 100%;
    }
}
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  &.page-default {
    width: 1092px;
    margin: 20px auto;
    .page-nav {
      text-align: left;
      color: #787878;
      font-size: 12px;
      margin-bottom: 30px;
      a {
        color: #787878;
        font-size: 12px;
      }
    }
    .page-title {
      display: flex;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
      color: #a27c4c;
      padding-bottom: 10px;
      border-bottom: 1px solid #dddddd;
      & .title-icon{
        border-left: 3px solid #a27c4c;
        width: 3px;
        margin-right: 7px;
        height: 20px;
      }
    }
    .case-detail {
      color: #000000;
      width: 1092px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 20px;
      display: flex;
      text-align: justify;
      .case-content{
        width: 610px;
        padding-top: 20px;
        .case-title {
          font-size: 20px;
          color: #000000;
          font-weight: bold;
        }
        p {
          font-size: 14px;
          color: #999999;
          padding: 0 10px;
          line-height: 2.0;
          margin-bottom: 10px;
          span {
            color: #a27c4c;
            margin-right: 10px;
            font-weight: bold;
          }
        }
      }
      .case-img{
        width: 480px;
        padding: 30px;
        img {
          width: 100%;
        }
      }
      .case-video {
        padding-top: 30px;
        width: 480px;
      }
    }
  }
}
.el-dropdown-menu{
  padding: 0;
  font-size: 12px;
  .el-dropdown-menu__item {
    line-height: 30px;
    font-size: 12px;
    color: #a27c4c;
    a {
      font-size: 12px;
      color: #a27c4c;
      text-decoration: none;
    }
  }
}
.footer {
  .address{
    a {
      color: #000;
    }
  }
}
</style>

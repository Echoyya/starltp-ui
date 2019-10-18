<template>
    <div>
        <star-header />
        <nuxt/>
        <star-footer class="index-footer"/>
    </div>
</template>

<script>
import StarHeader from '~/components/StarHeader.vue'
import StarFooter from '~/components/StarFooter.vue'

export default {
  head () {
    return { title: this.$t('menu.site') }
  },
  components: {
    StarHeader,
    StarFooter
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
  overflow-y: scroll;
}
input, textarea, select, button {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}
body {
  background-color: #f6f6f6;
  width: 100vw;
  overflow: hidden;
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

.container {
  justify-content: center;
  align-items: center;
  text-align: center;
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
.index-footer.footer{
  background-color: #4F555B;
  .content {
    .foot-info {
      .divider{
        background: rgba(111,127,160,0.4);
      }
      .left-content .foot-nav-menu{
        .title{
          color: rgba(255,255,255,0.8);
        }
        .nav-item {
          color: rgba(255,255,255,0.8);
          a {
            color: rgba(255,255,255,0.8);
          }
        }
      }
      .address{
        p{
          color: rgba(255,255,255,0.8);
        }
        a {
          color: rgba(255,255,255,0.8);
        }
      }
    }
    .copy-right{
      border-top: 1px solid rgba(111,127,160,0.4);
    }
  }
}
</style>

<template>
    <div class="star-side-bar clear">
        <div><i class="iconfont">&#xe613;</i></div>
        <div class="title">
            <nuxt-link :to="$i18n.path('service/fees#'+link)" target="_blank">{{$t('menu.fee')}}</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'link'
  ]
}
</script>
<style lang="less">
.star-side-bar {
  text-align: center;
  background: #ffffff;
  padding: 10px 0;
  width: 70px;
  position: fixed;
  bottom: 50%;
  margin-bottom: -67px;
  right: 20px;
  z-index: 100;
  .iconfont{
    color: #a27c4c;
    font-size: 20px;
  }
  .title{
    margin: 0 auto;
  }
}
</style>

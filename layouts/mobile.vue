<template>
    <div>
        <nuxt/>
        <star-footer />
    </div>
</template>

<script>
import StarFooter from '~/components/mobile/StarFooter.vue'

export default {
  components: {
    StarFooter
  }
}
</script>

<style lang="less">
 @import 'mobile.less';
 body {
   background-color: #f2f2f2;
 }
</style>

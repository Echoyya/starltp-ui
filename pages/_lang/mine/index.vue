<template>
  <div class="container mine-content clear">
    <user-nav />
    <user-info />
  </div>
</template>
<script>
import UserNav from '~/components/mine/UserNav.vue'
import UserInfo from '~/components/mine/UserInfo.vue'

export default {
  components: {
    UserNav,
    UserInfo
  }
}
</script>
<style lang="less">
</style>

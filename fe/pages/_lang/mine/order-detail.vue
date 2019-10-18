<template>
  <div class="container mine-content clear">
    <user-nav />
    <user-order-detail />
  </div>
</template>
<script>
import UserNav from '~/components/mine/UserNav.vue'
import UserOrderDetail from '~/components/mine/UserOrderDetail.vue'

export default {
  components: {
    UserNav,
    UserOrderDetail
  }
}
</script>
<style lang="less">
</style>

<template>
  <div class="container mine-content clear">
    <user-nav />
    <user-password />
  </div>
</template>
<script>
import UserNav from '~/components/mine/UserNav.vue'
import UserPassword from '~/components/mine/UserPassword.vue'

export default {
  components: {
    UserNav,
    UserPassword
  }
}
</script>
<style lang="less">
</style>

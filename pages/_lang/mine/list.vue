<template>
  <div class="container mine-content clear">
    <user-nav />
    <user-order-list :style="allOrders?'display:block':'display:none'"  :set-if-show-list="setIfShowList" />
    <user-order-detail v-if="!allOrders" :set-if-show-list="setIfShowList" :id="id"/>
  </div>
</template>
<script>
  import UserNav from '~/components/mine/UserNav.vue'
  import UserOrderList from '~/components/mine/UserOrderList.vue'
  import UserOrderDetail from '~/components/mine/UserOrderDetail.vue'

  export default {
    components: {
      UserNav,
      UserOrderList,
      UserOrderDetail
    },
    data () {
      return {
        allOrders: true,
        id: null
      }
    },
    methods: {
      setIfShowList: function (id) {
        if (id) {
          this.id = id
        }
        this.allOrders = !this.allOrders
      }
    }
  }
</script>
<style lang="less">
</style>

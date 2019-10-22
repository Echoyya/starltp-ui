<template>
    <div class="container order-success">
        <div class="banner">
            <img src="~static/translate-bg.jpg" />
        </div>
        <div class="info">
            <p>
                <i class="iconfont">&#xe660;</i>
            </p>
            <p>
                {{$t('orderSuccess.acceptOrder').replace('*',name)}}
            </p>
            <p>
                {{$t('orderSuccess.acceptTip')}}
            </p>
            <p class="tip">
                {{$t('orderSuccess.tips')}}
            </p>
        </div>
        <div class="my-order-btn">
            <el-button @click="goMyOrders">{{$t('orderSuccess.checkOrder')}}</el-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'name'
    ])
  },
  methods: {
    goMyOrders () {
      this.$router.push({ path: this.$i18n.path('mine/list') })
    }
  }
}
</script>

<style lang="less">
.order-success {
  text-align: center;
  color: #a27c4c;
  font-size: 18px;
  line-height: 1.8;
  .banner{
    width: 100%;
    img {
      display: block;
      font-size: 0;
      width: 100%;
    }
  }
  .info {
    padding: 50px 0 80px;
    width: 800px;
    margin: 0 auto;
    border-bottom: 1px solid #e4e4e4;
    .icon-chenggong{
      font-size: 60px;
    }
    .tip {
      margin-top: 20px;
      color: #999999;
      font-size: 12px;
    }
  }
  .my-order-btn{
    display: inline-block;
    padding: 50px 0 80px;
    text-align: center;
    button {
      font-size: 16px;
    }
  }
}
</style>

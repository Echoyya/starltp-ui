<template>
<div class="container m-login">
  <div class="m-logo"><img src="~assets/m_logo.png" /></div>
  <div class="login-error">{{error}}</div>
  <m-login v-if="type==='login'" :changeType="changeType" :changeError="changeError"/>
  <m-register v-if="type==='register'" :changeType="changeType" :changeError="changeError"/>
  <m-forget v-if="type==='forget'" :changeType="changeType" :changeError="changeError"/>
</div>
</template>

<script>
import MLogin from '~/components/mobile/MLogin'
import MRegister from '~/components/mobile/MRegister'
import MForget from '~/components/mobile/MForget'

export default {
  layout: 'mobile-nobar',
  data () {
    return {
      type: 'login',
      error: ''
    }
  },
  components: {
    MLogin, MRegister, MForget
  },
  methods: {
    changeType: function (key) {
      this.type = key
    },
    changeError: function (error) {
      this.error = error
    }
  }
}
</script>

<style lang="less">
.m-login{
  .m-logo{
    max-width: 150px;
    margin: 30px auto 30px;
  }
  .button {
    width: 100%;
    text-align: center;
    margin: 30px auto;
  }
  .form-item {
    .validate-input{
      width: 130px;
    }
    .validate-code {
      background-color: #ffffff;
      width: 100px;
      color: #a27c4c;
      height: 30px;
      line-height: 30px;
      margin-top: 15px;
      border-left: 1px solid #f0f0f0;
      text-align: right;
      outline: 0;
      &:disabled{
        color: #999999;
      }
    }
  }
  .login-error {
    height: 30px;
    font-size: 14px;
    color: #f5222d;
    text-align: center;
  }
  .other-link{
    display: inline-flex;
    width: 80%;
    margin: 30px 10% 10px;
    font-size: 14px;
    color: #a27c4c;
    .register {
      text-align: left;
      width: 50%;
    }
    .forget {
      width: 50%;
      text-align: right;
    }
  }
}
</style>

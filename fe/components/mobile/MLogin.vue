<template>
    <div class="m-login">
        <div class="form-item">
            <label>手机</label>
            <input v-model="phone_number" type="number" placeholder="请输入您的手机号" />
        </div>
        <div class="form-item">
            <label>密码</label>
            <input v-model="password" type="password" placeholder="请输入密码" />
        </div>
        <div class="other-link">
            <span class="register" @click="changeType('register')">注册</span><span class="forget" @click="changeType('forget')">忘记密码？</span>
        </div>
        <div class="button">
            <button class="m-button" @click="login">登录</button>
        </div>
    </div>
</template>
<script>
import { login } from '../../service/cumsService'
import utils from '../../utils/utils'
import CryptoJS from 'crypto-js'
import { mapMutations } from 'vuex'

export default {
  props: {
    'changeType': {
      type: Function,
      required: true
    },
    'changeError': {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      phone_number: '',
      password: '',
      redirect: '/m/mine'
    }
  },
  methods: {
    ...mapMutations([
      'SET_BASEINFO'
    ]),
    login () {
      if (!this.phone_number) {
        this.changeError('请输入您的手机号')
        return false
      }
      if (!this.password) {
        this.changeError('请输入您的密码')
        return false
      }
      const _this = this
      login({
        phone_number: '0086'.concat(this.phone_number),
        password: this.password
      }, function (res) {
        if (res) {
          const _res = JSON.stringify(res)
          const _info = CryptoJS.AES.encrypt(_res, 'startimes ltp')
          utils.setSession('_info', _info.toString())
          _this.SET_BASEINFO({ ...res })
          _this.$router.push({
            path: _this.redirect
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
.m-login {
}
</style>

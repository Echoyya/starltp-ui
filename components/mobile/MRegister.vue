<template>
    <div class="m-register">
        <div class="form-item">
            <label>用户名</label>
            <input v-model="name" type="text" placeholder="请输入您的用户名"/>
        </div>
        <div class="form-item">
            <label>手机</label>
            <input v-model="phone_number" type="number" size="11" placeholder="请输入您的手机号"/>
        </div>
        <div class="form-item">
            <label>密码</label>
            <input v-model="password" type="password" placeholder="请输入密码"/>
        </div>
        <div class="form-item">
            <label>验证码</label>
            <input v-model="verification_code" class="validate-input" type="number" size="6" placeholder="请输入验证码"/>
            <button class="validate-code" :disabled="sendMsgDisabled" @click="getCode">获取验证码{{ countdown === 0 ? '' : countdown + 's' }}</button>
        </div>
        <div class="other-link">
            <span class="register" @click="changeType('login')">登录</span><span class="forget" @click="changeType('forget')">忘记密码？</span>
        </div>
        <div class="button">
            <button class="m-button" @click="register">注册</button>
        </div>
    </div>
</template>
<script>
import { register, send, login } from '../../service/cumsService'
import utils from '../../utils/utils'
import { mapMutations } from 'vuex'
import CryptoJS from 'crypto-js'
import { MessageBox } from 'element-ui'

const phoneValidate = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

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
      name: '',
      phone_number: '',
      password: '',
      verification_code: '',
      redirect: '/m/mine',
      countdown: 0,
      sendMsgDisabled: true
    }
  },
  watch: {
    'name' () {
      this.canSendCode()
    },
    'phone_number' () {
      this.canSendCode()
    }
  },
  methods: {
    ...mapMutations([
      'SET_BASEINFO'
    ]),
    canSendCode () {
      if (this.name.length <= 30 && this.name.length >= 1 && phoneValidate.test(this.phone_number)) {
        this.sendMsgDisabled = false
      } else {
        this.sendMsgDisabled = true
      }
    },
    register () {
      if (!this.name) {
        this.changeError('请输入您的用户名')
        return false
      }
      if (this.name.length < 1 || this.name.length > 30) {
        this.changeError('长度在 1 到 30 个字符')
        return false
      }
      if (!this.phone_number) {
        this.changeError('请输入您的手机号')
        return false
      }
      if (!phoneValidate.test(this.phone_number)) {
        this.changeError('请输入正确的手机号')
        return false
      }
      if (!this.password) {
        this.changeError('请输入密码')
        return false
      }
      if (!this.verification_code) {
        this.changeError('请输入验证码')
        return false
      }
      if (this.verification_code.length !== 6) {
        this.changeError('请输入正确的6位验证码')
        return false
      }
      const _this = this
      register({
        name: this.name,
        phone_number: this.phone_number,
        password: this.password,
        verification_code: this.verification_code
      }, function (regRes) {
        MessageBox.alert('注册成功', {type: 'success'}).then(function () {
          login({
            phone_number: '0086'.concat(_this.phone_number),
            password: _this.password
          }, function (res) {
            const _res = JSON.stringify(res)
            const _info = CryptoJS.AES.encrypt(_res, 'startimes ltp')
            utils.setSession('_info', _info.toString())
            _this.SET_BASEINFO({ ...res })
            _this.$router.push({ path: _this.redirect })
          })
        })
      })
    },
    getCode () {
      const _this = this
      send({
        phone_number: '0086'.concat(this.phone_number)
      }, function (res) {
        if (res.code === '200') {
          _this.countdown = 60
          _this.sendMsgDisabled = true
          setTimeout(_this.setCountdown, 1000)
        }
      })
    },
    setCountdown () {
      if (this.countdown > 0) {
        this.sendMsgDisabled = true
        this.countdown--
        setTimeout(this.setCountdown, 1000)
      } else {
        this.sendMsgDisabled = false
      }
    }
  }
}
</script>
<style lang="less">
.m-register {

}
</style>

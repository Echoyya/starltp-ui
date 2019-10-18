<template>
    <div class="m-forget">
        <div class="form-item">
            <label>手机</label>
            <input v-model="phone_number" type="number" size="11" placeholder="请输入您的手机号"/>
        </div>
        <div class="form-item">
            <label>新密码</label>
            <input v-model="new_password" type="password" placeholder="请输入新密码"/>
        </div>
        <div class="form-item">
            <label>验证码</label>
            <input v-model="verification_code" class="validate-input" type="number" size="6" placeholder="请输入验证码"/>
            <button class="validate-code" :disabled="sendMsgDisabled" @click="getCode">获取验证码{{ countdown === 0 ? '' : countdown + 's' }}</button>
        </div>
        <div class="other-link">
            <span class="register" @click="changeType('register')">注册</span><span class="forget" @click="changeType('login')">登录</span>
        </div>
        <div class="button">
            <button class="m-button" @click="forget">修改</button>
        </div>
    </div>
</template>
<script>
import { send, reset } from '../../service/cumsService'
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
      phone_number: '',
      new_password: '',
      verification_code: '',
      countdown: 0,
      sendMsgDisabled: true
    }
  },
  watch: {
    'phone_number' () {
      this.canSendCode()
    }
  },
  methods: {
    forget () {
      if (!this.phone_number) {
        this.changeError('请输入您的手机号')
        return false
      }
      if (!phoneValidate.test(this.phone_number)) {
        this.changeError('请输入正确的手机号')
        return false
      }
      if (!this.new_password) {
        this.changeError('请输入新的密码')
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
      reset({
        phone_number: this.phone_number,
        new_password: this.new_password,
        verification_code: this.verification_code
      }, function (res) {
        if (res.code === '200') {
          MessageBox.alert('重置密码成功,请登录', {type: 'success'}).then(function () {
            _this.changeType('login')
          })
        }
      })
    },
    canSendCode () {
      if (phoneValidate.test(this.phone_number)) {
        this.sendMsgDisabled = false
      } else {
        this.sendMsgDisabled = true
      }
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
.m-forget {

}
</style>

<template>
  <div class="container reset">
    <div class="content">
      <img src="~static/login_bg.jpg" />
      <div class="login-body">
        <div class="login-content">
          <div class="login-info">
            <login-ad />
          </div>
          <div class="reg-form">
            <div class="reg-title">{{$t('register.forgetPassword')}}</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :status-icon.boolean="true" class="form-body" @keyup.enter.native="submitForm('ruleForm')">
              <el-form-item style="margin-bottom: 0;float: left; width: 25%">
                <el-select v-model="ruleForm.codeNum" :filter-method="filterMethod" filterable placeholder="" @visible-change="visibleChange">
                  <el-option
                    style="width: 274px;"
                    v-for="item in countriesKeys"
                    :key="item"
                    :label="countryConfig[item]"
                    :value="countryConfig[item]">
                    <span style="float: left">{{ $t(countries[item]) }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ countryConfig[item] }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="phone_number" style="margin-bottom: 0;float: right; width: 73%">
                <el-input v-model="ruleForm.phone_number" :placeholder="$t('register.inputTelNum')"></el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 0; clear: both">
                <div style="float: right;margin: 0 5px 0 auto">
                  <nuxt-link :to="$i18n.path('forgetEmail')">{{$t('register.resetByEmail')}}></nuxt-link>
                </div>
              </el-form-item>
              <el-form-item prop="new_password">
                <el-input type="password" v-model="ruleForm.new_password" :placeholder="$t('register.newPassword')"></el-input>
              </el-form-item>
              <el-form-item prop="verification_code">
                <el-input v-model="ruleForm.verification_code" type="text" class="validate-code" :placeholder="$t('register.inputVerificationCode')" />
                <el-button class="get-validate" @click="getCode" :disabled="sendMsgDisabled">{{$t('register.getVerificationCode')}}{{ countdown === 0 ? '' : countdown + 's' }}</el-button>
              </el-form-item>
              <el-form-item>
                <el-button class="register-btn" @click="submitForm('ruleForm')" :loading="loading">{{$t('button.confirm')}}</el-button>
              </el-form-item>
            </el-form>
            <div class="reg-login">
              <nuxt-link :to="$i18n.path('login')">{{$t('register.loginExistAccount')}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginAd from '~/components/LoginAd'
import { reset, send } from '../../service/cumsService'
import { MessageBox } from 'element-ui'
import countryConfig from '../../utils/countryConfig'

const phoneValidate = /^\d{1,30}$/

export default {
  data () {
    return {
      countdown: 0,
      sendMsgDisabled: true,
      loading: false,
      countriesKeys: Object.keys(this.$t('countries')),
      countries: this.$t('countries'),
      countryConfig: countryConfig,
      ruleForm: {
        phone_number: '',
        new_password: '',
        codeNum: '0086',
        verification_code: null
      },
      rules: {
        phone_number: [
          { required: true, message: this.$t('register.inputYourTel'), trigger: 'blur' },
          { pattern: phoneValidate, message: this.$t('register.correctTel'), trigger: 'blur' }
        ],
        new_password: [
          { required: true, message: this.$t('register.inputPassword'), trigger: 'blur' },
          { min: 8, max: 14, message: this.$t('register.length8_14'), trigger: 'blur' }
        ],
        verification_code: [
          { required: true, message: this.$t('register.inputVerificationCode'), trigger: 'blur' },
          { pattern: /^\d{6}$/, message: this.$t('register.correctVerificationCode'), trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    LoginAd
  },
  watch: {
    'ruleForm.phone_number': function () {
      // 监听手机号是否合法,如果合法,则允许获取验证码
      if (phoneValidate.test(this.ruleForm.phone_number)) {
        this.sendMsgDisabled = false
      } else {
        this.sendMsgDisabled = true
      }
    }
  },
  methods: {
    filterMethod: function (query) {
      if (query !== '') {
        let countries = Object.entries(this.$t('countries'))
        let countriesKeys = []
        countries.map(([k, v]) => {
          let searchStr = v + countryConfig[k]
          if (searchStr.toLowerCase().indexOf(query.toLowerCase()) > -1) {
            countriesKeys.push(k)
          }
        })
        this.countriesKeys = countriesKeys
      } else {
        this.countriesKeys = Object.keys(this.$t('countries'))
      }
    },
    visibleChange: function (value) {
      if (value) {
        this.countriesKeys = Object.keys(this.$t('countries'))
      }
    },
    getCode: function () {
      const _this = this
      _this.sendMsgDisabled = true
      _this.countdown = 60
      setTimeout(_this.setCountdown, 1000)
      send({
        phone_number: this.ruleForm.codeNum.concat(this.ruleForm.phone_number)
      })
    },
    setCountdown: function () {
      if (this.countdown > 0) {
        this.sendMsgDisabled = true
        this.countdown--
        setTimeout(this.setCountdown, 1000)
      } else {
        this.sendMsgDisabled = false
      }
    },
    submitForm: function (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.loading = true
          reset({
            ..._this.ruleForm
          }, function (res) {
            if (res.code === '200') {
              MessageBox.alert(_this.$t('register.resetSuccess'), {type: 'success'}).then(function () {
                _this.$router.push({ path: _this.$i18n.path('login') })
                _this.loading = false
              })
            }
          }, function () {
            _this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less">
.reset {
  .content{
    position: relative;
    width: 100%;
    img {
      font-size: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
    .login-body{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .login-content{
        position: relative;
        margin: 0 auto;
        width: 1092px;
        height: 100%;
        .login-info{
          position: absolute;
          width: 50%;
          height: 100%;
          text-align: right;

        }
        .reg-form{
          width: 360px;
          background-color: #ffffff;
          position: absolute;
          top:50%;
          right: 0;
          margin-top: -214px;
          padding: 30px 20px 30px;
          .reg-title {
              text-align: left;
              font-size: 16px;
              color: #a27c4c;
              .iconfont {
                  font-size: 20px;
                  margint: 0 5px;
              }
          }
          .form-body {
              margin-top: 20px;
              margin-bottom: 20px;
              .reg-input {
                  width: 100%;
                  height: 40px;
                  line-height: 40px;
                  padding: 0 15px;
                  margin-bottom: 15px;
                  border: 1px solid #d7d8d9;
                  &::placeholder {
                      color: #999999;
                  }
              }
              .register-btn {
                display: block;
                width: 100%;
                height: 40px;
                background-color: #3c4860;
                border: 0;
                color: #ffffff;
                box-shadow: 0 10px 20px #cccccc;
                cursor: pointer;
              }
              .validate-code {
                  float: left;
                  width: 205px;
              }
              .get-validate {
                  padding: 0;
                  height: 40px;
                  background-color: #3c4860;
                  border: 0;
                  color: #ffffff;
                  box-shadow: 0 0 0 transparent;
                  float: right;
                  width: 100px;
                  border-radius: 2px;
                  font-size: 12px;
                  &.is-disabled{
                    background-color: rgba(60,72,96,0.3);
                  }
              }
          }
          .reg-login {
              margin-top: -10px;
              a {
                  display: inline-block;
                  width: 100%;
                  font-size: 12px;
                  color: #000000;
                  text-decoration: none;
                  text-align: right;
              }
          }
        }
      }
    }
  }
}
</style>

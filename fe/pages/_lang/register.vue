<template>
    <div class="container register">
        <div class="content">
            <img src="~static/login_bg.jpg" />
            <div class="login-body">
                <div class="login-content">
                    <div class="login-info">
                        <login-ad />
                    </div>
                    <div class="reg-form">
                        <div class="reg-title">{{$t('register.welcome')}}</div>
                        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" :status-icon.boolean="true" class="form-body" @keyup.enter.native="submitForm('ruleForm')">
                            <el-form-item prop="name">
                                <el-input v-model="ruleForm.name" :placeholder="$t('register.inputUserName')"></el-input>
                            </el-form-item>
                            <el-form-item style="margin-bottom: 0;float: left; width: 25%">
                                <el-select v-model="ruleForm.codeNum" :filter-method="filterMethod" filterable placeholder="" @visible-change="visibleChange">
                                    <el-option
                                        v-for="item in countriesKeys"
                                        :key="item"
                                        style="width: 274px;"
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
                                    <nuxt-link :to="{path:$i18n.path('registerEmail'), query:{redirect: redirect}}">{{$t('register.registerEmail')}}></nuxt-link>
                                </div>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" :placeholder="$t('register.inputPassword')"></el-input>
                            </el-form-item>
                            <el-form-item prop="verification_code">
                                <el-input v-model="ruleForm.verification_code" type="text" class="validate-code" :placeholder="$t('register.inputVerificationCode')" />
                                <el-button class="get-validate" :disabled="sendMsgDisabled" @click="getCode">{{$t('register.getVerificationCode')}}{{ countdown === 0 ? '' : countdown + 's' }}</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="register-btn" :loading="loading" @click="submitForm('ruleForm')">{{$t('button.register')}}</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="reg-login">
                            <nuxt-link :to="{path:$i18n.path('login'), query:{redirect: redirect}}">{{$t('register.loginExistAccount')}}></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LoginAd from '~/components/LoginAd'
import { register, send, login } from '../../service/cumsService'
import { MessageBox } from 'element-ui'
import utils from '../../utils/utils'
import CryptoJS from 'crypto-js'
import { mapMutations } from 'vuex'
import countryConfig from '../../utils/countryConfig'
import api from '../../utils/api'
const phoneValidate = /^\d{1,30}$/

export default {
  components: {
    LoginAd
  },
  data () {
    return {
      redirect: '/',
      countdown: 0,
      sendMsgDisabled: true,
      loading: false,
      countriesKeys: Object.keys(this.$t('countries')),
      countries: this.$t('countries'),
      countryConfig,
      ruleForm: {
        name: '',
        phone_number: '',
        password: '',
        codeNum: '0086',
        verification_code: null
      },
      rules: {
        name: [
          { required: true, message: this.$t('register.inputUserName'), trigger: 'blur' },
          { pattern: /^(?!\d+$)[\da-zA-Z_]{8,14}$/, message: this.$t('register.nameTip'), trigger: 'blur' }
        ],
        phone_number: [
          { required: true, message: this.$t('register.inputTelNum'), trigger: 'blur' },
          { pattern: /^\d{1,30}$/, message: this.$t('register.correctTel') }
        ],
        password: [
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
  watch: {
    'ruleForm.name' () {
      this.canSendCode()
    },
    'ruleForm.phone_number' () {
      this.canSendCode()
    }
  },
  mounted () {
    this.redirect = this.$route.query.redirect ? this.$route.query.redirect : this.$i18n.path('')
    sessionStorage.clear()
  },
  methods: {
    ...mapMutations([
      'SET_BASEINFO'
    ]),
    filterMethod (query) {
      if (query !== '') {
        const countries = Object.entries(this.$t('countries'))
        const countriesKeys = []
        countries.map(([k, v]) => {
          const searchStr = v + countryConfig[k]
          if (searchStr.toLowerCase().includes(query.toLowerCase())) {
            countriesKeys.push(k)
          }
        })
        this.countriesKeys = countriesKeys
      } else {
        this.countriesKeys = Object.keys(this.$t('countries'))
      }
    },
    visibleChange (value) {
      if (value) {
        this.countriesKeys = Object.keys(this.$t('countries'))
      }
    },
    canSendCode () {
      if (this.ruleForm.name.length <= 30 && this.ruleForm.name.length >= 1 && phoneValidate.test(this.ruleForm.phone_number)) {
        this.sendMsgDisabled = false
      } else {
        this.sendMsgDisabled = true
      }
    },
    getCode () {
      const _this = this
      _this.sendMsgDisabled = true
      _this.countdown = 60
      setTimeout(_this.setCountdown, 1000)
      send({
        phone_number: this.ruleForm.codeNum.concat(this.ruleForm.phone_number)
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
    },
    submitForm (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.loading = true
          register({
            ...this.ruleForm
          }, function (regRes) {
            MessageBox.alert(_this.$t('register.registerSuccess'), {type: 'success'}).then(function () {
              login({
                phone_number: _this.ruleForm.codeNum.concat(_this.ruleForm.phone_number),
                password: _this.ruleForm.password
              }, function (res) {
                const _res = JSON.stringify(res)
                const _info = CryptoJS.AES.encrypt(_res, 'startimes ltp')
                utils.setSession('_info', _info.toString())
                _this.SET_BASEINFO({ ...res })
                if (_this.redirect.includes('translator')) {
                  utils.toTranslator(api.translatorsiteURL)
                } else {
                  _this.$router.push({ path: _this.redirect })
                }
                _this.loading = true
              }, function () {
                _this.loading = true
              })
            })
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
.register {
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

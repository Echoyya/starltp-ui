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
                        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="form-body" @keyup.enter.native="submitForm('ruleForm')">
                            <el-form-item prop="name">
                                <el-input v-model="ruleForm.name" :placeholder="$t('register.inputUserName')"></el-input>
                            </el-form-item>
                            <el-form-item prop="email" style="margin-bottom: 0">
                                <el-input v-model="ruleForm.email" :placeholder="$t('register.inputEmail')"></el-input>
                            </el-form-item>
                            <el-form-item style="margin-bottom: 0; clear: both">
                                <div style="float: right;margin: 0 5px 0 auto">
                                    <nuxt-link :to="{path:$i18n.path('register'), query:{redirect: redirect}}">{{$t('register.registerTel')}}></nuxt-link>
                                </div>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" :placeholder="$t('register.inputPassword')"></el-input>
                            </el-form-item>
                            <el-form-item prop="verification_code">
                                <el-input v-model="ruleForm.verification_code" type="text" class="validate-code" :placeholder="$t('register.inputVerificationCode')" />
                                <img ref="getImage" class="get-validate" :src="imageGetUrl" @click="getImageCode"/>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="register-btn" :loading="loading" @click="submitForm('ruleForm')">{{$t('button.register')}}</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="reg-login">
                            <nuxt-link :to="{path:$i18n.path('loginEmail'), query:{redirect: redirect}}">{{$t('register.loginExistAccount')}}></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LoginAd from '~/components/LoginAd'
import { registerEmail, codeValidate, emailOnly } from '../../service/cumsService'
import { mapMutations } from 'vuex'
import { MessageBox } from 'element-ui'
import api from '../../utils/api'

export default {
  components: {
    LoginAd
  },
  data () {
    const checkEmail = (rule, value, callback) => {
      const _this = this
      emailOnly({
        email: value
      }, function (res) {
        if (!res) {
          callback(new Error(_this.$t('errorCode.16457')))
        } else {
          callback()
        }
      }, function () {
      })
    }
    return {
      redirect: '/',
      loading: false,
      imageBaseUrl: api.baseUrl + api.getImageCode,
      imageGetUrl: api.baseUrl + api.getImageCode + '?time=' + new Date().getTime(),
      ruleForm: {
        name: '',
        password: '',
        email: '',
        verification_code: null
      },
      rules: {
        name: [
          { required: true, message: this.$t('register.inputUserName'), trigger: 'blur' },
          { pattern: /^(?!\d+$)[\da-zA-Z_]{8,14}$/, message: this.$t('register.nameTip'), trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t('register.inputEmail'), trigger: 'blur' },
          { pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, message: this.$t('register.correctEmail'), trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('register.inputPassword'), trigger: 'blur' },
          { min: 8, max: 14, message: this.$t('register.length8_14'), trigger: 'blur' }
        ],
        verification_code: [
          { required: true, message: this.$t('register.inputVerificationCode') },
          { validator: (rule, value, callback) => {
            const _this = this
            codeValidate({
              verification_code: value
            }, function (res) {
              if (!res) {
                callback(new Error(_this.$t('register.correctVerificationCode')))
              } else {
                callback()
              }
            }, function () {
            })
          },
          trigger: 'blur' }
        ]
      }
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
    getImageCode () {
      this.$refs.getImage.setAttribute('src', this.imageBaseUrl + '?time=' + new Date().getTime())
    },
    submitForm (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.loading = true
          registerEmail({
            ...this.ruleForm
          }, function () {
            _this.loading = false
            MessageBox.alert(_this.$t('register.emailRegisterTip'), {type: 'success'}).then(function () {
              _this.$router.push({ path: _this.$i18n.path('loginEmail') })
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
                  margin-top: 2px;
                  padding: 0;
                  height: 36px;
                  float: right;
                  width: 100px;
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

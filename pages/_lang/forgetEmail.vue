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
              <el-form-item prop="email" style="margin-bottom: 0">
                <el-input v-model="ruleForm.email" :placeholder="$t('register.inputEmail')"></el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 0; clear: both">
                <div style="float: right;margin: 0 5px 0 auto">
                  <nuxt-link :to="$i18n.path('forget')">{{$t('register.resetByTel')}}></nuxt-link>
                </div>
              </el-form-item>
              <el-form-item prop="verification_code">
                <el-input v-model="ruleForm.verification_code" type="text" class="validate-code" :placeholder="$t('register.inputVerificationCode')" />
                <img  class="get-validate" @click="getImageCode" :src="imageGetUrl" ref="getImage"/>
              </el-form-item>
              <el-form-item>
                <el-button class="register-btn" @click="submitForm('ruleForm')">{{$t('button.confirm')}}</el-button>
              </el-form-item>
            </el-form>
            <div class="reg-login">
              <nuxt-link :to="$i18n.path('loginEmail')">{{$t('register.loginExistAccount')}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginAd from '~/components/LoginAd'
import { resetEmail, codeValidate } from '../../service/cumsService'
import { MessageBox } from 'element-ui'
import api from '../../utils/api'

export default {
  data () {
    const checkCode = (rule, value, callback) => {
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
    }
    return {
      imageGetUrl: api.baseUrl + api.getImageCode,
      ruleForm: {
        email: '',
        verification_code: null
      },
      rules: {
        email: [
          { required: true, message: this.$t('register.inputYourTel'), trigger: 'blur' }
        ],
        verification_code: [
          { required: true, message: this.$t('register.inputVerificationCode'), trigger: 'blur' },
          { pattern: /^[a-z0-9]{4}$/, message: this.$t('register.correctVerificationCode'), trigger: 'blur' },
          { validator: checkCode, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    LoginAd
  },
  methods: {
    getImageCode: function () {
      this.$refs.getImage.setAttribute('src', this.imageGetUrl + '?time=' + new Date().getTime())
    },
    submitForm: function (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          resetEmail({
            ..._this.ruleForm
          }, function (res) {
            if (res.code === '200') {
              MessageBox.alert(_this.$t('register.emailPasswordTip'), {type: 'success'}).then(function () {
                _this.$router.push({ path: _this.$i18n.path('loginEmail') })
                _this.loading = false
              })
            }
          }, function () {

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

<template>
    <div class="container login">
        <div class="content">
            <img src="~static/login_bg.jpg" />
            <div class="login-body">
                <div class="login-content">
                    <div class="login-info">
                        <login-ad />
                    </div>
                    <div class="login-form">
                        <div class="login-title">{{$t('register.welcomeLogin')}}</div>
                        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="form-body" @keyup.enter.native="submitForm('ruleForm')">
                            <el-form-item prop="email" style="margin-bottom: 0">
                                <el-input v-model="ruleForm.email" :placeholder="$t('register.inputEmail')"></el-input>
                            </el-form-item>
                            <el-form-item style="margin-bottom: 0; clear: both">
                                <div style="float: right;margin: 0 5px 0 auto">
                                    <nuxt-link :to="{ path:$i18n.path('login'), query:{ redirect: redirect, reset: 'tel'} }">{{$t('register.loginTel')}}></nuxt-link>
                                </div>
                            </el-form-item>
                            <el-form-item prop="password" style="margin-bottom: 6px">
                                <el-input v-model="ruleForm.password" type="password" :placeholder="$t('register.inputPassword')"></el-input>
                            </el-form-item>
                            <el-form-item prop="remember" style="margin-bottom: 5px; text-align: left">
                                <el-checkbox v-model="ruleForm.remember" type="checkbox">{{$t('button.remember')}}</el-checkbox>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="login-btn" @click="submitForm('ruleForm')">{{$t('button.login')}}</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="login-reg">
                            <nuxt-link :to="$i18n.path('forgetEmail')" >{{$t('register.forgetPassword')}}</nuxt-link>
                            <nuxt-link :to="{ path:$i18n.path('registerEmail'), query:{ redirect: redirect} }" >{{$t('register.registerNow')}}</nuxt-link>
                        </div>
                        <div class="other-login">
                            <span>{{$t('register.otherAccount')}}</span>
                        </div>
                        <div class="login-type">
                            <a href="#"><img src="~static/qq.jpg" /></a>
                            <a href="#"><img src="~static/wechat.jpg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LoginAd from '~/components/LoginAd'
import { loginEmail } from '../../service/cumsService'
import utils from '../../utils/utils'
import CryptoJS from 'crypto-js'
import { mapMutations } from 'vuex'
import api from '../../utils/api'

export default {
  components: {
    LoginAd
  },
  data () {
    return {
      redirect: '/',
      ruleForm: {
        email: '',
        password: '',
        remember: false
      },
      rules: {
        email: [
          { required: true, message: this.$t('register.inputEmail'), trigger: 'blur' },
          { pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, message: this.$t('register.correctEmail') }
        ],
        password: [
          { required: true, message: this.$t('register.inputPassword'), trigger: 'blur' }
        ]
      }
    }
  },
  beforeMount () {
    this.ids = ''
    if (this.$route.fullPath.includes('&id=')) {
      this.ids = this.$route.fullPath.substring(this.$route.fullPath.indexOf('&id='))
    }
  },
  mounted () {
    this.redirect = this.$route.query.redirect ? this.$route.query.redirect === '/' ? this.$i18n.path('') : this.$route.query.redirect : this.$i18n.path('')
    sessionStorage.clear()
    const remember = utils.getCookie('_mf')
    let mf = null
    if (remember) {
      const bytes = CryptoJS.AES.decrypt(remember, 'startimes ltp')
      mf = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }
    this.ruleForm = {
      email: mf && mf.loginType === 'email' ? mf.email : '',
      password: mf && mf.loginType === 'email' ? mf.password : '',
      remember: mf && mf.loginType === 'email' ? mf.remember : false
    }
  },
  methods: {
    ...mapMutations([
      'SET_BASEINFO'
    ]),
    submitForm (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        let myLogin = ''
        if (valid) {
          const ruleForm = Object.assign(this.ruleForm)
          ruleForm.loginType = 'email'
          if (this.ruleForm.remember) {
            myLogin = JSON.stringify(this.ruleForm)
          } else {
            const rememberDTO = {
              email: this.ruleForm.email,
              remember: false,
              loginType: 'email'
            }
            myLogin = JSON.stringify(rememberDTO)
          }
          const _mf = CryptoJS.AES.encrypt(myLogin, 'startimes ltp')
          const expire = new Date((new Date()).getTime() + 8760 * 3600000)
          document.cookie = '_mf=' + _mf.toString() + ';expires=' + expire
          loginEmail({
            ...this.ruleForm
          }, function (res) {
            if (res) {
              const _res = JSON.stringify(res)
              const _info = CryptoJS.AES.encrypt(_res, 'startimes ltp')
              utils.setSession('_info', _info.toString())
              _this.SET_BASEINFO({ ...res })
              if (_this.redirect.includes('translator')) {
                utils.toTranslator(api.translatorsiteURL, null, _this.ids)
              } else {
                _this.$router.push({ path: _this.redirect })
              }
            }
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
.login {
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
        .login-form{
          width: 360px;
          background-color: #ffffff;
          position: absolute;
          top:50%;
          right: 0;
          margin-top: -194px;
          padding: 30px 20px 20px;
          .login-title{
            text-align: left;
            font-size: 16px;
            color: #a27c4c;
          }
          .form-body{
            margin-top: 20px;
            margin-bottom: 10px;
            .login-btn{
              display: block;
              cursor: pointer;
              width: 100%;
              height: 40px;
              font-size: 14px;
              background-color: #3c4860;
              border: 0;
              color: #ffffff;
              border-radius: 2px;
              box-shadow: 0 10px 20px #cccccc;
            }
          }
          .login-reg{
            margin-top: -10px;
            a{
              display: inline-block;
              width: 50%;
              color: #000000;
              font-size: 12px;
              text-decoration: none;
              &:first-child{
                text-align: left;
              }
              &:last-child{
                text-align: right;
              }
            }
          }
          .other-login{
            width: 100%;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 20px;
            color: #999999;
            font-size: 12px;
            line-height: 30px;
            span {
              background-color: #fff;
              padding: 0 10px;
            }
            &:after{
              display: block;
              width: 100%;
              content: '';
              width: 100%;
              background: #d7d8d9;
              height: 1px;
              margin-top: -15px;
            }
          }
          .login-type {
            display: inline-block;
            img{
              display: inline-block;
              margin: 10px 40px 0;
              width: 60px;
              height: 51px;
              filter: grayscale(1);
            }
          }
        }
      }
    }
  }
}
</style>

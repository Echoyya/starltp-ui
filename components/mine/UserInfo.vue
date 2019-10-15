<template>
    <div class="main-body">
        <div class="title clear"><i class="iconfont">&#xe687;</i> <span>{{$t('mine.basicInfo')}}</span><i v-if="!edit" class="iconfont bianji" @click="editUser">&#xe602;</i><i v-if="edit" class="iconfont bianji" @click="editUser">&#xe669;</i></div>
        <div v-if="!edit" class="user-detail">
            <p><span class='InfoBold'>{{$t('mine.userName')}}</span>: {{ user.name }}</p>
            <p><span class='InfoBold'>{{$t('mine.realName')}}</span>: {{ user.nick_name }}</p>
            <p><span class='InfoBold'>{{$t('mine.email')}}</span>: {{ user.email }}</p>
            <p><span class='InfoBold'>{{$t('mine.companyName')}}</span>: {{ user.company }}</p>
            <p><span class='InfoBold'>{{$t('mine.telNum')}}</span>: {{ user.phone_number }}</p>
            <p><span class='InfoBold'>{{$t('mine.registerTime')}}</span>: {{ user.create_time }}</p>
        </div>
        <el-form v-if="edit" ref="ruleForm" :model="user" :rules="rules" class="user-detail" label-width="100px">
            <el-form-item :label="$t('mine.realName')" prop="nick_name">
                <el-input v-model="user.nick_name"></el-input>
            </el-form-item>
            <!--<el-form-item :label="$t('mine.telNum')" prop="phone_number">-->
            <!--<el-input v-model="user.phone_number"></el-input>-->
            <!--</el-form-item>-->
            <el-form-item :label="$t('mine.email')" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item :label="$t('mine.companyName')" prop="company">
                <el-input v-model="user.company"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="ok-btn" @click="submitForm('ruleForm')">{{$t('button.confirm')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  import { getUser, putUserMail } from '../../service/cumsService'
  import { mapState, mapMutations } from 'vuex'
  import moment from 'moment-timezone'
  import { MessageBox } from 'element-ui'

  export default {
    data () {
      return {
        edit: false,
        user: {},
        rules: {
          email: [
            { required: true, message: this.$t('register.correctEmail'), trigger: 'blur' },
            { type: 'email', message: this.$t('register.correctEmail'), trigger: 'blur' }
          ]
          //          phone_number: [
          //            { pattern: /^\d{1,30}$/, message: this.$t('register.correctTel') }
          //          ]
        }
      }
    },
    computed: {
      ...mapState([
        'token'
      ])
    },
    mounted () {
      const _this = this
      getUser({
        token: this.token
      }, function (res) {
        res.create_time = moment(res.create_time).format('YYYY-MM-DD HH:mm:ss')
        _this.user = res
      })
    },
    methods: {
      ...mapMutations([
        'SET_BASEINFO'
      ]),
      editUser () {
        this.edit = !this.edit
        const _this = this
        getUser({
          token: this.token
        }, function (res) {
          res.create_time = moment(res.create_time).format('YYYY-MM-DD HH:mm:ss')
          _this.user = res
        })
      },
      submitForm (formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            putUserMail({
              token: _this.token,
              nick_name: _this.user.nick_name,
              email: _this.user.email,
              phone_number: _this.user.phone_number,
              company: _this.user.company
            }, function (res) {
              MessageBox.alert('修改信息成功', {type: 'success'}).then(function () {
                _this.edit = false
              })
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
  .main-body{
    .title .bianji{
      float: right;
      cursor: pointer;
    }
    .user-detail{
      width: 300px;
      margin: 100px auto;
      &.el-form{
        width: 400px;
      }
      p {
        color: #999999;
        line-height: 2.8;
      }
      .InfoBold{
        font-weight: bold;
      }
      .ok-btn {
        width: 250px;
      }
    }
  }
</style>

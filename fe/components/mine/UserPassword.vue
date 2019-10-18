<template>
    <div class="main-body change-password">
        <div class="title"><i class="iconfont">&#xe64a;</i> <span>{{$t('mine.changePassword')}}</span></div>
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="form-body">
            <el-form-item prop="original_password">
                <el-input v-model="ruleForm.original_password" type="password" :placeholder="$t('mine.originPassword')"></el-input>
            </el-form-item>
            <el-form-item prop="new_password">
                <el-input v-model="ruleForm.new_password" type="password" :placeholder="$t('mine.newPassword')"></el-input>
            </el-form-item>
            <el-form-item prop="confirm_password">
                <el-input v-model="ruleForm.confirm_password" type="password" :placeholder="$t('mine.confirmPassword')"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="ok-btn" @click="submitForm('ruleForm')">{{$t('button.confirm')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { change } from '../../service/cumsService'
import { mapState } from 'vuex'
import { MessageBox } from 'element-ui'

export default {
  data () {
    return {
      ruleForm: {
        original_password: '',
        new_password: '',
        confirm_password: ''
      },
      rules: {
        original_password: [
          { required: true, message: this.$t('mine.originPassword') },
          { min: 8, max: 14, message: this.$t('register.length8_14') }
        ],
        new_password: [
          { required: true, message: this.$t('mine.newPassword') },
          { min: 8, max: 14, message: this.$t('register.length8_14') }
        ],
        confirm_password: [
          { required: true, message: this.$t('mine.confirmPassword') },
          { min: 8, max: 14, message: this.$t('register.length8_14') },
          {
            validator: (rule, value, callback) => {
              if (value !== this.ruleForm.new_password) {
                callback(new Error(this.$t('mine.notMatched')))
              } else {
                callback()
              }
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
  methods: {
    submitForm (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          change({
            token: _this.token,
            original_password: _this.ruleForm.original_password,
            new_password: _this.ruleForm.new_password
          }, function (res) {
            if (res.code === '200') {
              MessageBox.alert(_this.$t('mine.changeSuccess'), {type: 'success'}).then(function () {
                _this.$refs[formName].resetFields()
              })
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
.change-password{
  .form-body{
    width: 350px;
    margin: 120px auto;
  }
}
</style>

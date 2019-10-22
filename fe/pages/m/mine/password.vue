<template>
    <div class="container m-mine-password">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="form-body">
            <el-form-item prop="original_password">
                <el-input v-model="ruleForm.original_password" type="password" placeholder="请输入原密码"></el-input>
            </el-form-item>
            <el-form-item prop="new_password">
                <el-input v-model="ruleForm.new_password" type="password" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item prop="confirm_password">
                <el-input v-model="ruleForm.confirm_password" type="password" placeholder="请输入确认密码"></el-input>
            </el-form-item>
        </el-form>
        <div class="button-item">
            <button class="m-button" @click="submitForm('ruleForm')">确定</button>
        </div>
    </div>
</template>

<script>
import { change } from '../../../service/cumsService'
import { mapState } from 'vuex'
import { MessageBox } from 'element-ui'

export default {
  layout: 'mobile',
  middleware: 'auth',
  data () {
    return {
      ruleForm: {
        original_password: '',
        new_password: '',
        confirm_password: ''
      },
      rules: {
        original_password: [
          { required: true, message: '请输入原密码' },
          { min: 8, max: 14, message: '长度在 8 到 14 个字符' }
        ],
        new_password: [
          { required: true, message: '请输入新密码' },
          { min: 8, max: 14, message: '长度在 8 到 14 个字符' }
        ],
        confirm_password: [
          { required: true, message: '请输入确认密码' },
          { min: 8, max: 14, message: '长度在 8 到 14 个字符' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.ruleForm.new_password) {
                callback(new Error('两次输入密码不一致!'))
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
              MessageBox.alert('修改密码成功', {type: 'success'}).then(function () {
                _this.$router.push({ path: '/m/mine' })
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
.m-mine-password{
  background-color: #ffffff;
  width: 100%;
  padding: 30% 20px;
  .button-item {
    text-align: center;
  }
}
</style>

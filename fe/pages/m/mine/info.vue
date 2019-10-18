<template>
<div class="container m-mine-info">
  <div class="m-edit-form">
    <div class="m-edit-item">
      <label>用户名</label><input type="text" v-model="user.name" disabled/>
    </div>
    <div class="m-edit-item">
      <label>手机号码</label><input type="text" v-model="user.phone_number" disabled/>
    </div>
    <div class="m-edit-item">
      <label>注册时间</label><input type="text" v-model="user.create_time" disabled/>
    </div>
    <div class="m-edit-item">
      <label>真实姓名</label><input type="text" v-model="user.nick_name" placeholder="请输入您的真实姓名"/>
    </div>
    <div class="m-edit-item">
      <label>邮箱地址</label><input type="text" v-model="user.email" placeholder="请输入您的邮箱"/>
    </div>
    <div class="m-edit-item">
      <label>公司名称</label><input type="text" v-model="user.company" placeholder="请输入您的公司名称"/>
    </div>
    <div class="m-edit-btn">
      <button class="m-button" @click="edit">修改</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { getUser, putUser } from '../../../service/cumsService'
import moment from 'moment-timezone'
import { MessageBox } from 'element-ui'

export default {
  layout: 'mobile',
  middleware: 'auth',
  data () {
    return {
      user: {}
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
    edit: function () {
      if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.user.email)) {
        MessageBox.alert('请输入正确的邮箱格式', {type: 'error'})
        return false
      }
      const _this = this
      putUser({
        token: _this.token,
        nick_name: _this.user.nick_name,
        email: _this.user.email,
        company: _this.user.company
      }, function (res) {
        MessageBox.alert('修改信息成功', {type: 'success'}).then(function () {
          _this.$router.push({ path: '/m/mine' })
        })
      })
    }
  }
}
</script>

<style lang="less">
.m-mine-info{
  .m-edit-form {
    width: 100%;
    background-color: #ffffff;
    .m-edit-item {
      width: 100%;
      display: inline-flex;
      line-height: 45px;
      border-bottom: 1px solid #e7e7e7;
      label {
        width: 40%;
        padding-left: 20px;
      }
      input {
        width: 100%;
        padding-right: 20px;
        text-align: right;
        border: 0;
        outline: 0;
        &:disabled {
          color: #000000;
          background-color: #ffffff;
        }
      }
    }
    .m-edit-btn {
      width: 100%;
      text-align: center;
      padding: 50px 0;
    }
  }
}
</style>

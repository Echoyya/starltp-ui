<template>
    <div class="container m-mine">
        <div class="header">
            <img class="banner" src="~assets/m_mine_bg.jpg" />
            <div class="userinfo">
                <div class="avater">
                    <img src="~static/default.jpg" />
                </div>
                <div class="name">
                    <p>{{name}} <!--span class="edit"><i class="iconfont bianji">&#xe602;</i></span--></p>
                    <p>注册时间：{{create_time}}</p>
                </div>
            </div>
        </div>
        <div class="mine-link">
            <ul class="menu-list">
                <nuxt-link class="mine-menu-item" tag="li" :to="'/m/mine/info'" ><a><i class="iconfont">&#xe687;</i><span>基本信息</span><i class="iconfont more">&#xe615;</i></a></nuxt-link>
                <nuxt-link class="mine-menu-item" tag="li" :to="'/m/mine/order-list'" ><a><i class="iconfont">&#xe666;</i><span>订单信息</span><i class="iconfont more">&#xe615;</i></a></nuxt-link>
                <nuxt-link class="mine-menu-item" tag="li" :to="'/m/mine/password'" ><a><i class="iconfont">&#xe685;</i><span>修改密码</span><i class="iconfont more">&#xe615;</i></a></nuxt-link>
                <li class="mine-menu-item" @click="logout"><a><i class="iconfont">&#xe652;</i><span>退出</span><i class="iconfont more">&#xe615;</i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getUser } from '../../../service/cumsService'
import moment from 'moment-timezone'

export default {
  layout: 'mobile',
  middleware: 'auth',
  data () {
    return {
      name: '',
      create_time: ''
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
      res.create_time = moment(res.create_time).format('YYYY-MM-DD')
      _this.name = res.name
      _this.create_time = res.create_time
    })
  },
  methods: {
    ...mapMutations([
      'SET_BASEINFO'
    ]),
    logout () {
      sessionStorage.clear()
      this.SET_BASEINFO({ token: '', name: '', phone_number: '' })
      if (location.href.includes('/mine')) {
        location.href = '/m'
      }
    }
  }
}
</script>

<style lang="less">
.m-mine{
  .header {
    position: relative;
    .banner {
      width: 100%;
    }
    .userinfo {
      position: absolute;
      display: inline-flex;
      top: 50%;
      left: 12%;
      margin-top: -70px;
      z-index: 99;
      .avater {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #ffffff;
        overflow: hidden;
        img {
          display: block;
          width: 70px;
          margin: 5px auto;
        }
      }
      .name {
        margin-left: 30px;
        color: #ffffff;
        line-height: 30px;
        margin-top: 10px;
        .bianji {
          color: #735711;
          font-size: 18px;
          margin-left: 30px;
        }
      }
    }
  }
  .mine-link{
    width: 100%;
    background-color: #ffffff;
    .menu-list {
      width: 100%;
      .mine-menu-item {
        align-items: center;
        line-height: 45px;
        padding: 0 10px 0 30px;
        &:not(:last-child){
          border-bottom: 1px solid #e7e7e7;
        }
        font-size: 16px;
        .iconfont {
          margin-right: 15px;
          color: #a27c4c;
          font-size: 20px;
        }
        a {
          display: block;
          color: #000000;
        }
        .more {
          font-size: 16px;
          color: #000000;
          float: right;
        }
      }
    }
  }
}
</style>

<template>
<div class="container m-mine-list">
  <ul class="order-list" v-if="list.length > 0">
    <nuxt-link class="order-item" v-for="item in list" :key="item.id" tag="li" :to="'/m/mine/order-detail?id='+item.id">
      <div class="main">{{item.title}}</div>
      <div class="time"><span class="language">{{item.customizedOrderItemViewDTO.sourceLanguage}} - {{item.customizedOrderItemViewDTO.targetLanguages}}</span>{{item.orderTime}}</div>
      <div class="status" :class="{'done':item.orderStatus=='已完成', 'doing':item.orderStatus=='处理中'}">{{item.orderStatus}}</div>
      <i class="iconfont more">&#xe615;</i>
    </nuxt-link>
  </ul>
  <div v-if="list.length = 0" class="no-list">
    您还没有订单
  </div>
</div>
</template>

<script>
import { getOrders } from '../../../service/orderService'
import utils from '../../../utils/utils'
import config from '../../../utils/config'
import moment from 'moment-timezone'

export default {
  layout: 'mobile',
  middleware: 'auth',
  created () {
    if (process.browser) {
      this.formatConfig()
      this.token = utils.getSession('_info').token
      this.getOrders()
    }
  },
  data () {
    return {
      type: '',
      page_number: 1,
      page_size: 1000,
      sort_property: 'ORDERTIME',
      sort_direction: 'DESC',
      list: [],
      orderStatus: {},
      languages: {},
      areaOfField: {},
      applicationScene: {},
      businessType: {}
    }
  },
  methods: {
    formatConfig: function () {
      for (let i = 0; i < config.orderStatus.length; i++) {
        this.orderStatus[config.orderStatus[i].value] = config.orderStatus[i].label
      }
      for (let i = 0; i < config.languages.length; i++) {
        this.languages[config.languages[i].value] = config.languages[i].label
      }
      for (let i = 0; i < config.areaOfField.length; i++) {
        this.areaOfField[config.areaOfField[i].value] = config.areaOfField[i].label
      }
      for (let i = 0; i < config.applicationScene.length; i++) {
        this.applicationScene[config.applicationScene[i].value] = config.applicationScene[i].label
      }
      for (let i = 0; i < config.businessType.length; i++) {
        this.businessType[config.businessType[i].value] = config.businessType[i].label
      }
    },
    changeType: function (type) {
      this.type = type
      this.getOrders()
    },
    getOrders: function () {
      const _this = this
      const params = {
        token: this.token,
        page_number: this.page_number,
        page_size: this.page_size,
        sort_property: this.sort_property,
        sort_direction: this.sort_direction
      }
      if (this.type) {
        params.orderStatus = this.type
      }
      getOrders(params, function (res) {
        const _list = res.datas ? res.datas : []
        let newList = []
        for (let i = 0; i < _list.length; i++) {
          const order = _list[i]
          order.orderTime = moment(order.orderTime).format('YYYY-MM-DD HH:mm:ss')
          order.customizedOrderItemViewDTO.sourceLanguage = _this.languages[order.customizedOrderItemViewDTO.sourceLanguage]
          let language = ''
          const _targetLanguages = order.customizedOrderItemViewDTO.targetLanguages
          const targetLanguages = _targetLanguages.split(',')
          for (let i = 0; i < targetLanguages.length; i++) {
            language += _this.languages[targetLanguages[i]]
            if (i !== targetLanguages.length - 1) {
              language += '、'
            }
          }
          order.customizedOrderItemViewDTO.targetLanguages = language
          order.customizedOrderItemViewDTO.businessType = _this.businessType[order.customizedOrderItemViewDTO.businessType]
          order.customizedOrderItemViewDTO.areaOfField = _this.areaOfField[order.customizedOrderItemViewDTO.areaOfField]
          order.customizedOrderItemViewDTO.applicationScene = _this.applicationScene[order.customizedOrderItemViewDTO.applicationScene]
          order.orderStatus = _this.orderStatus[order.orderStatus]
          newList.push(order)
        }
        _this.list = newList
      })
    }
  }
}
</script>

<style lang="less">
.m-mine-list{
  .no-list {
    position: absolute;
    top: 45%;
    left: 50%;
    margin-left: -50px;
    text-align: center;
  }
  .order-list {
    background-color: #ffffff;
    .order-item {
      position: relative;
      padding: 0 90px 0 20px;
      font-size: 12px;
      border-bottom: 1px solid #e7e7e7;
      .main {
        line-height: 30px;
        font-size: 14px;

      }
      .time {
        .language{
          margin-right: 10px;
          border-radius: 5px;
          line-height: 10px;
          color: #999999;
        }
        line-height: 20px;
        font-size: 10px;
        color: #999999;
      }
      .more {
        position: absolute;
        top: 17px;
        right: 10px;
      }
      .status {
        position: absolute;
        top: 17px;
        right: 30px;
        display: inline-block;
        font-size: 12px;
        padding: 0 5px;
        color: #ffffff;
        border-radius: 5px;
        background-color: #a27c4c;
        &.done {
          background-color: #909399;
        }
        &.doing {
          background-color: #67C23A;
        }
      }
    }
  }
}
</style>

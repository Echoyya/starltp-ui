<template>
<div class="container m-mine-detail">
  <div v-if="order" class="order-detail">
    <p class="order-title">{{ order.title }}</p>
    <p>订单编号<span class="maohao">:</span>{{ order.orderNumber }}</p>
    <p>语言<span class="maohao">:</span>{{ order.customizedOrderItemsDto.sourceLanguage }} <i class="iconfont">&#xe60c;</i> {{ order.customizedOrderItemsDto.targetLanguages }}</p>
    <p>业务类型<span class="maohao">:</span>{{ order.customizedOrderItemsDto.businessType }}</p>
    <p>领域范围<span class="maohao">:</span>{{ order.customizedOrderItemsDto.areaOfField }}</p>
    <p v-if="order.customizedOrderItemsDto.applicationScene">应用场景<span class="maohao">:</span>{{ order.customizedOrderItemsDto.applicationScene }}</p>
    <p v-if="order.customizedOrderItemsDto.translationContent">译制内容<span class="maohao">:</span>{{ order.customizedOrderItemsDto.translationContent }}</p>
    <p>译制要求<span class="maohao">:</span>{{ order.customizedOrderItemsDto.request }}</p>
    <p v-if="order.customizedOrderItemsDto.workPlace">工作地点<span class="maohao">:</span>{{ order.customizedOrderItemsDto.workPlace }}</p>
    <p v-if="order.customizedOrderItemsDto.beginTime">时间范围<span class="maohao">:</span>{{ order.customizedOrderItemsDto.beginTime }} - {{order.customizedOrderItemsDto.endTime}}</p>
    <p>进展情况<span class="maohao">:</span>{{ order.orderStatus }}</p>
    <p>下单时间<span class="maohao">:</span>{{ order.orderTime }}</p>
    <p v-if="order.customizedOrderItemsDto.deliverDate">完成时间<span class="maohao">:</span>{{ order.customizedOrderItemsDto.deliverDate }}</p>
    <p v-if="order.quotePrice">总体报价<span class="maohao">:</span>{{ order.quotePrice }}</p>
    <p v-if="order.customizedOrderItemsDto.orderFilesList.length > 0">附件:
    <ul class="el-upload-list el-upload-list--text">
      <li class="el-upload-list__item" v-for="item in order.customizedOrderItemsDto.orderFilesList">
        <a :href="fileServerUrl+item.fileUrl+'?filename='+item.fileName" class="el-upload-list__item-name" target="_blank" download><i class="el-icon-document"></i>{{item.fileName}}</a>
      </li>
    </ul>
    </p>
  </div>
</div>
</template>

<script>
import { getOrderDetail } from '../../../service/orderService'
import utils from '../../../utils/utils'
import config from '../../../utils/config'
import moment from 'moment-timezone'
import api from '../../../utils/api'

export default {
  layout: 'mobile',
  middleware: 'auth',
  mounted () {
    if (process.browser) {
      const _this = this
      this.token = utils.getSession('_info').token
      this.formatConfig()
      getOrderDetail({
        id: this.$route.query.id,
        token: this.token
      }, function (order) {
        order.orderTime = moment(order.orderTime).format('YYYY-MM-DD HH:mm:ss')
        if (order.customizedOrderItemsDto.beginTime) {
          order.customizedOrderItemsDto.beginTime = moment(order.customizedOrderItemsDto.beginTime).format('YYYY-MM-DD HH:mm:ss')
        }
        if (order.customizedOrderItemsDto.endTime) {
          order.customizedOrderItemsDto.endTime = moment(order.customizedOrderItemsDto.endTime).format('YYYY-MM-DD HH:mm:ss')
        }
        if (order.customizedOrderItemsDto.deliverDate) {
          order.customizedOrderItemsDto.deliverDate = moment(order.customizedOrderItemsDto.deliverDate).format('YYYY-MM-DD HH:mm:ss')
        }
        order.customizedOrderItemsDto.sourceLanguage = _this.languages[order.customizedOrderItemsDto.sourceLanguage]
        let language = ''
        const _targetLanguages = order.customizedOrderItemsDto.targetLanguages
        const targetLanguages = _targetLanguages.split(',')
        for (let i = 0; i < targetLanguages.length; i++) {
          language += _this.languages[targetLanguages[i]]
          if (i !== targetLanguages.length - 1) {
            language += '、'
          }
        }
        order.customizedOrderItemsDto.targetLanguages = language
        order.customizedOrderItemsDto.businessType = _this.businessType[order.customizedOrderItemsDto.businessType]
        order.customizedOrderItemsDto.areaOfField = _this.areaOfField[order.customizedOrderItemsDto.areaOfField]
        order.customizedOrderItemsDto.applicationScene = _this.applicationScene[order.customizedOrderItemsDto.applicationScene]
        order.orderStatus = _this.orderStatus[order.orderStatus]
        _this.order = order
      })
    }
  },
  data () {
    return {
      order: null,
      orderStatus: {},
      languages: {},
      areaOfField: {},
      applicationScene: {},
      businessType: {},
      fileServerUrl: api.baseUrl
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
    }
  }
}
</script>

<style lang="less">
.m-mine-detail{
  background-color: #ffffff;
  .order-detail {
    padding: 30px 20px 0;
    .order-title {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
    }
    p {
      line-height: 35px;
      font-size: 14px;
      .maohao {
        margin-right: 10px;
      }
    }
  }
}
</style>

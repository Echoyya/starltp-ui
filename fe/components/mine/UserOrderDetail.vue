<template>
    <div class="main-body">
        <!--<div class="title clear"><a @click="setAllOrders()" style="cursor:pointer">{{$t('mine.orderInfo')}}</a> > {{$t('mine.orderDetail')}}</div>-->
        <div v-if="order" class="order-detail">
            <p class="order-title" style="margin-top:0">{{$t('mine.basicInfo')}}<span class="maohao">:</span>{{ order.title }}</p>
            <el-row  style="margin-top: 10px">
                <el-col :span="12">
                    <p>{{$t('mine.orderNumber')}}<span class="maohao">:</span>{{ order.orderNumber }}</p>
                </el-col>
                <el-col :span="12" >
                    <p>{{$t('mine.theProcess')}}<span class="maohao">:</span>{{ order.orderStatus }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    {{$t('mine.language')}}<span class="maohao">:</span>
                    <div style="display:inline-flex;max-width:250px;">{{ order.customizedOrderItemsDto.sourceLanguage }} <i class="iconfont">&#xe60c;</i> {{ order.customizedOrderItemsDto.targetLanguages }}</div>
                </el-col>
                <el-col :span="12" >
                    <p>{{$t('mine.businessType')}}<span class="maohao">:</span>{{ order.customizedOrderItemsDto.businessType }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" >
                    <p>{{$t('order.area')}}<span class="maohao">:</span>{{ order.customizedOrderItemsDto.areaOfField }}</p>
                </el-col>
                <el-col :span="12" >
                    <p v-if="order.customizedOrderItemsDto.applicationScene">{{$t('order.scene')}}<span class="maohao">:</span>{{ order.customizedOrderItemsDto.applicationScene }}</p>
                </el-col>
            </el-row>
            <el-row v-if="order.customizedOrderItemsDto.workPlace">
                <el-col :span="12" >
                    <p>{{$t('order.workPlace')}}<span class="maohao">:</span>{{ order.customizedOrderItemsDto.workPlace }}</p>
                </el-col>
                <el-col :span="16">
                    <p>{{$t('order.timeLimit')}}<span class="maohao">:</span>{{ order.customizedOrderItemsDto.beginTime }} ~ {{order.customizedOrderItemsDto.endTime}}</p>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="12" >
                    <p>{{$t('mine.orderTime')}}<span class="maohao">:</span>{{ order.orderTime }}</p>
                </el-col>
                <el-col :span="12">
                    <p v-if="order.customizedOrderItemsDto.deliverDate">{{$t('mine.completeTime')}} <span class="maohao">:</span>{{ order.customizedOrderItemsDto.deliverDate }}</p>
                </el-col>
            </el-row>
            <el-row v-if="order.customizedOrderItemsDto.request">
                <el-col :span="24" >
                    <p>{{$t('mine.request')}}<span class="maohao">:</span>{{ order.customizedOrderItemsDto.request }}</p>
                </el-col>
            </el-row>
            <div  v-if="order.currency">
                <p class="order-title">{{$t('mine.priceInfo')}}<span class="maohao">:</span>{{ order.quotedPrice }} {{$t('enum.'+order.currency)}}</p>
                <ul class="installment">
                    <li  v-for="(item, index) in installments" :key="index">
                        <el-row>
                            <el-col :span="4" >
                                <p>{{$t('mine.installmentIndex').replace('*', index+1)}}</p>
                            </el-col>
                            <el-col :span="4" >
                                <p>{{item.quotedPrice}} {{$t('enum.'+order.currency)}}</p>
                            </el-col>
                            <el-col :span="4" >
                                <p>{{$t('enum.'+item.payStatus)}}</p>
                            </el-col>
                        </el-row>
                    </li>
                </ul>
            </div>
            <div v-if="order.customizedOrderItemsDto.orderFilesList.length > 0">
                <p class="order-title">{{$t('mine.originalFiles')}} </p>
                <p>
                    <ul class="el-upload-list el-upload-list--text" style="margin-left:0">
                        <li v-for="(item,index) in order.customizedOrderItemsDto.orderFilesList" :key="index" class="el-upload-list__item" style="margin:10px 0">
                            <a href="javascript:void(0)" class="el-upload-list__item-name" @click="download(item.fileName, item.fileUrl)"><i class="el-icon-document"></i>{{item.fileName}}</a>
                        </li>
                    </ul>
                </p>
            </div>
            <p v-if="order.customizedOrderItemsDto.publishers&&order.customizedOrderItemsDto.publishers.length > 0" class="order-title">{{$t('mine.publishFiles')}} </p>
            <p v-if="order.customizedOrderItemsDto.orderFilesList.length > 0">
                <ul class="el-upload-list el-upload-list--text" style="margin-left:0; margin-top:10px">
                    <li v-for="(item,index) in order.customizedOrderItemsDto.publishers" :key="index" class="el-upload-list__item" style="margin:10px 0">
                        <a href="javascript:void(0)" class="el-upload-list__item-name" @click="download(item.fileName, item.fileUrl)"><i class="el-icon-document"></i>{{item.fileName}}</a>
                    </li>
                </ul>
            </p>
            <el-button class="ok-btn return-btn" @click="setAllOrders()">{{$t('button.revert')}}</el-button>
        </div>
    </div>
</template>
<script>
  import { getOrderDetail, getInstallmentQuotation, getDownloadUrl } from '../../service/orderService'
  import utils from '../../utils/utils'
  import config from '../../utils/config'
  import moment from 'moment-timezone'
  import api from '../../utils/api'

  export default {
    props: {
      'id': {
        type: Number,
        required: false,
        default:0
      },
      'setIfShowList': {
        type: Function,
        required: false,
        default:null
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
        installments: [],
        fileServerUrl: api.baseUrl
      }
    },
    mounted () {
      if (process.browser) {
        const _this = this
        this.token = utils.getSession('_info').token
        this.formatConfig()
        getOrderDetail({
          id: this.id,
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
              language += _this.$t('symbol.seperate')
            }
          }
          order.customizedOrderItemsDto.targetLanguages = language
          order.customizedOrderItemsDto.businessType = _this.businessType[order.customizedOrderItemsDto.businessType]
          order.customizedOrderItemsDto.areaOfField = _this.areaOfField[order.customizedOrderItemsDto.areaOfField]
          order.customizedOrderItemsDto.applicationScene = _this.applicationScene[order.customizedOrderItemsDto.applicationScene]
          order.orderStatus = _this.orderStatus[order.orderStatus]

          _this.order = order

          if (order.quotedPrice !== undefined) {
            getInstallmentQuotation({
              id: _this.id,
              token: _this.token
            }, function (installment) {
              _this.installments = installment.datas
            })
          }
        })
      }
    },
    methods: {
      formatConfig () {
        for (let i = 0; i < config.orderStatus.length; i++) {
          this.orderStatus[config.orderStatus[i].value] = this.$t(config.orderStatus[i].label)
        }
        for (let i = 0; i < config.languages.length; i++) {
          this.languages[config.languages[i].value] = this.$t(config.languages[i].label)
        }
        for (let i = 0; i < config.areaOfField.length; i++) {
          this.areaOfField[config.areaOfField[i].value] = this.$t(config.areaOfField[i].label)
        }
        for (let i = 0; i < config.applicationScene.length; i++) {
          this.applicationScene[config.applicationScene[i].value] = this.$t(config.applicationScene[i].label)
        }
        for (let i = 0; i < config.businessType.length; i++) {
          this.businessType[config.businessType[i].value] = this.$t(config.businessType[i].label)
        }
      },
      setAllOrders () {
        this.setIfShowList()
      },
      urlReplace (string) {
        const regExp = /[+/?%#&=]/
        return string.replace(/ /g, '_').split('').map((x) => (regExp.test(x) ? `%${x.charCodeAt(0).toString(16)}` : x)).join('')
      },
      handleFileName (string) {
        const FileArr = [string.substring(0, string.lastIndexOf('.')), string.substring(string.lastIndexOf('.'))]
        const myDate = new Date()
        const arr = [myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds()]
        const timeStr = arr.join('')
        const newFileName = FileArr[0].length > 10 ? FileArr[0].substring(0, 10) + '_' + timeStr + FileArr[1] : FileArr[0] + '_' + timeStr + FileArr[1]
        return newFileName
      },
      download (name, url) {
        getDownloadUrl({
          fileUri: url,
          fileName: name
        }, function (res) {
          window.open(api.baseUrl + res.downloadUrl.replace('/usr/', '/'))
        })
      }
    }
  }
</script>
<style lang="less">
  .main-body{
    .title{
      font-size: 14px;
      color: #999999;
    }
    .order-detail{
      width: 90%;
      margin: 20px;
      .order-title{
        color: #000000;
        font-size: 18px;
        border-bottom: 1px solid #d8dadf;
        margin-top: 20px;
      }
      .installment{
        margin-top: 10px;
        p{
          color: #999999;
          line-height: 2.5;
        }
      }
      p,div {
        color: #999999;
        line-height: 2.8;
        &.language {
          line-height: 2.4;
          height:39px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          display: inline-block;
        }
        .el-upload-list {
          margin-left: 30px;
        }
        .maohao {
          padding-right: 10px;
        }
        .iconfont{
          font-size: 14px;
        }
      }
      .ok-btn.return-btn{
        width: 200px !important;
        margin: 20px auto;
      }
    }
  }
</style>

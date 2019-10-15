<template>
  <div class="container thematic">
    <banner :title="$t('menu.thematic')" :step="step" :banner="banner" :info="$t('order.thematicInfo')" />
    <div class="form">
      <el-form :model="thematicForm" :rules="rules" ref="thematicForm" :inline-message.boolean="true" label-width="250px" class="form-body">
        <el-form-item :label="$t('order.chooseLanguage')" prop="language" :rules="languageRules" :required.boolean="true">
          <el-select v-model="thematicForm.language.sourceLanguage">
            <el-option v-for="item in config.languages" v-if="item.thematic" :key="item.value" :label="$t(item.label)" :value="item.value"></el-option>
          </el-select>
          <i class="iconfont">&#xe60c;</i>
          <el-select v-model="thematicForm.language.targetLanguages" :multiple.boolean="true" collapse-tags>
            <el-option v-for="item in config.languages" v-if="item.thematic" :key="item.value" :label="$t(item.label)" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('order.area')" prop="areaOfField" :required.boolean="true">
          <el-select v-model="thematicForm.areaOfField">
            <el-option v-for="item in config.areaOfField" v-if="item.thematic" :key="item.value" :label="$t(item.label)" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('order.title')" prop="title">
          <el-input v-model="thematicForm.title"></el-input>
        </el-form-item>
        <el-form-item :label="$t('order.content')" prop="orderFilesList">
          <input type="hidden" v-model="thematicForm.orderFilesList" />
          <star-upload :token="token" :redirect="$i18n.path('thematic')" :update-files="setUploadFile" />
        </el-form-item>
        <el-form-item :label="$t('order.scene')" prop="applicationScene" :required.boolean="true">
          <el-select v-model="thematicForm.applicationScene">
            <el-option v-for="item in config.applicationScene" v-if="item.thematic" :key="item.value" :label="$t(item.label)" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('order.deliverDate')" prop="deliverDate">
          <el-date-picker type="datetime" v-model="thematicForm.deliverDate"  :placeholder="$t('order.pickTime')" style="width: 195px" :picker-options="pickerOptions1" default-time></el-date-picker>
          <div style="font-size: 12px; line-height:18px;color: #C0C4CC; margin-top: 5px">{{$t('order.deliverDateTip')}}</div>
        </el-form-item>
        <el-form-item :label="$t('order.claim')" prop="request">
          <el-input type="textarea" v-model="thematicForm.request" :rows.number="5"></el-input>
        </el-form-item>
        <el-form-item class="agreement" prop="read">
          <el-checkbox v-model="thematicForm.read" true-label="true" false-label=""></el-checkbox><span class="agreement-title">{{$t('order.agree')}}<nuxt-link :to="$i18n.path('about/agreement')" target="_blank"> {{$t('order.protocol')}} </nuxt-link></span>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('thematicForm')" :loading="loading">{{$t('menu.submit')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <fees-side-bar link="thematic-table" />
  </div>
</template>
<script>
import Banner from '~/components/Banner'
import StarUpload from '~/components/StarUpload'
import FeesSideBar from '~/components/FeesSideBar'
import { mapState, mapMutations } from 'vuex'
import config from '../../utils/config'
import { postOrders } from '../../service/orderService'

export default {
  data () {
    return {
      loading: false,
      config: config,
      banner: require('~/static/translate-bg2.jpg'),
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() < Date.now()
        }
      },
      step: [this.$t('order.step1'), this.$t('order.step2'), this.$t('order.step3'), this.$t('order.step4'), this.$t('order.step5'), this.$t('order.step6')],
      languageRules: [
        {
          validator: (rule, value, callback) => {
            if (!value.sourceLanguage) {
              callback(new Error(this.$t('order.chooseSource')))
            } else if (value.targetLanguages.length === 0) {
              callback(new Error(this.$t('order.chooseTarget')))
            } else if (value.targetLanguages.indexOf(value.sourceLanguage) >= 0) {
              callback(new Error(this.$t('order.languageCheck')))
            } else {
              callback()
            }
          },
          trigger: 'change'
        }
      ],
      rules: {
        'title': [
          { required: true, message: this.$t('errTip.titleTip') },
          { min: 1, max: 50, message: this.$t('errTip.lengthTip') }
        ],
        'areaOfField': [
          { required: true, message: this.$t('errTip.areaOfFieldTip') }
        ],
        applicationScene: [
          { required: true, message: this.$t('errTip.sceneTip') }
        ],
        read: [
          { required: true, message: this.$t('errTip.agreeTip') }
        ],
        'workPlace': [
          { required: true, message: this.$t('errTip.workPlaceTip') }
        ],
        request: [
          { min: 0, max: 500, message: this.$t('errTip.requestTip') }
        ],
        orderFilesList: [
          { type: 'array', required: true, message: this.$t('errTip.upLoadTip') }
        ]
      }
    }
  },
  // created () {
  //   this.thematicForm.orderFilesList = []
  // },
  computed: {
    ...mapState([
      'token',
      'thematicForm'
    ])
  },
  components: {
    Banner,
    StarUpload,
    FeesSideBar
  },
  methods: {
    ...mapMutations([
      'RESET_THEMATICFORM'
    ]),
    setUploadFile: function (uid, res, type) {
      if (type === 'add') {
        if (res.successful_files && res.successful_files.length > 0) {
          this.thematicForm.orderFilesList.push({
            uid: uid,
            fileName: res.successful_files[0].original_name,
            fileUrl: res.successful_files[0].resource_url,
            isPublish: false
          })
        }
      } else {
        const index = this.thematicForm.orderFilesList.findIndex(function (item) {
          return item.uid === uid
        })
        this.thematicForm.orderFilesList.splice(index, 1)
      }
    },
    submitForm: function (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!_this.token) {
            _this.$router.push({ path: _this.$i18n.path('login'), query: { redirect: _this.$i18n.path('thematic') } })
          } else {
            _this.loading = true
            const params = { ..._this.thematicForm, businessType: 'THEMATICTRANSLATION', token: _this.token }
            delete params.read
            postOrders(params, function (res) {
              _this.RESET_THEMATICFORM()
              _this.$router.push({ path: _this.$i18n.path('order-success') })
              _this.loading = false
            }, function () {
              _this.loading = false
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less">
.thematic {
  .banner-info {
    text-align: right;
  }
  .form{
    .form-body{
      .type-btn.el-button--mini{
        display: inline-block;
        font-size: 12px;
        height: 30px;
        width: 80px;
        padding: 0;
        letter-spacing: normal;
        background-color: #ffffff;
        border: 1px solid #dcdfe6;
        color: #606266;
        box-shadow:  0 0 0 transparent;
        &.active{
          background-color: #3c4860;
          border-color: #3c4860;
          color: #ffffff;
        }
      }
      .el-radio.is-bordered.is-checked{
        border-color: #3c4860;
        color: #3c4860;
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: #3c4860;
        background-color: #3c4860;
      }
      .el-radio__input.is-checked+.el-radio__label {
        color: #3c4860;
      }
    }
  }
}
</style>

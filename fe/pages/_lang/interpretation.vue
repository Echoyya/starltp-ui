<template>
    <div class="container interpretation">
        <banner
            :title="$t('menu.interpretation')"
            :step="step"
            :banner="banner"
            :info="$t('order.interpretationInfo')"
        />
        <div class="form">
            <el-form
                ref="interpretationForm"
                :model="interpretationForm"
                :rules="rules"
                label-width="250px"
                class="form-body"
            >
                <el-form-item
                    :label="$t('order.chooseLanguage')"
                    prop="language"
                    :rules="languageRules"
                >
                    <el-select v-model="interpretationForm.language.sourceLanguage">
                        <el-option
                            v-for="item in config.languages"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <i class="iconfont">&#xe60c;</i>
                    <el-select v-model="interpretationForm.language.targetLanguages" collapse-tags>
                        <el-option
                            v-for="item in config.languages"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('order.area')" prop="areaOfField">
                    <el-select v-model="interpretationForm.areaOfField">
                        <el-option
                            v-for="item in config.areaOfField"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('order.interpretationType')" prop="title">
                    <el-input v-model="interpretationForm.title"></el-input>
                </el-form-item>
                <div class="el-upload__tip form-tip">{{$t('order.interpretationTip')}}</div>
                <el-form-item :label="$t('order.workPlace')" prop="workPlace">
                    <el-input v-model="interpretationForm.workPlace"></el-input>
                </el-form-item>
                <div class="el-upload__tip form-tip">{{$t('order.detailAddress')}}</div>
                <el-form-item :label="$t('order.backgroundInfo')">
                    <input v-model="interpretationForm.orderFilesList" type="hidden" />
                    <star-upload
                        :token="token"
                        :redirect="$i18n.path('interpretation')"
                        :update-files="setUploadFile"
                    />
                </el-form-item>
                <el-form-item :label="$t('order.timeLimit')" prop="time" :rules="timeRules">
                    <el-date-picker
                        v-model="interpretationForm.time"
                        :picker-options="pickerOptions1"
                        type="datetimerange"
                        :range-separator="$t('order.to')"
                        :start-placeholder="$t('order.starTime')"
                        :end-placeholder="$t('order.endTime')"
                        @change="timeChange"
                    ></el-date-picker>
                    <span v-if="timeShow" class="el-upload__tip">{{timeShow}}</span>
                </el-form-item>
                <el-form-item :label="$t('order.claim')" prop="request">
                    <el-input v-model="interpretationForm.request" type="textarea"></el-input>
                </el-form-item>
                <el-form-item class="agreement" prop="read">
                    <el-checkbox v-model="interpretationForm.read" true-label="true" false-label></el-checkbox>
                    <span class="agreement-title">
                        {{$t('order.agree')}}
                        <nuxt-link
                            :to="$i18n.path('about/agreement')"
                            target="_blank"
                        >{{$t('order.protocol')}}</nuxt-link>
                    </span>
                </el-form-item>
                <el-form-item>
                    <el-button
                        :loading="loading"
                        @click="submitForm('interpretationForm')"
                    >{{$t('menu.submit')}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <fees-side-bar link="listen-translation-table" />
    </div>
</template>
<script>
import Banner from '~/components/Banner'
import FeesSideBar from '~/components/FeesSideBar'
import { mapState, mapMutations } from 'vuex'
import config from '../../utils/config'
import { postOrders } from '../../service/orderService'
import StarUpload from '~/components/StarUpload'

export default {
    components: {
        Banner,
        StarUpload,
        FeesSideBar
    },
    data() {
        return {
            loading: false,
            config,
            banner: require('~/static/translate-bg3.jpg'),
            step: [
                this.$t('order.step1'),
                this.$t('order.step2'),
                this.$t('order.step3'),
                this.$t('order.step4'),
                this.$t('order.step5'),
                this.$t('order.step6')
            ],
            languageRules: [
                {
                    validator: (rule, value, callback) => {
                        if (!value.sourceLanguage) {
                            callback(new Error(this.$t('order.chooseSource')))
                        } else if (value.targetLanguages.length === 0) {
                            callback(new Error(this.$t('order.chooseTarget')))
                        } else if (value.targetLanguages.includes(value.sourceLanguage)) {
                            callback(new Error(this.$t('order.languageCheck')))
                        } else {
                            callback()
                        }
                    },
                    trigger: 'change'
                }
            ],
            timeRules: [
                { type: 'array', required: true, message: this.$t('order.chooseTime'), trigger: 'change' },
                {
                    validator: (rule, value, callback) => {
                        if (value) {
                            if (value.length < 2) {
                                callback(new Error(this.$t('order.chooseTime')))
                            } else if (Date.parse(value[1]) - Date.parse(value[0]) < 3600000) {
                                callback(new Error(this.$t('order.timeLeast')))
                            } else {
                                callback()
                            }
                        } else {
                            callback(new Error(this.$t('order.chooseTime')))
                        }
                    },
                    trigger: 'blur'
                }
            ],
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now()
                }
            },
            timeShow: null,
            rules: {
                title: [{ required: true, message: this.$t('errTip.titleTip') }, { min: 1, max: 50, message: this.$t('errTip.lengthTip') }],
                areaOfField: [{ required: true, message: this.$t('errTip.areaOfFieldTip') }],
                applicationScene: [{ required: true, message: this.$t('errTip.sceneTip') }],
                read: [{ required: true, message: this.$t('errTip.agreeTip') }],
                workPlace: [{ required: true, message: this.$t('errTip.workPlaceTip') }],
                request: [{ min: 0, max: 500, message: this.$t('errTip.requestTip') }],
                orderFilesList: [{ type: 'array', required: true, message: this.$t('errTip.upLoadTip') }]
            }
        }
    },
    // created () {
    //   this.interpretationForm.orderFilesList = []
    // },
    computed: {
        ...mapState(['token', 'interpretationForm'])
    },

    methods: {
        ...mapMutations(['RESET_INTERPRETATIONFORM']),
        setUploadFile(uid, res, type) {
            if (type === 'add') {
                if (res.successful_files && res.successful_files.length > 0) {
                    this.interpretationForm.orderFilesList.push({
                        uid,
                        fileName: res.successful_files[0].original_name,
                        fileUrl: res.successful_files[0].resource_url,
                        isPublish: false
                    })
                }
            } else {
                const index = this.interpretationForm.orderFilesList.findIndex(function(item) {
                    return item.uid === uid
                })
                this.interpretationForm.orderFilesList.splice(index, 1)
            }
        },
        timeChange(value) {
            if (value && value.length === 2) {
                const time = value[1].getTime() - value[0].getTime()
                if (time % (60 * 60 * 1000 * 24) === 0) {
                    this.timeShow = parseInt(time / (60 * 60 * 1000 * 24)) + this.$t('order.day')
                } else {
                    this.timeShow =
                        parseInt(time / (60 * 60 * 1000 * 24)) +
                        this.$t('order.day') +
                        parseInt((time % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000)) +
                        this.$t('order.hour')
                }
            } else {
                this.timeShow = null
            }
        },
        submitForm(formName) {
            const _this = this
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (!_this.token) {
                        _this.$router.push({ path: _this.$i18n.path('login'), query: { redirect: _this.$i18n.path('interpretation') } })
                    } else {
                        _this.loading = true
                        const params = { ..._this.interpretationForm, businessType: 'INTERPRETATIONSERVICES', token: _this.token }
                        delete params.read
                        postOrders(
                            params,
                            function(res) {
                                _this.RESET_INTERPRETATIONFORM()
                                _this.$router.push({ path: _this.$i18n.path('order-success') })
                                _this.loading = false
                            },
                            function() {
                                _this.loading = false
                            }
                        )
                    }
                } else {
                    return false
                }
            })
        }
    }
}
</script>
<style>
.interpretation .banner-info {
    text-align: left;
}
.interpretation .el-upload__tip {
    font-size: 12px;
    text-align: left;
    color: #a27c4c;
    line-height: 1.5;
    padding-left: 10px;
    margin-bottom: 10px;
}
.interpretation .el-upload__tip.form-tip {
    padding-left: 250px;
}
</style>

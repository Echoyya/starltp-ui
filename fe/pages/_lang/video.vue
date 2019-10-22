<template>
    <div class="container video">
        <banner
            :title="$t('menu.video')"
            :step="step"
            :banner="banner"
            :info="$t('order.videoInfo')"
        />
        <div class="form">
            <el-form
                ref="videoForm"
                :model="videoForm"
                :rules="rules"
                label-width="250px"
                class="form-body"
            >
                <el-form-item
                    :label="$t('order.chooseLanguage')"
                    prop="language"
                    :rules="languageRules"
                >
                    <el-select v-model="videoForm.language.sourceLanguage">
                        <el-option
                            v-for="item in config.languages"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <i class="iconfont">&#xe60c;</i>
                    <el-select v-model="videoForm.language.targetLanguages" collapse-tags>
                        <el-option
                            v-for="item in config.languages"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('order.type')" prop="areaOfField">
                    <el-select v-model="videoForm.areaOfField">
                        <el-option
                            v-for="item in config.areaOfField"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('order.title')" prop="title">
                    <el-input v-model="videoForm.title"></el-input>
                </el-form-item>
                <el-form-item :label="$t('order.content')" prop="orderFilesList">
                    <star-upload
                        :token="token"
                        :redirect="$i18n.path('video')"
                        :update-files="setUploadFile"
                    />
                    <input v-model="videoForm.orderFilesList" type="hidden" />
                </el-form-item>
                <el-form-item :label="$t('order.scene')" prop="applicationScene">
                    <el-select v-model="videoForm.applicationScene">
                        <el-option
                            v-for="item in config.applicationScene"
                            :key="item.value"
                            :label="$t(item.label)"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('order.deliverDate')" prop="deliverDate">
                    <el-date-picker
                        v-model="videoForm.deliverDate"
                        type="datetime"
                        :placeholder="$t('order.pickTime')"
                        :picker-options="pickerOptions1"
                        default-time
                    ></el-date-picker>
                    <div
                        style="font-size: 12px; line-height:18px;color: #C0C4CC; margin-top: 5px"
                    >{{$t('order.deliverDateTip')}}</div>
                </el-form-item>
                <el-form-item :label="$t('order.claim')" prop="request">
                    <el-input v-model="videoForm.request" type="textarea"></el-input>
                </el-form-item>
                <el-form-item class="agreement" prop="read">
                    <el-checkbox v-model="videoForm.read" true-label="true" false-label></el-checkbox>
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
                        @click="submitForm('videoForm')"
                    >{{$t('menu.submit')}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <fees-side-bar link="/video-table" />
    </div>
</template>
<script>
import Banner from '~/components/Banner'
import FeesSideBar from '~/components/FeesSideBar'
import StarUpload from '~/components/StarUpload'
import { mapState, mapMutations } from 'vuex'
import config from '../../utils/config'
import { postOrders } from '../../service/orderService'
// import moment from 'moment-timezone'

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
            banner: require('~/static/translate-bg1.jpg'),
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now()
                }
            },
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
    //   this.videoForm.orderFilesList = []
    // },
    computed: {
        ...mapState(['token', 'videoForm'])
    },

    methods: {
        ...mapMutations(['RESET_VIDEOFORM']),
        setUploadFile(uid, res, type) {
            if (type === 'add') {
                if (res.successful_files && res.successful_files.length > 0) {
                    this.videoForm.orderFilesList.push({
                        uid,
                        fileName: res.successful_files[0].original_name,
                        fileUrl: res.successful_files[0].resource_url,
                        isPublish: false
                    })
                }
            } else {
                const index = this.videoForm.orderFilesList.findIndex(function(item) {
                    return item.uid === uid
                })
                this.videoForm.orderFilesList.splice(index, 1)
            }
        },
        submitForm(formName) {
            const _this = this
            this.$refs[formName].validate(valid => {
                if (valid) {
                    if (!_this.token) {
                        _this.$router.push({ path: _this.$i18n.path('login'), query: { redirect: _this.$i18n.path('video') } })
                    } else {
                        _this.loading = true
                        const params = { ..._this.videoForm, businessType: 'VIDEOTRANSLATION', token: _this.token }
                        delete params.read
                        postOrders(
                            params,
                            function(res) {
                                _this.RESET_VIDEOFORM()
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
<style lang="less">
.video {
    .banner-info {
        text-align: left;
        padding-left: 30px;
    }
}
</style>

<template>
    <div class="main-body">
        <div class="title">
            <i class="iconfont">&#xe601;</i>
            <span>{{$t('mine.orderInfo')}}</span>
        </div>
        <div class="order-list">
            <div class="order-type-count">
                <span
                    class="order-type"
                    :class="{active:type==='PENDING,NOTACCEPTED,OFFERING,PENDINGPAYMENT,PROCESSING,COMPLETED,EVALUATED,EXISTPAID,CUSTOMERCANCEL'}"
                    @click="changeType('PENDING,NOTACCEPTED,OFFERING,PENDINGPAYMENT,PROCESSING,COMPLETED,EVALUATED,EXISTPAID,CUSTOMERCANCEL')"
                >{{$t('mine.all')}}</span>
                <span
                    class="order-type"
                    :class="{active:type==='PENDINGPAYMENT'}"
                    @click="changeType('PENDINGPAYMENT')"
                >{{$t('mine.pendingPayment')}}</span>
                <span
                    class="order-type"
                    :class="{active:type==='EXISTPAID,PROCESSING'}"
                    @click="changeType('EXISTPAID,PROCESSING')"
                >{{$t('mine.processing')}}</span>
                <span
                    class="order-type"
                    :class="{active:type==='COMPLETED'}"
                    @click="changeType('COMPLETED')"
                >{{$t('mine.completed')}}</span>
            </div>
            <el-table
                :data="list"
                style="width: 100%"
                header-row-class-name="table-header"
                row-class-name="table-body"
            >
                <el-table-column prop="orderNumber" :label="$t('mine.orderNumber')"></el-table-column>
                <el-table-column prop="title" :label="$t('mine.title')"></el-table-column>
                <el-table-column :label="$t('mine.language')">
                    <template slot-scope="scope">
                        <div style="word-break: normal">
                            {{sourceLanguageFmt(scope.row)}}
                            <i class="iconfont">&#xe60c;</i>
                            {{targetLanguagesFmt(scope.row)}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="customizedOrderItemViewDTO.businessType"
                    :label="$t('mine.business')"
                >
                    <template slot-scope="scope">
                        <div style="word-break: normal">{{businessFmt(scope.row)}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="orderStatus"
                    :formatter="statusFmt"
                    :label="$t('mine.status')"
                ></el-table-column>
                <el-table-column
                    prop="orderTime"
                    :formatter="timeFmt"
                    :label="$t('mine.orderTime')"
                    width="135px"
                ></el-table-column>
                <el-table-column :label="$t('mine.check')" width="120px">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            size="small"
                            @click="handleClick(scope.row)"
                        >{{$t('mine.check')}}</el-button>
                        <el-button
                            v-if="scope.row.orderStatus === 'PENDING'||scope.row.orderStatus === 'PENDINGPAYMENT'||scope.row.orderStatus === 'OFFERING'"
                            type="text"
                            size="small"
                            @click="handleCancel(scope.row)"
                        >{{$t('menu.cancel')}}</el-button>
                        <el-button
                            v-if="scope.row.orderStatus === 'CUSTOMERCANCEL'||scope.row.orderStatus === 'NOTACCEPTED'"
                            type="text"
                            size="small"
                            @click="handleDel(scope.row)"
                        >{{$t('menu.del')}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
            :title="$t('mine.reasonTitle')"
            :visible.sync="dialogFormVisible"
            width="550px"
            :before-close="handleClose"
        >
            <el-form ref="form" :model="form">
                <el-form-item prop="reason" style="margin-bottom: 0">
                    <el-radio-group v-model="form.reason" style="width:100%;margin:0 15px">
                        <el-row style="margin-bottom: 15px">
                            <el-col :span="12">
                                <el-radio :label="$t('mine.reason1')"></el-radio>
                            </el-col>
                            <el-col :span="12">
                                <el-radio :label="$t('mine.reason2')"></el-radio>
                            </el-col>
                        </el-row>
                        <el-row style="margin-bottom: 15px">
                            <el-col :span="12">
                                <el-radio :label="$t('mine.reason3')"></el-radio>
                            </el-col>
                            <el-col :span="12">
                                <el-radio :label="$t('mine.reason4')"></el-radio>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12" style="margin-bottom: 10px">
                                <el-radio :label="$t('mine.reason5')"></el-radio>
                            </el-col>
                        </el-row>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="otherReason">
                    <el-row style="margin-top: 10px">
                        <el-col :span="21" :offset="2">
                            <el-input
                                v-model="form.otherReason"
                                type="textarea"
                                :disabled="form.reason!==$t('mine.reason5')"
                                :rows="4"
                                :placeholder="$t('mine.specificReason')"
                            ></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item style="margin-bottom: 0">
                    <el-row>
                        <el-col :offset="15">
                            <el-button @click="handleClose">{{$t('menu.cancel')}}</el-button>
                            <el-button
                                type="primary"
                                :disabled="form.reason===''?true:form.reason===$t('mine.reason5')&&form.otherReason===''||form.reason===$t('mine.reason5')&&form.otherReason.length>500?true:false"
                                @click="submitForm('form')"
                            >{{$t('button.confirm')}}</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { getOrders, cancelOrder, delOrder } from '../../service/orderService'
import utils from '../../utils/utils'
import config from '../../utils/config'
import moment from 'moment-timezone'
import { MessageBox, Message } from 'element-ui'

export default {
    props: {
        setIfShowList: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            type: 'PENDING,NOTACCEPTED,OFFERING,PENDINGPAYMENT,PROCESSING,COMPLETED,EVALUATED,EXISTPAID,CUSTOMERCANCEL',
            page_number: 1,
            page_size: 1000,
            sort_property: 'ORDERTIME',
            sort_direction: 'DESC',
            list: [],
            orderStatus: {},
            languages: {},
            areaOfField: {},
            applicationScene: {},
            businessType: {},
            dialogFormVisible: false,
            form: {
                reason: '',
                otherReason: ''
            },
            orderId: null
        }
    },
    created() {
        if (process.browser) {
            this.token = utils.getSession('_info').token
            // this.getOrderCounts()
            this.getOrders()
            this.formatConfig()
        }
    },
    methods: {
        formatConfig() {
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
        changeType(type) {
            this.type = type
            this.getOrders()
        },
        // getOrderCounts: function () {
        //   const _this = this
        //   getOrderCounts({
        //     token: this.token
        //   }, function (res) {
        //     let total = 0
        //     for (let i = 0; i < res.length; i++) {
        //       _this[res[i].statusName] = res[i].count
        //       total += res[i].count
        //     }
        //     _this.total = total
        //   })
        // },
        getOrders() {
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
            getOrders(params, function(res) {
                _this.list = res.datas
            })
        },
        statusFmt(row, column, cellValue) {
            return this.orderStatus[cellValue]
        },
        businessFmt(value) {
            const businessType = value.customizedOrderItemViewDTO.businessType
            return this.businessType[businessType]
        },
        sourceLanguageFmt(value) {
            const sourceLanguage = value.customizedOrderItemViewDTO.sourceLanguage
            return this.languages[sourceLanguage]
        },
        targetLanguagesFmt(value) {
            const _this = this
            let language = ''
            const _targetLanguages = value.customizedOrderItemViewDTO.targetLanguages
            const targetLanguages = _targetLanguages.split(',')
            for (let i = 0; i < targetLanguages.length; i++) {
                language += this.languages[targetLanguages[i]]
                if (i !== targetLanguages.length - 1) {
                    language += _this.$t('symbol.seperate')
                }
            }
            return language
        },
        timeFmt(row, column, cellValue) {
            return moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
        },
        handleClick(value) {
            const id = value.id
            if (id) {
                this.setIfShowList(id)
            }
        },
        handleCancel(value) {
            const id = value.id
            if (id) {
                this.orderId = id
                this.dialogFormVisible = true
            }
        },
        submitForm(formName) {
            const _this = this
            const comment = this.form.reason !== this.$t('mine.reason5') ? this.form.reason : this.form.otherReason
            const payload = {
                token: this.token,
                orderId: this.orderId,
                comment
            }
            cancelOrder(payload, function() {
                _this.handleClose()
                _this.getOrders()
                Message({
                    type: 'success',
                    message: _this.$t('mine.cancelSuccess'),
                    center: true
                })
            })
        },
        handleClose() {
            this.form = {
                reason: '',
                otherReason: ''
            }
            this.orderId = null
            this.dialogFormVisible = false
        },
        handleDel(value) {
            const id = value.id
            if (id) {
                this.orderId = id
            }
            MessageBox.confirm(this.$t('mine.delTip'), {
                confirmButtonText: this.$t('button.confirm'),
                cancelButtonText: this.$t('menu.cancel'),
                type: 'warning'
            })
                .then(() => {
                    const payload = {
                        token: this.token,
                        orderId: this.orderId
                    }
                    const _this = this
                    delOrder(payload, function(res) {
                        _this.getOrders()
                        Message({
                            type: 'success',
                            message: _this.$t('mine.delSuccess'),
                            center: true
                        })
                    })
                })
                .catch(() => {})
        }
    }
}
</script>
<style lang="less">
.order-list {
    padding: 20px 10px 40px;
    .order-type-count {
        margin: 20px;
        .order-type {
            cursor: pointer;
            padding: 30px;
            font-size: 14px;
            color: #a27c4c;
            &.active {
                color: #000000;
            }
        }
    }
    .table-header th {
        background-color: #f6f6f6;
        font-size: 12px;
    }
    .table-body {
        font-size: 12px;
    }
}
</style>

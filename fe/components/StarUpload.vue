<template>
    <div class="star-upload">
        <el-upload
            :action="api.baseUrl + api.upload_file"
            :headers="{'Authorization': 'Bearer ' + token}"
            :on-success="handleSuccess"
            :on-change="handleChange"
            :file-list="fileList"
            :before-upload="beforeUpload"
            :on-error="handleError"
            :on-remove="handleRemove"
            :multiple="true"
            :on-exceed="handleExceed"
            :limit="5"
        >
            <el-button size="small" style="display: inline-block">{{$t('menu.uploadFile')}}</el-button>
            <span
                v-if="fileType"
                class="el-form-item__error el-form-item__error--inline"
                @click="(e)=>{e.stopPropagation()}"
            >{{$t('errorCode.fileExt')}}</span>
            <span
                v-if="fileSize"
                class="el-form-item__error el-form-item__error--inline"
                @click="(e)=>{e.stopPropagation()}"
            >{{$t('errorCode.fileSize').replace('*', maxSize / 1048576)}}</span>
            <span
                v-if="fileLength"
                class="el-form-item__error el-form-item__error--inline"
                @click="(e)=>{e.stopPropagation()}"
            >{{$t('errorCode.fileLength')}}</span>
            <div slot="tip" class="el-upload__tip" v-html="tip"></div>
        </el-upload>
        <div
            style="font-size: 12px; line-height:18px;color: #C0C4CC; margin-top: 5px"
        >{{$t('errorCode.fileTip')}}</div>
    </div>
</template>
<script>
import api from '../utils/api'

export default {
    props: {
        token: {
            type: String,
            required: true
        },
        redirect: {
            type: String,
            required: true
        },
        updateFiles: {
            type: Function,
            required: true
        },
        maxSize: {
            type: Number,
            default: 10485760 // 默认是50M
        },
        tip: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            api,
            fileList: [],
            fileType: false,
            fileSize: false,
            fileLength: false
        }
    },
    methods: {
        beforeUpload(file, fileList) {
            this.fileSize = false
            this.fileType = false
            this.fileLength = false
            if (!this.token) {
                this.$router.push({ path: this.$i18n.path('login'), query: { redirect: this.redirect } })
                return false
            }
            if (/[.](exe|EXE|apk|APK|jsp|JSP|sh|SH|bat|BAT)$/g.test(file.name)) {
                this.fileType = true
                return false
            } else {
                this.fileType = false
            }
            if (file.size > this.maxSize) {
                this.fileSize = true
                return false
            } else {
                this.fileSize = false
            }
            if (this.fileList.length >= 5) {
                this.fileLength = true
                return false
            } else {
                this.fileLength = false
            }
        },
        handleExceed(files, fileList) {
            this.fileSize = false
            this.fileType = false
            this.fileLength = true
        },
        handleChange(files, fileList) {
            if (fileList.length > 5) {
                this.fileLength = true
            } else {
                this.fileLength = false
            }
        },
        handleSuccess(response, file, fileList) {
            const successfulFiles = response.successful_files
            for (const i in successfulFiles) {
                const resourceUrl = successfulFiles[i].resource_url
                successfulFiles[i].resource_url = resourceUrl.substring(resourceUrl.lastIndexOf('/group1/'), resourceUrl.length)
            }
            response.successful_files = successfulFiles
            this.updateFiles(file.uid, response, 'add')
        },
        handleError(err, file, fileList) {
            console.log(err)
            sessionStorage.clear()
            this.$router.push({ path: this.$i18n.path('login'), query: { redirect: this.redirect } })
        },
        handleRemove(file, fileList) {
            if (fileList.length > 5) {
                this.fileLength = true
            } else {
                this.fileLength = false
            }
            this.updateFiles(file.uid, null, 'delete')
        }
    }
}
</script>
<style lang="less">
.star-upload {
    display: inline-block;
    .el-button--small {
        width: 90px;
        font-size: 12px;
        line-height: 1;
        height: 30px;
        letter-spacing: normal;
        box-shadow: 0 0 0 transparent;
        padding: 9px;
        text-align: center;
    }
    .el-upload__tip p {
        font-size: 12px;
        color: #a27c4c;
        line-height: 1.5;
    }
}
</style>

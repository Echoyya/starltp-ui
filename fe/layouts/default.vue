<template>
    <div>
        <star-header />
        <nuxt/>
        <star-footer />
    </div>
</template>

<script>
import StarHeader from '~/components/StarHeader.vue'
import StarFooter from '~/components/StarFooter.vue'

export default {
  head () {
    return { title: this.$t('menu.site') }
  },
  components: {
    StarHeader,
    StarFooter
  }
}
</script>

<style lang="less">
html {
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
input, textarea, select, button {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
body {
  background-color: #f6f6f6;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.clear {
  zoom: 1;
}

.clear:after {
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  color: #a27c4c;
  text-decoration: none;
}

.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}
.el-input__inner,.el-textarea__inner{
  border-radius: 2px;
  font-size: 12px;
}
.video,.thematic,.dubbing,.instant,.interpretation,.order-success{
  .form{
    width: 1092px;
    background-color: #ffffff;
    margin: 0 auto 20px;;
    padding-bottom: 50px;
    .form-body {
      width: 1092px;
      .el-input,.el-textarea {
        width: auto;
        .el-input__inner{
          width: 425px;
        }
        .el-textarea__inner {
          width: 600px;
        }
      }
      .el-date-editor {
        &.el-input{
          width: 195px;
        }
        width: auto;
        .el-input__inner {
          width: 195px;
        }
      }
      .star-upload {
        width: 500px;
      }
      .el-select {
        .el-input__inner{
          width: 193px;
        }
        .el-select__caret {
          font-size: 12px;
        }
      }
      .el-date-editor{
        width: 425px;
        .el-range-input{
          width: 41%;
        }
      }
      .el-form-item {
        margin-bottom: 12px;
      }
      .icon-jiantou {
        margin: 0 10px;
        font-size: 18px;
      }
      .el-form-item__content{
        text-align: left;
      }
      .el-checkbox-group{
        font-size: 12px;
      }
    }
  }
  .el-button--default{
    display: block;
    cursor: pointer;
    width: 250px;
    height: 40px;
    font-size: 14px;
    background-color: #3c4860;
    border-color: #3c4860;
    border: 0;
    color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 10px 20px #cccccc;
    &:hover,&:focus{
      background-color: #3c4860;
      border-color: #3c4860;
      color: #ffffff;
    }
  }
  .el-form-item__label{
    font-size: 13px;
  }
  .el-form-item__label:before{
    display: inline-block;
    font-size: 12px;
    line-height: 40px;
  }
}

.el-time-spinner.has-seconds .el-time-spinner__wrapper:nth-child(2){
  margin: 0;
}
.el-select-dropdown__item {
  font-size: 12px;
}
.el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus {
    border-color: #dcdfe6;
}
.el-dropdown-menu{
  padding: 0;
  font-size: 12px;
  .el-dropdown-menu__item {
    line-height: 30px;
    font-size: 12px;
    color: #a27c4c;
    a {
      font-size: 12px;
      color: #a27c4c;
      text-decoration: none;
    }
  }
}
.form-desc{
  margin-left: 150px;
  margin-bottom: 20px;
  text-align: left;
  color: #a27c4c;
  font-size: 12px;
}
.agreement {
  margin-top: -10px;
  margin-bottom: 10px;
  .agreement-title{
    margin-left: 10px;
    font-size: 12px;
    a {
      color: #a27c4c;
      font-size: 12px;
    }
  }
}
.el-icon-upload-success,.el-form-item.is-success .el-input__validateIcon{
  color: #3c4860 !important;
}
.mine-content{
  width: 1092px;
  margin: 20px auto;
  .main-body{
    display: inline-block;
    background-color: #ffffff;
    border-radius: 2px;
    width: 862px;
    padding: 30px;
    text-align: left;
    min-height: 466px;
    float: right;
    .title{
      color: #484f58;
      line-height: 50px;
      .iconfont{
        font-size: 20px;
      }
      span {
        padding-left: 10px;
        font-size: 16px;
        font-weight: bold;
      }
      border-bottom: 1px solid #d8dadf;
    }
  }
}
.footer {
  .address{
    a {
      color: #000;
    }
  }
}

#__nuxt .ok-btn{
  display: block;
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-size: 14px;
  background-color: #3c4860;
  border: 0;
  color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 10px 20px #cccccc;
  &:hover,&:focus{
    background-color: #3c4860;
    border-color: #3c4860;
    color: #ffffff;
  }
}
</style>

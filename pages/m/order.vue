<template>
<div class="container m-order">
  <img src="~assets/m_order_bg.jpg" />
  <div class="body">
    <div class="index-title">我要翻译</div>
    <p class="text-indent">我们擅长的业务范围主要包括：影视译制、专题翻译、口译、及配音服务。欢迎客户发送需求、咨询，或者通过PC端在线提交订单。专属的翻译顾问和项目经理，将及时与您沟通。</p>
    <p>需求专线：<a href="tel:01053012890">01053012890</a></p>
    <p>需求邮箱：<a href="mailto:nts@startimes.com.cn">nts@startimes.com.cn</a></p>
    <div class="img">
      <div>
        <img class="order-img1 clearfix" src="~assets/m_order_1.jpg" />
      </div>
      <div>
        <img class="order-img1 clearfix" src="~assets/m_order_2.jpg" />
      </div>
    </div>
    <img src="~assets/m_order_3.jpg" />
  </div>
</div>
</template>

<script>
export default {
  layout: 'mobile'
}
</script>

<style lang="less">
.m-order{
  background-color: #ffffff;
  height: 100%;
  padding-bottom: 30px;
  .body {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    p {
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 15px;
      span {
        color: #a27c4c;
      }
    }
    .text-indent {
      text-indent: 10px;
    }
    .order-img1 {
      display: inline-flex;
      width: 49%;
      float: left;
      margin-top: 10px;
      margin-bottom: 7px;
    }
    .order-img2 {
      display: inline-flex;
      width: 49%;
      float: right;
      margin-top: 10px;
      margin-bottom: 7px;
    }
  }
}
</style>

<template>
  <div class="container business-content">
    <div class="vip-banner">
      <img src="~static/vip-banner.jpg" />
      <div class="banner-title">{{$t('business.title')}}</div>
    </div>
    <div class="vip-tel">
      <img src="~static/vip.jpg" />
      <div class="tel-info">
        <div class="tel-title">{{$t('business.telTitle')}}</div>
        <div class="tel-detail">{{$t('business.telDesc')}}</div>
      </div>
    </div>
    <div class="vip-service">
      <div class="index-title">
        {{$t('business.exclusiveService')}}
      </div>
      <div class="service-list">
        <div class="service-item">
          <div class="service-logo">
            <img src="~static/vip/1.png" />
          </div>
          <p>
            {{$t('business.exclusiveConsultant')}}
          </p>
        </div>
        <div class="service-item">
          <div class="service-logo" style="padding-top:34px;">
            <img src="~static/vip/2.png" />
          </div>
          <p>
            {{$t('business.exclusiveVIP')}}
          </p>
        </div>
        <div class="service-item">
          <div class="service-logo" style="padding-top:45px;">
            <img src="~static/vip/3.png" />
          </div>
          <p>
            {{$t('business.authority')}}
          </p>
        </div>
      </div>
    </div>
    <div class="vip-user">
      <div class="index-title">
        {{$t('business.brandUser')}}
      </div>
      <div class="vip-list">
        <div class="vip-item">
          <div class="vip-logo">
            <img src="~static/vip/1.jpg" />
          </div>
          <p>
            {{$t('business.RTB')}}
          </p>
          <p>
            <span class="red">"</span>{{$t('business.profession')}}<span class="red">"</span>
          </p>
        </div>
        <div class="vip-item">
          <div class="vip-logo">
              <img src="~static/vip/2.jpg" />
          </div>
          <p>
            {{$t('business.bundesliga')}}
          </p>
          <p>
            <span class="red">"</span>{{$t('business.bundesligaDesc')}}<span class="red">"</span>
          </p>
        </div>
        <div class="vip-item">
          <div class="vip-logo">
              <img src="~static/vip/3.jpg" />
          </div>
          <p>
            {{$t('business.CCTV')}}
          </p>
          <p>
            <span class="red">"</span>{{$t('business.rigorous')}}<span class="red">"</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.business-content{
  background-color: #ffffff;
  padding-bottom: 100px;
  .vip-banner{
    position: relative;
    width: 100%;
    img{
      width: 100%;
    }
    .banner-title {
      position: absolute;
      width: 100%;
      top:61%;
      color: #b68e5a;
      left: 0;
      font-size: 28px;
      letter-spacing: 2px;
      text-align: center;
    }
  }
  .index-title{
    padding: 20px 0;
    font-size: 24px;
    color: #373d41;
    &:after{
      display: block;
      margin: 15px auto 10px;
      content: '';
      width: 65px;
      height: 1px;
      background-color: #0c1c2b;
    }
  }
  .vip-tel{
    position: relative;
    margin: 30px auto 0;
    img {
      width: 1092px;
    }
    .tel-info {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -40px;
      margin-left: -550px;
      .tel-title {
        color: #000000;
        font-size: 24px;
        width: 567px;
        text-align:center;
        margin-bottom: 20px;
      }
      .tel-detail {
        color: #0c1c2c;
        font-size: 18px;
        width: 567px;
        text-align:center;
      }
    }
  }
  .vip-service,.vip-user{
    width: 1092px;
    margin: 30px auto 0;
    background-color: #f6f6f6;
  }
  .service-list{
    display: inline-flex;
  }
  .service-item{
    display: inline-block;
    margin: 0 50px 50px;
    width: 170px;
    .service-logo{
      width: 150px;
      height: 150px;
      background-color: #ffffff;
      border-radius: 50%;
      padding: 30px 0;
      text-align: center;
      vertical-align: middle;
      img {
        width: 70px;
      }
      margin: 20px auto 20px;
    }
    p {
      line-height: 1.8;
      color: #696868CC;
      font-size: 12px;
    }
  }
  .vip-item{
    display: inline-block;
    margin: 10px 20px 50px;
    width: 280px;
    height: 320px;
    vertical-align: top;
    background-color: #ffffff;
    padding: 50px 20px;
    .vip-logo{
      width: 100px;
      img {
        width: 100%;
      }
      margin: 0 auto 20px;
    }
    p {
      line-height: 1.8;
      color: #696868CC;
      font-size: 12px;
      &:nth-child(2){
        height: 70px;
        text-align: center;
      }
      &:nth-child(3){
        text-align: justify;
      }
      .red {
        margin: 0 5px;
      }
    }
  }
}
</style>

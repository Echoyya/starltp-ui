<template>
  <div class="container page-default">
    <div class="content">
      <div class="title">
        {{$t('aboutUs.companyProfile')}}
      </div>
      <p>{{$t('aboutUs.profile1')}}
      </p>
      <p>
        {{$t('aboutUs.profile2')}}
      </p>
      <p>
        {{$t('aboutUs.profile3')}}
      </p>
      <div class="img-list">
        <div class="img-item">
          <img src="~static/about1.jpg" />
          <p>{{$t('aboutUs.profile4')}}</p>
        </div>
        <div class="img-item">
          <img src="~static/about2.jpg" />
          <p>{{$t('aboutUs.profile5')}}</p>
        </div>
        <div class="img-item">
          <img src="~static/about3.jpg" />
          <p>{{$t('aboutUs.profile6')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'static'
}
</script>
<style lang="less">
.container.page-default {
  .content {
    width: 1092px;
    margin: 20px auto;
    background-color: #ffffff;
    padding: 10px 50px;
    text-align: left;
    .title{
      color: #a27c4c;
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 20px;
      text-align: center;
    }
    p {
      color: #757575;
      font-size: 14px;
      line-height: 2.0;
      text-indent: 28px;
      margin-bottom: 15px;
    }
    .img-list{
      display: flex;
      margin-top: 20px;
      .img-item{
        width: 32%;
        &:not(:last-child){
          margin-right: 2%;
        }
        img{
          width: 100%;
        }
        p {
          padding-top: 15px;
          text-indent: 0;
          width: 100%;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}
</style>

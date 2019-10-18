<template>
  <div class="container certification">
    <div class="content">
      <div class="title">
        {{$t('menu.certification')}}
      </div>
      <div class="img-list">
        <div class="img-item">
          <img src="~static/certification/1.png" />
        </div>
        <div class="img-item">
          <img src="~static/certification/2.png" />
        </div>
      </div>
      <div class="img-list">
        <div class="img-item">
          <img src="~static/certification/3.png" />
        </div>
        <div class="img-item">
          <img src="~static/certification/4.png" />
        </div>
      </div>
      <div class="img-list">
        <div class="img-item">
          <img src="~static/certification/5.png" />
        </div>
        <div class="img-item">
          <img src="~static/certification/6.png" />
        </div>
      </div>
      <div class="img-list">
        <div class="img-item">
          <img src="~static/certification/7.png" />
        </div>
        <div class="img-item">
          <img src="~static/certification/8.png" />
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
.container.certification {
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
    .img-list{
      display: flex;
      margin-top: 20px;
      .img-item{
        width: 49%;
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

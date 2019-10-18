<template>
    <div class="cooperation">
        <div class="index-title">
            {{$t('index.cooperation.title')}}
        </div>
        <div class="cooperation-list">
            <div class="cooperation-item"><img src="~static/partner/media1.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media2.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media3.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media4.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media5.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media6.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media7.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media17.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media18.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/sport5-1.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media20.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media10.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media11.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media12.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media13.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/government2.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media15.jpg" /></div>
            <div class="cooperation-item"><img src="~static/partner/media16.jpg" /></div>
        </div>
    </div>
</template>
<style lang="less">
.cooperation {
  background-color: #ffffff;
  width: 100%;
  padding: 20px 0;
  .index-title {
    padding: 30px 0;
  }
  .cooperation-list{
    width: 1092px;
    margin: 0 auto;
    padding: 0 0 50px;
    .cooperation-item{
      display: inline-block;
      width: 16.6%;
      position: relative;
      img {
        filter: grayscale(1);
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
}
</style>

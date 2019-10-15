<template>
<div class="container page-default">
  <div class="content">
    <div class="container-fluid container-fluid-content">
      <div class="row-fluid">
        <div class="span12 docArea">
          <div class="word-page" STYLE="width:992px;height:1403px" >
            <div class="word-content">
              <img src="/agreement/1.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px" >
            <div class="word-content">
              <img src="/agreement/2.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px" >
            <div class="word-content">
              <img src="/agreement/3.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px" >
            <div class="word-content">
              <img src="/agreement/4.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px" >
            <div class="word-content">
              <img src="/agreement/5.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px">
            <div class="word-content">
              <img src="/agreement/6.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px">
            <div class="word-content">
              <img src="/agreement/7.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
          <div class="word-page" STYLE="width:992px;height:1403px">
            <div class="word-content">
              <img src="/agreement/8.jpg" width="100%" height="100%" /></embed>
            </div>
          </div>
        </div>
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
        margin: 40px auto;
        padding: 10px 50px;
        text-align: left;
        .title {
            color: #a27c4c;
            font-size: 18px;
            font-weight: bold;
            padding-bottom: 20px;
            text-align: center;
        }
        .row-fluid:after,
        .row-fluid:before {
            display: table;
            line-height: 0;
            content: "";
        }
        .word-page {
            line-height: normal;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 15px;
            background-color: #FFF;
            -moz-border-radius: 1px;
            border-radius: 1px;
            -moz-box-shadow: 0 0 10px 5px #888;
            -webkit-box-shadow: 0 0 10px 5px #888;
            box-shadow: 0 0 10px 5px #888;
            .word-content {
                position: relative;
                background-color: #FFF;
                max-width: 100%;
                word-wrap: break-word;
                word-break: break-all;
                margin: 0 auto;
            }
        }
        p {
            color: #757575;
            font-size: 14px;
            line-height: 2.0;
            text-indent: 28px;
            margin-bottom: 15px;
        }
    }
}
</style>

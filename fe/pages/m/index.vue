<template>
    <div class="container m-index">
        <img src="~assets/m_index_bg.jpg" />
        <div class="bussiness">
            <div class="index-title">我们的业务</div>
            <div class="body">
                <div class="item">
                    <i class="iconfont">&#xe64c;</i>
                    <div class="content">
                        <h3>影视译制</h3>
                        <p>{{$t('index.business.video')}}</p>
                    </div>
                </div>
                <div class="item">
                    <i class="iconfont">&#xe6f9;</i>
                    <div class="content">
                        <h3>专题翻译</h3>
                        <p>{{$t('index.business.thematic')}}</p>
                    </div>
                </div>
                <div class="item">
                    <i class="iconfont">&#xe631;</i>
                    <div class="content">
                        <h3>口译服务</h3>
                        <p>{{$t('index.business.interpretation')}}</p>
                    </div>
                </div>
                <div class="item">
                    <i class="iconfont">&#xe60d;</i>
                    <div class="content">
                        <h3>配音服务</h3>
                        <p>{{$t('index.business.dubbing')}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="procedure">
            <div class="index-title">
                我们的流程
            </div>
            <img src="~/static/step1-5.png" class="step" />
        </div>
        <div class="advantage">
            <div class="index-title">
                我们的优势
            </div>
            <div class="body">
                <div class="item">
                    <i class="iconfont">&#xe61a;</i>
                    <div class="content">
                        <h3>{{$t('index.advantage.item1')}}</h3>
                        <p>{{$t('index.advantage.item11')}}</p>
                        <p>{{$t('index.advantage.item12')}}</p>
                        <p>{{$t('index.advantage.item13')}}</p>
                        <p>{{$t('index.advantage.item14')}}</p>
                    </div>
                </div>
                <div class="item">
                    <i class="iconfont">&#xe648;</i>
                    <div class="content">
                        <h3>{{$t('index.advantage.item2')}}</h3>
                        <p>{{$t('index.advantage.item21')}}</p>
                        <p>{{$t('index.advantage.item22')}}</p>
                        <p>{{$t('index.advantage.item23')}}</p>
                        <p>{{$t('index.advantage.item24')}}</p>
                    </div>
                </div>
                <div class="item">
                    <i class="iconfont">&#xe796;</i>
                    <div class="content">
                        <h3>{{$t('index.advantage.item3')}}</h3>
                        <p>{{$t('index.advantage.item31')}}</p>
                        <p>{{$t('index.advantage.item32')}}</p>
                        <p>{{$t('index.advantage.item33')}}</p>
                        <p>{{$t('index.advantage.item34')}}</p>
                    </div>
                </div>
                <div class="item">
                    <i class="iconfont">&#xe6bb;</i>
                    <div class="content">
                        <h3>{{$t('index.advantage.item4')}}</h3>
                        <p>{{$t('index.advantage.item41')}}</p>
                        <p>{{$t('index.advantage.item42')}}</p>
                        <p>{{$t('index.advantage.item43')}}</p>
                        <p>{{$t('index.advantage.item44')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'mobile'
}
</script>

<style lang="less">
.m-index{
  background-color: #ffffff;
  .bussiness,.advantage {
    .body {
      width: 100%;
      text-align: center;
      .item {
        display: inline-block;
        width: 50%;
        padding: 10px;
        .iconfont{
          font-size: 40px;
          color: #a27c4c;
        }
        .content {
          h3 {
            margin: 12px auto;
            font-size: 16px;
          }
          p {
            font-size: 12px;
            text-align:justify;
            color: rgba(0, 0, 0, 0.8);
            line-height: 1.6;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  .bussiness {
    .body {
      .item {
        &:nth-child(1),&:nth-child(3){
          padding: 10px 12px 10px 20px;
        }
        &:nth-child(2),&:nth-child(4){
          padding: 10px 20px 10px 12px;
        }
      }
    }
  }
  .procedure {
    width: 100%;
    background: url("~static/procedure.jpg") no-repeat 100% 100%;
    .step {
        width: 95%;
        margin: 0 auto;
        padding-bottom: 30px;
    }
  }
  .advantage {
    .body {
      .item {
        padding: 10px 0;
        .content {
          h3 {
            font-size: 15px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

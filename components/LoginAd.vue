<template>
    <div class="info-body">
        <div class="title">{{$t('register.trusted')}}</div>
        <div class="item">
            <p>
                <i class="iconfont">&#xe615;</i>{{$t('register.translationTeam')}}
            </p>
            <p>
                <i class="iconfont">&#xe615;</i>{{$t('register.diversification')}}
            </p>
            <p>
                <i class="iconfont">&#xe615;</i>{{$t('register.transparent')}}
            </p>
        </div>
        <div class="item">
            <p>
                <i class="iconfont">&#xe615;</i>{{$t('register.certified')}}
            </p>
            <p>
                <i class="iconfont">&#xe615;</i>{{$t('register.highestStandard')}}
            </p>
            <p>
                <i class="iconfont">&#xe615;</i>{{$t('register.fullRange')}}
            </p>
        </div>
    </div>
</template>

<style lang="less">
  .info-body{
    display: inline-block;
    color: #ffffff;
    text-align: left;
    margin-top: 35%;
    .title{
      display: inline-block;
      width: 100%;
      font-size: 24px;
      margin-bottom: 40px;
      text-align: center;
      margin-left: -40px;
    }
    .item {
      width: 50%;
      display: inline-block;
      p{
        line-height: 2.5;
        .iconfont {
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
  }
</style>

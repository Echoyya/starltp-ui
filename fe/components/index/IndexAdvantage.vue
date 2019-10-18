<template>
    <div class="advantage">
        <div class="index-title">
            {{$t('index.advantage.title')}}
        </div>
        <div class="advantage-list">
            <div class="advantage-item">
                <div class="icon"><i class="iconfont">&#xe61a;</i></div>
                <h3>{{$t('index.advantage.item1')}}</h3>
                <p>{{$t('index.advantage.item11')}}</p>
                <p>{{$t('index.advantage.item12')}}</p>
                <p>{{$t('index.advantage.item13')}}</p>
                <p>{{$t('index.advantage.item14')}}</p>
            </div>
            <div class="advantage-item">
                <div class="icon"><i class="iconfont">&#xe648;</i></div>
                <h3>{{$t('index.advantage.item2')}}</h3>
                <p>{{$t('index.advantage.item21')}}</p>
                <p>{{$t('index.advantage.item22')}}</p>
                <p>{{$t('index.advantage.item23')}}</p>
                <p>{{$t('index.advantage.item24')}}</p>
            </div>
            <div class="advantage-item">
                <div class="icon"><i class="iconfont">&#xe796;</i></div>
                <h3>{{$t('index.advantage.item3')}}</h3>
                <p>{{$t('index.advantage.item31')}}</p>
                <p>{{$t('index.advantage.item32')}}</p>
                <p>{{$t('index.advantage.item33')}}</p>
                <p>{{$t('index.advantage.item34')}}</p>
            </div>
            <div class="advantage-item">
                <div class="icon"><i class="iconfont">&#xe6bb;</i></div>
                <h3>{{$t('index.advantage.item4')}}</h3>
                <p>{{$t('index.advantage.item41')}}</p>
                <p>{{$t('index.advantage.item42')}}</p>
                <p>{{$t('index.advantage.item43')}}</p>
                <p>{{$t('index.advantage.item44')}}</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.advantage {
    .advantage-list {
        width: 1092px;
        margin: 0 auto;
        display: inline-flex;
        .advantage-item {
            display: inline-block;
            width: 25%;
            text-align: center;
            margin-bottom: 50px;
            .iconfont{
              font-size: 70px;
            }
            h3 {
                color: #a27c4c;
                font-size: 16px;
                font-weight: normal;
                margin: 30px auto 10px;
            }
            p {
                color: #868686;
                font-size: 12px;
                line-height: 1.8;
            }
        }
    }
}
</style>

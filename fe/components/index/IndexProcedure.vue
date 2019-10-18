<template>
    <div class="procedure">
        <div class="index-title">{{$t('index.procedure.title')}}</div>
        <div class="step">
            <img src="~/static/step1.png" class="step-img" />
            <img src="~/static/step-connect.png" class="step-connect" />
            <img src="~/static/step2.png" class="step-img" />
            <img src="~/static/step-connect.png" class="step-connect" />
            <img src="~/static/step3.png" class="step-img" />
            <img src="~/static/step-connect.png" class="step-connect" />
            <img src="~/static/step4.png" class="step-img" />
            <img src="~/static/step-connect.png" class="step-connect" />
            <img src="~/static/step5.png" class="step-img" />
            <div class="step-title" :class="{cnStyle:$i18n.locale==='cn'}">
                <div class="step-item">
                    <p>{{$t('index.procedure.step11')}}</p>
                    <p>{{$t('index.procedure.step12')}}</p>
                </div>
                <div class="step-item">
                    <p>{{$t('index.procedure.step21')}}</p>
                    <p>{{$t('index.procedure.step22')}}</p>
                </div>
                <div class="step-item">
                    <p>{{$t('index.procedure.step31')}}</p>
                    <p>{{$t('index.procedure.step32')}}</p>
                </div>
                <div class="step-item">
                    <p>{{$t('index.procedure.step41')}}</p>
                    <p>{{$t('index.procedure.step42')}}</p>
                </div>
                <div class="step-item">
                    <p>{{$t('index.procedure.step51')}}</p>
                    <p>{{$t('index.procedure.step52')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.procedure {
    width: 100%;
    background: url('~static/procedure.jpg') no-repeat 100% 100%;
    .step {
        position: relative;
        width: 860px;
        display: inline-flex;
        margin-bottom: 100px;
        .step-img {
            display: block;
            width: 130px;
            height: 177px;
        }
        .step-connect {
            display: block;
            width: 52.5px;
            height: 19px;
            margin-top: 54px;
        }
        .step-title {
            position: absolute;
            top: 37px;
            left: 25px;
            line-height: 20px;
            display: inline-flex;
            color: #545454;
            font-weight: bold;
            .step-item {
                width: 80px;
                font-size: 12px;
                &:not(:last-child) {
                    margin-right: 102.5px;
                }
            }
            &.cnStyle {
                .step-item {
                    font-size: 14px;
                }
                top: 45px;
                left: 0;
                .step-item {
                    width: 130px;
                    &:not(:last-child) {
                        margin-right: 52.5px;
                    }
                }
            }
        }
    }
}
</style>

<template>
  <div class="container page-default">
    <div class="job-content">
      <div class="title">
        {{$t('menu.join')}}
      </div>
      <dl class="job">
        <dt>{{$t('join.post1.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post1.responsibility1')}}</dd>
        <dd>{{$t('join.post1.responsibility2')}}</dd>
        <dd>{{$t('join.post1.responsibility3')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post1.qualifications1')}}</dd>
        <dd>{{$t('join.post1.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post1.experience1')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post1.request1')}}</dd>
        <dd>{{$t('join.post1.request2')}}</dd>
        <dd>{{$t('join.post1.request3')}}</dd>
        <dd>{{$t('join.post1.request4')}}</dd>
        <dd>{{$t('join.post1.request5')}}</dd>
        <dd><span>{{$t('join.certificate')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post1.certificate1')}}</dd>
        <dd><span>{{$t('join.benefits')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post1.benefits1')}}</dd>
        <dd>{{$t('join.post1.benefits2')}}</dd>
        <dd>{{$t('join.post1.benefits3')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post2.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post2.responsibility1')}}</dd>
        <dd>{{$t('join.post2.responsibility2')}}</dd>
        <dd>{{$t('join.post2.responsibility3')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post2.qualifications1')}}</dd>
        <dd>{{$t('join.post2.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post2.experience1')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post2.request1')}}</dd>
        <dd>{{$t('join.post2.request2')}}</dd>
        <dd>{{$t('join.post2.request3')}}</dd>
        <dd>{{$t('join.post2.request4')}}</dd>
        <dd><span>{{$t('join.benefits')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post2.benefits1')}}</dd>
        <dd>{{$t('join.post2.benefits2')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post3.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post3.responsibility1')}}</dd>
        <dd>{{$t('join.post3.responsibility2')}}</dd>
        <dd>{{$t('join.post3.responsibility3')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post3.qualifications1')}}</dd>
        <dd>{{$t('join.post3.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post3.experience1')}}</dd>
        <dd>{{$t('join.post3.experience2')}}</dd>
        <dd>{{$t('join.post3.experience3')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post3.request1')}}</dd>
        <dd>{{$t('join.post3.request2')}}</dd>
        <dd>{{$t('join.post3.request3')}}</dd>
        <dd>{{$t('join.post3.request4')}}</dd>
        <dd>{{$t('join.post3.request5')}}</dd>
        <dd>{{$t('join.post3.request6')}}</dd>
        <dd><span>{{$t('join.certificate')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post3.certificate1')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post4.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post4.responsibility1')}}</dd>
        <dd>{{$t('join.post4.responsibility2')}}</dd>
        <dd>{{$t('join.post4.responsibility3')}}</dd>
        <dd>{{$t('join.post4.responsibility5')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post4.qualifications1')}}</dd>
        <dd>{{$t('join.post4.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post4.experience1')}}</dd>
        <dd>{{$t('join.post4.experience2')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post4.request1')}}</dd>
        <dd>{{$t('join.post4.request2')}}</dd>
        <dd>{{$t('join.post4.request3')}}</dd>
        <dd>{{$t('join.post4.request4')}}</dd>
        <dd>{{$t('join.post4.request5')}}</dd>
        <dd>{{$t('join.post4.request6')}}</dd>
        <dd>{{$t('join.post4.request7')}}</dd>
        <dd><span>{{$t('join.benefits')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post4.benefits1')}}</dd>
        <dd>{{$t('join.post4.benefits2')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post5.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post5.responsibility1')}}</dd>
        <dd>{{$t('join.post5.responsibility2')}}</dd>
        <dd>{{$t('join.post5.responsibility3')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post5.qualifications1')}}</dd>
        <dd>{{$t('join.post5.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post5.experience1')}}</dd>
        <dd>{{$t('join.post5.experience2')}}</dd>
        <dd>{{$t('join.post5.experience3')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post5.request1')}}</dd>
        <dd>{{$t('join.post5.request2')}}</dd>
        <dd>{{$t('join.post5.request3')}}</dd>
        <dd>{{$t('join.post5.request4')}}</dd>
        <dd>{{$t('join.post5.request5')}}</dd>
        <dd>{{$t('join.post5.request6')}}</dd>
        <dd><span>{{$t('join.certificate')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post5.certificate1')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post6.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post6.responsibility1')}}</dd>
        <dd>{{$t('join.post6.responsibility2')}}</dd>
        <dd>{{$t('join.post6.responsibility3')}}</dd>
        <dd>{{$t('join.post6.responsibility4')}}</dd>
        <dd>{{$t('join.post6.responsibility5')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post6.qualifications1')}}</dd>
        <dd>{{$t('join.post6.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post6.experience1')}}</dd>
        <dd>{{$t('join.post6.experience2')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post6.request1')}}</dd>
        <dd>{{$t('join.post6.request2')}}</dd>
        <dd>{{$t('join.post6.request3')}}</dd>
        <dd>{{$t('join.post6.request4')}}</dd>
        <dd>{{$t('join.post6.request5')}}</dd>
        <dd>{{$t('join.post6.request6')}}</dd>
        <dd>{{$t('join.post6.request7')}}</dd>
        <dd><span>{{$t('join.benefits')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post6.benefits1')}}</dd>
        <dd>{{$t('join.post6.benefits2')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post7.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post7.responsibility1')}}</dd>
        <dd>{{$t('join.post7.responsibility2')}}</dd>
        <dd>{{$t('join.post7.responsibility3')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post7.qualifications1')}}</dd>
        <dd>{{$t('join.post7.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post7.experience1')}}</dd>
        <dd>{{$t('join.post7.experience2')}}</dd>
        <dd>{{$t('join.post7.experience3')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post7.request1')}}</dd>
        <dd>{{$t('join.post7.request2')}}</dd>
        <dd>{{$t('join.post7.request3')}}</dd>
        <dd>{{$t('join.post7.request4')}}</dd>
        <dd>{{$t('join.post7.request5')}}</dd>
        <dd>{{$t('join.post7.request6')}}</dd>
      </dl>
      <dl class="job">
        <dt>{{$t('join.post8.title')}}</dt>
        <dd><span>{{$t('join.responsibility')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post8.responsibility1')}}</dd>
        <dd>{{$t('join.post8.responsibility2')}}</dd>
        <dd>{{$t('join.post8.responsibility3')}}</dd>
        <dd>{{$t('join.post8.responsibility4')}}</dd>
        <dd>{{$t('join.post8.responsibility5')}}</dd>
        <dd><span>{{$t('join.qualifications')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post8.qualifications1')}}</dd>
        <dd>{{$t('join.post8.qualifications2')}}</dd>
        <dd><span>{{$t('join.experience')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post8.experience1')}}</dd>
        <dd>{{$t('join.post8.experience2')}}</dd>
        <dd><span>{{$t('join.request')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post8.request1')}}</dd>
        <dd>{{$t('join.post8.request2')}}</dd>
        <dd>{{$t('join.post8.request3')}}</dd>
        <dd>{{$t('join.post8.request4')}}</dd>
        <dd>{{$t('join.post8.request5')}}</dd>
        <dd>{{$t('join.post8.request6')}}</dd>
        <dd>{{$t('join.post8.request7')}}</dd>
        <dd><span>{{$t('join.benefits')}}{{$i18n.locale=='cn'?'：':':'}}</span></dd>
        <dd>{{$t('join.post8.benefits1')}}</dd>
        <dd>{{$t('join.post8.benefits2')}}</dd>
      </dl>
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
  .job-content {
      width: 1092px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 40px 50px;
      .title{
        font-size: 20px;
        font-weight: bold;
        color: #a27c4c;
        padding: 0 0 30px;
        border-bottom: 1px solid #eae8e8;
      }
    .job {
        text-align: left;
        dt {
            font-size: 16px;
            color: #a27c4c;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        dd {
            color: #666;
            font-size: 12px;
            line-height: 1.8;
            span {
                font-weight: bold;
            }
        }
    }
  }
}
</style>

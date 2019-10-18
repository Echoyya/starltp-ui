<template>
  <div class="container page-default">
    <div class="page-nav">
      {{$t('footer.about')}} > {{$t('aboutUs.cases')}}
    </div>
    <div class="page-title">
      <span class="title-icon"></span>{{$t('aboutUs.cases')}}
    </div>
    <div class="case-content">
      <div class="case-type">
        <span :class="{active:type===1}" @click="SET_TYPE(1)">{{$t('menu.video')}}</span>
        <span :class="{active:type===2}" @click="SET_TYPE(2)">{{$t('menu.thematic')}}</span>
        <span :class="{active:type===4}" @click="SET_TYPE(4)">{{$t('menu.interpretation')}}</span>
        <span :class="{active:type===3}" @click="SET_TYPE(3)">{{$t('menu.dubbing')}}</span>
      </div>
      <preview-case></preview-case>
    </div>
  </div>
</template>
<script>
import PreviewCase from '~/components/case/PreviewCase'
import { mapState, mapMutations } from 'vuex'

export default {
  layout: 'staticPreview',
  components: {
    PreviewCase
  },
  computed: {
    ...mapState([
      'type'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_TYPE'
    ])
  }
}
</script>
<style lang="less">
.container.page-default {
  .case-content{
    .case-type{
      color: #a27c4c;
      padding-bottom: 20px;
      text-align: left;
      margin: 20px 0;
      span {
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
      }
      .active {
        color: #000000;
      }
    }
    .case-list{
      margin: 20px 0 100px;
      .case-group {
        display: flex;
        margin-bottom: 30px;
        .case-item{
          width: 260px;
          height: 370px;
          &:not(:last-child){
            margin-right: 2%;
          }
          img {
            width: 260px;
            height: 350px;
          }
          p {
            padding-top: 15px;
            font-size: 12px;
            color: #000000;
          }
        }
      }
    }
  }
}
</style>

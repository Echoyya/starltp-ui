<template>
  <div class="container page-default">
    <div class="page-title">
      <span class="title-icon"></span>{{$t('menu.fee')}}
    </div>
    <div class="fees-content">
      <div class="fees-title" id="video-table">{{$t('fees.title1')}}</div>
      <video-table></video-table>
    </div>
    <div class="fees-content">
      <div class="fees-title" id="thematic-table">{{$t('fees.title2')}}</div>
      <thematic-table></thematic-table>
    </div>
    <div class="fees-content">
      <div class="fees-title" id="listen-translation-table">{{$t('fees.title3')}}</div>
      <listen-translation-table></listen-translation-table>
    </div>
    <div class="fees-content">
      <div class="fees-title" id="simultaneous-interpretation-table">{{$t('fees.title4')}}</div>
      <simultaneous-interpretation-table></simultaneous-interpretation-table>
    </div>
    <!-- <div class="fees-content">
      <div class="fees-title" id="transmission-equipment-rental-table">同传设备租赁价格表</div>
      <transmission-equipment-rental-table></transmission-equipment-rental-table>
    </div> -->
    <div class="fees-content">
      <div class="fees-title" id="dubbing-table">{{$t('fees.title5')}}</div>
      <dubbing-table></dubbing-table>
    </div>
  </div>
</template>
<script>
import VideoTable from '~/components/fees/VideoTable'
import ThematicTable from '~/components/fees/ThematicTable'
import ListenTranslationTable from '~/components/fees/ListenTranslationTable'
import SimultaneousInterpretationTable from '~/components/fees/SimultaneousInterpretationTable'
import TransmissionEquipmentRentalTable from '~/components/fees/TransmissionEquipmentRentalTable'
import DubbingTable from '~/components/fees/DubbingTable'

export default {
  layout: 'static',
  components: {
    VideoTable,
    ThematicTable,
    ListenTranslationTable,
    SimultaneousInterpretationTable,
    TransmissionEquipmentRentalTable,
    DubbingTable
  }
}
</script>
<style lang="less">
.container.page-default {
  .fees-content{
    margin: 50px 100px;
    .fees-title{
      font-size: 20px;
      color: #353535;
      font-weight: bold;
    }
    .fees-table{
      width: 100%;
      text-align: center;
      margin-top: 30px;
      border-radius: 8px;
      border: 1px solid #d2d2d2;
      overflow: hidden;
      .star-table {
        width: 100%;
        th,td {
          padding: 10px;
          &:nth-last-of-type(1) {
            border-right: none;
          }
        }
      }
      .fees-header{
        background-color: #af906b;
        color: rgba(255, 255, 255, 0.9);
        font-size: 15px;
        .fees-header-title{
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
        th {
          border-bottom: 1px solid #c3ab8e;
          border-right: 1px solid #c3ab8e;
        }
      }
      .fees-body {
        font-size: 14px;
        color: #333333;
        tr{
          td {
            border-bottom: 1px solid #d2d2d2;
            border-right: 1px solid #d2d2d2;
          }
          &:last-child td {
            border-bottom: none;
          }
          &:nth-child(odd){
            background-color: #ffffff;
          }
          &:nth-child(even){
            background-color: #e5e5e5;
          }
          .no-bottom {
            border-bottom: none;
          }
          .right-line {
            border-right: 1px solid #d2d2d2;
          }
        }
        .fees-desc{
          background-color: #ffffff;
          text-align: left;
          padding: 10px 20px;
          p {
            color: rgba(86, 86, 86, 0.6);
            line-height: 1.8;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

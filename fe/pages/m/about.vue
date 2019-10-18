<template>
<div class="container m-about">
  <img src="~assets/m_about_bg.jpg" />
  <div class="company">
    <div class="index-title">公司介绍</div>
    <p>
      新译星是北京四达时代传媒有限公司旗下的在线人工翻译平台，秉承着“打造精品”的宗旨，拥有一支多语种、多领域的专业翻译团队和专家团队，尤其擅长影视剧的翻译。
    </p>
    <p>
      除翻译业务外，该平台还可以承接多语种的配音业务，建有32 个录音棚、1个拟音动效棚和1个5.1声道环绕声混录棚。该平台还与国内各大知名外语高校开展校企实践项目，为平台后续翻译人才储备奠定基础。
    </p>
    <p>
      我们可以提供字幕翻译、配音、字幕制作以及播出等全方位高品质的服务。
    </p>
  </div>
  <div class="job">
    <div class="index-title">加入我们</div>
    <p>
      我们长期招聘专职、兼职全球各类语言的专业翻译人才，职位包括：译制，母语审校，口译，配音演员等。
    </p>
    <p>
      简历请发送：<span>xinah@startimes.com.cn</span>
    </p>
  </div>
  <div class="job-step">
    <div class="index-title">招聘流程</div>
    <img src="~assets/job-step.jpg" />
  </div>
</div>
</template>

<script>
export default {
  layout: 'mobile'
}
</script>

<style lang="less">
.m-about{
  background-color: #f2f2f2;
  .company,.job,.job-step{
    background-color: #ffffff;
    width: 100%;
    padding: 0 20px 20px;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    line-height: 1.6;
    p {
      margin-bottom: 10px;
      span {
        color: #a27c4c;
      }
    }
  }
  .job,.job-step{
    margin-top: 10px;
  }
}
</style>

<template>
    <div class="nav-footer">
        <ul>
            <nuxt-link class="nav-item" tag="li" :to="'/m'" >
                <div><i class="iconfont">&#xe603;</i></div>
                <div class="title">首页</div>
            </nuxt-link>
            <nuxt-link class="nav-item" tag="li" :to="'/m/order'" >
                <div><i class="iconfont">&#xe605;</i></div>
                <div class="title">我要翻译</div>
            </nuxt-link>
            <nuxt-link class="nav-item" tag="li" :to="'/m/about'" >
                <div><i class="iconfont">&#xe60e;</i></div>
                <div class="title">关于我们</div>
            </nuxt-link>
            <nuxt-link class="nav-item" tag="li" :to="'/m/mine'" >
                <div><i class="iconfont">&#xe60f;</i></div>
                <div class="title">客户中心</div>
            </nuxt-link>
        </ul>
    </div>
</template>
<style lang="less">
.nav-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-color: #ffffff;
  border-top: 1px solid #e7e7e7;
  font-size: 10px;
  text-align: center;
  ul {
    display: inline-flex;
    width: 100%;
    padding-top: 5px;
    li {
      width: 25%;
      .title {
        line-height: 26px;
      }
      .iconfont{
        font-size: 26px;
      }
    }
    li.nuxt-link-active:not(:first-child){
      color: #a27c4c;
    }
    li.nuxt-link-exact-active {
      color: #a27c4c;
    }
  }
}
</style>

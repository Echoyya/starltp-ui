<template>
    <div class="mine-nav">
        <div class="user-info">
            <div class="user-head">
                <img src="~static/default.jpg" />
            </div>
            <div class="user-name">{{ name }}</div>
            <div class="login-time">{{$t('mine.registerTime')}}: {{ create_time }}</div>
        </div>
        <ul class="mine-menu">
            <nuxt-link class="mine-menu-item" tag="li" :to="$i18n.path('mine')">
                <a>
                    <i class="iconfont">&#xe687;</i>
                    {{$t('mine.basicInfo')}}
                </a>
            </nuxt-link>
            <nuxt-link class="mine-menu-item" tag="li" :to="$i18n.path('mine/list')">
                <a>
                    <i class="iconfont">&#xe601;</i>
                    {{$t('mine.orderInfo')}}
                </a>
            </nuxt-link>
            <nuxt-link class="mine-menu-item" tag="li" :to="$i18n.path('mine/password')">
                <a>
                    <i class="iconfont">&#xe64a;</i>
                    {{$t('mine.changePassword')}}
                </a>
            </nuxt-link>
        </ul>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { getUser } from '../../service/cumsService'
import moment from 'moment-timezone'

export default {
    computed: {
        ...mapState(['token', 'name', 'create_time'])
    },
    mounted() {
        if (!this.create_time) {
            const _this = this
            getUser(
                {
                    token: this.token
                },
                function(res) {
                    res.create_time = moment(res.create_time).format('YYYY-MM-DD')
                    _this.SET_USERINFO(res)
                }
            )
        }
    },
    methods: {
        ...mapMutations(['SET_USERINFO'])
    }
}
</script>
<style lang="less">
.mine-nav {
    display: inline-block;
    background-color: #ffffff;
    width: 220px;
    border-radius: 2px;
    float: left;
    .user-info {
        text-align: center;
        .user-head {
            margin: 30px auto 20px;
            padding: 10px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .user-name {
            padding: 10px 0;
        }
        .login-time {
            font-size: 12px;
            color: #999999;
            &:after {
                display: block;
                content: ' ';
                border-bottom: 1px solid #d8dadf;
                margin: 20px 30px;
            }
        }
    }
    .mine-menu {
        margin: 0 auto 30px;
        .mine-menu-item {
            font-size: 16px;
            color: #a27c4c;
            line-height: 50px;
            text-align: left;
            padding-left: 30px;
            a {
                font-size: 16px;
                color: #a27c4c;
            }
            .iconfont {
                font-size: 20px;
                margin-right: 10px;
            }
            &.nuxt-link-exact-active {
                background-color: #f6f6f6;
                a {
                    color: #000000;
                }
                border-left: 2px solid #999999;
            }
        }
    }
}
</style>

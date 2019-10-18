<template>
    <div class="header clear">
        <div class="header-body">
            <nuxt-link :to="$i18n.path('')">
                <div class="logo" :class="{'long-menu':$i18n.locale!='cn'}"></div>
            </nuxt-link>
            <ul class="navigation clear">
                <nuxt-link class="nav-item" tag="li" :to="$i18n.path('')">
                    <a>{{$t('menu.home')}}</a>
                </nuxt-link>
                <nuxt-link class="nav-item" tag="li" :to="$i18n.path('video')">
                    <a>{{$t('menu.shortVideo')}}</a>
                </nuxt-link>
                <nuxt-link class="nav-item" tag="li" :to="$i18n.path('thematic')">
                    <a>{{$t('menu.shortThematic')}}</a>
                </nuxt-link>
                <nuxt-link class="nav-item" tag="li" :to="$i18n.path('interpretation')">
                    <a>{{$t('menu.shortInterpretation')}}</a>
                </nuxt-link>
                <nuxt-link class="nav-item" tag="li" :to="$i18n.path('dubbing')">
                    <a>{{$t('menu.shortDubbing')}}</a>
                </nuxt-link>
                <!-- <nuxt-link class="nav-item" tag="li" :to="$i18n.path('instant')" ><a>{{$t('menu.instant')}}</a></nuxt-link> -->
                <nuxt-link class="nav-item" tag="li" :to="$i18n.path('service/business')">
                    <a>{{$t('menu.shortBusiness')}}</a>
                </nuxt-link>
            </ul>
            <div class="language clear">
                <!--<div class="sprite-icon" :class="$i18n.locale"></div>-->
                <div class="login">
                    {{$i18n.locale === 'en'? 'English' : '中文'}}
                    <i class="iconfont xiala">&#xe654;</i>
                </div>
                <div class="drop-language">
                    <ul class="select-language">
                        <li v-for="item in country" :key="item.value">
                            <nuxt-link :to="$i18n.languagePath(item.value, $route.fullPath)">
                                <span class="language-title">{{item.label}}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="token" class="mine clear">
                <el-dropdown placement="top" @command="handleCommand">
                    <span class="el-dropdown-link user">
                        {{name}}
                        <i class="iconfont xiala">&#xe654;</i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="mine">{{$t('menu.mine')}}</el-dropdown-item>
                        <el-dropdown-item command="translator">{{$t('menu.translator')}}</el-dropdown-item>
                        <el-dropdown-item command="logout">{{$t('button.logout')}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div v-if="!token" class="mine clear">
                <span class="login">
                    <nuxt-link
                        class="nav-item"
                        :to="{ path:$i18n.path('login'), query:{ redirect: redirect} }"
                    >{{$t('button.login')}}</nuxt-link>/
                    <nuxt-link
                        class="nav-item"
                        :to="{ path:$i18n.path('register'), query:{ redirect: redirect} }"
                    >{{$t('button.register')}}</nuxt-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import utils from '../utils/utils'
import { mapState, mapMutations } from 'vuex'
import config from '../utils/config'
import api from '../utils/api'

export default {
    data() {
        return {
            redirect: '/',
            country: config.country
        }
    },
    computed: {
        ...mapState(['token', 'name', 'phone_number'])
    },
    mounted() {
        this.redirect = this.$route.query.redirect ? this.$route.query.redirect : this.$i18n.path('')
        if (window.location.href.includes('clear')) {
            sessionStorage.clear()
        } else {
            const info = utils.getSession('_info')
            if (info) {
                if (info) {
                    this.SET_BASEINFO({ ...info })
                } else {
                    this.handleCommand('logout')
                }
            }
        }
    },

    methods: {
        ...mapMutations(['SET_BASEINFO']),
        handleCommand(command) {
            if (command === 'logout') {
                sessionStorage.clear()
                this.SET_BASEINFO({ token: '', name: '', phone_number: '' })
                if (location.href.includes('/mine')) {
                    location.href = this.$i18n.path('')
                }
            } else if (command === 'translator') {
                utils.toTranslator(api.translatorsiteURL, 'home')
            } else {
                this.$router.push({ path: this.$i18n.path(command) })
            }
        }
    }
}
</script>
<style lang="less">
@import 'language.less';
.header {
    width: 100%;
    background-color: #ffffff;
    .header-body {
        width: 1092px;
        height: 70px;
        margin: 0 auto;
    }
    .logo {
        float: left;
        background: url('~static/logo.png') no-repeat;
        background-size: 90px 50px;
        width: 90px;
        height: 50px;
        margin: 12px 130px 8px 80px;
        &.long-menu {
            margin: 16px 50px 15px 80px;
        }
    }
    .navigation {
        float: left;
        display: inline-flex;
        margin-top: 28px;
        .nav-item {
            float: left;
            color: #a27c4c;
            padding: 0 15px 18px;
            text-align: center;
            a {
                color: #a27c4c;
                text-decoration: none;
            }
            &.nuxt-link-exact-active {
                a {
                    color: #000000;
                }
                border-bottom: 2px solid #a27c4c;
            }
        }
    }
    .language {
        position: relative;
        float: right;
        display: flex;
        margin-top: 28px;
        cursor: pointer;
        width: 60px;
        .login {
            font-size: 12px;
            color: #a27c4c;
            margin-right: 10px;
            .iconfont.xiala {
                margin-left: 3px;
                font-size: 12px;
            }
        }
        .drop-language {
            display: none;
            position: absolute;
            top: 15px;
            width: 65px;
            left: 0px;
            padding-top: 15px;
            z-index: 999;
            .select-language {
                background-color: #fff;
                border: 1px solid #ebeef5;
                border-radius: 4px;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                padding: 0 10px;
                li {
                    line-height: 30px;
                    &:not(:last-child) {
                        border-bottom: 1px solid #ebeef5;
                    }
                    .language-title {
                        font-size: 12px;
                        color: #a27c4c;
                    }
                }
            }
        }
        &:hover {
            .drop-language {
                display: block;
            }
        }
    }
    .mine {
        margin-top: 27px;
        margin-right: 15px;
        float: right;
        color: #a27c4c;
        .login {
            padding: 3px 10px;
            border-radius: 15px;
            a {
                font-size: 12px;
                color: #a27c4c;
                text-decoration: none;
            }
        }
        .user {
            display: flex;
            .iconfont.xiala {
                margin-left: 3px;
                font-size: 12px;
            }
            cursor: pointer;
            a {
                font-size: 12px;
                color: #a27c4c;
                text-decoration: none;
            }
        }
        .el-dropdown {
            font-size: 12px;
            color: #a27c4c;
        }
    }
}
</style>

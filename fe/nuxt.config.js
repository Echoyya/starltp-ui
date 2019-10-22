export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: '新译星-四达时代旗下人工翻译平台 | 在线翻译 | 小语种翻译 | 影视剧翻译',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    '新译星为全球客户提供法语、英语、葡萄牙语、斯瓦西里语、豪萨语等各种语言的影视译制、专题翻译、口译服务、笔译、文档翻译、工程翻译等'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    '新译星,影视翻译,翻译,专题翻译,口译,笔译,即时翻译,在线翻译,配音,译制配音,法语翻译,英语翻译,斯瓦西里语,豪萨语,葡萄牙语,西班牙语,工程翻译,广电翻译'
            },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'webkit'
            },
            {
                name: 'renderer',
                content: 'webkit'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#a27c4c' },
    /*
     ** Global CSS
     */
    css: ['video.js/dist/video-js.css', '~static/font/iconfont.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: '~/plugins/i18n.js'
        },
        {
            src: '~plugins/element-ui'
        },
        {
            src: '~plugins/ga.js',
            ssr: false
        },
        {
            src: '~plugins/vue-swiper.js',
            ssr: false
        },
        {
            src: '~plugins/nuxt-video-player-plugin.js',
            ssr: false
        },
        {
            src: '~plugins/axios.js',
            ssr: false
        }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    router: {
        middleware: 'i18n'
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        vendor: ['element-ui', 'vue-awesome-swiper', 'crypto-js'],
        extend(config, ctx) {
            config.resolve.modules = ['node_modules', '/opt/npm/starltp-ui-node_modules/']
        }
    },
    generate: {
        dir: 'starltp-ui'
    },
    modulesDir: ['node_modules', '/opt/npm/starltp-ui-node_modules/']
}

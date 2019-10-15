import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

const cnStar = require('~/locales/cn.json')
const enStar = require('~/locales/en.json')

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'cn',
    messages: {
      'cn': {
        ...cnStar,
        ...zhLocale
      },
      'en': {
        ...enStar,
        ...enLocale
      }
    }
  })

  ElementLocale.i18n((key, value) => app.i18n.t(key, value))

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }

  app.i18n.languagePath = (locale, link) => {
    /// 如果语言和当前语言一致，则路径不变
    if (locale === app.i18n.locale) {
      return link
    }
    // 如果是默认语言，则不进行截取
    if (app.i18n.locale !== app.i18n.fallbackLocale) {
      link = link.replace(/^\/\w+/, '')
    }
    let realhref = '/' + locale + link
    // 如果是默认语言，则将其去掉
    if (locale === app.i18n.fallbackLocale) {
      realhref = realhref.replace(app.i18n.fallbackLocale, '').replace('//', '/')
    }
    return realhref
  }
}

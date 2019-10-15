import {
  SET_BASEINFO,
  RESET_VIDEOFORM,
  RESET_THEMATICFORM,
  RESET_INTERPRETATIONFORM,
  RESET_DUBBINGFORM,
  RESET_INSTANTFORM,
  SET_USERINFO,
  SET_TYPE,
  SET_LANG
} from './mutation-types'

export default {
  // 设定盒子传过来的基本参数
  [SET_BASEINFO] (state, payload) {
    state.token = payload.token
    state.name = payload.name
    state.phone_number = payload.phone_number
  },
  // 设定翻译类型,方便跳转的时候,type不变
  [SET_TYPE] (state, payload) {
    state.type = payload
  },
  // 初始化影视译制表单内容
  [RESET_VIDEOFORM] (state, payload) {
    state.videoForm = {
      title: '',
      language: {
        sourceLanguage: null,
        targetLanguages: []
      },
      areaOfField: null,
      applicationScene: null,
      request: null,
      read: null,
      orderFilesList: []
    }
  },
  // 初始化专题翻译表单内容
  [RESET_THEMATICFORM] (state) {
    state.thematicForm = {
      title: '',
      translationContent: '',
      language: {
        sourceLanguage: null,
        targetLanguages: []
      },
      areaOfField: null,
      applicationScene: null,
      request: null,
      read: null,
      orderFilesList: []
    }
  },
  // 初始化口译服务表单内容
  [RESET_INTERPRETATIONFORM] (state) {
    state.interpretationForm = {
      language: {
        sourceLanguage: null,
        targetLanguages: []
      },
      areaOfField: null,
      workPlace: null,
      time: null,
      request: null,
      read: null
    }
  },
  // 初始化配音服务表单内容
  [RESET_DUBBINGFORM] (state) {
    state.dubbingForm = {
      title: '',
      language: {
        sourceLanguage: null,
        targetLanguages: []
      },
      areaOfField: null,
      applicationScene: null,
      request: null,
      read: null,
      orderFilesList: []
    }
  },
  // 初始化即时翻译表单内容
  [RESET_INSTANTFORM] (state) {
    state.instantForm = {
      translationContent: '',
      language: {
        sourceLanguage: null,
        targetLanguages: []
      },
      request: null,
      read: null
    }
  },
  // 设置用户基本信息,用于多个页面显示
  [SET_USERINFO]  (state, payload) {
    state.name = payload.name
    state.create_time = payload.create_time
  },
  // 设置国际化
  [SET_LANG]  (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

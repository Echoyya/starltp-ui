import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

// 需要维护的状态
const state = {
  locales: ['cn', 'en'],
  locale: 'cn',
  token: '', // token
  name: '', // 用户昵称
  phone_number: '', // 手机号
  create_time: '', // 注册时间
  type: 1, // 翻译类型
  videoForm: {
    title: '',
    language: {
      sourceLanguage: null,
      targetLanguages: []
    },
    areaOfField: null,
    applicationScene: null,
    deliverDate: null,
    request: null,
    read: null,
    orderFilesList: []
  },
  thematicForm: {
    title: '',
    translationContent: '',
    language: {
      sourceLanguage: null,
      targetLanguages: []
    },
    areaOfField: null,
    applicationScene: null,
    request: null,
    deliverDate: null,
    read: null,
    orderFilesList: []
  },
  interpretationForm: {
    title: '',
    language: {
      sourceLanguage: null,
      targetLanguages: []
    },
    areaOfField: null,
    workPlace: null,
    time: null,
    request: null,
    read: null,
    orderFilesList: []
  },
  dubbingForm: {
    title: '',
    language: {
      sourceLanguage: null,
      targetLanguages: []
    },
    areaOfField: null,
    applicationScene: null,
    request: null,
    deliverDate: null,
    read: null,
    orderFilesList: []
  },
  instantForm: {
    translationContent: '',
    deliverDate: null,
    language: {
      sourceLanguage: null,
      targetLanguages: []
    },
    request: null,
    read: null
  }
}

const store = () => new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store

// import request from './request.js'
import axios from 'axios'
import { MessageBox } from 'element-ui'
import CryptoJS from 'crypto-js'
import { errorCode as cnErrorCode } from '~/locales/cn.json'
import { errorCode as enErrorCode } from '~/locales/en.json'

/**
 * 设置sessionStorage
 * @author yang.xiaolong
 * @description 2017-11-01:默认会对json进行格式化操作,防止存入的为[object object]这种错误
 * @version     1.0.0
 * @param       {String} _key
 * @param       {Json} _value
 */
function setSession (_key, _value) {
  if (typeof _value === 'string') {
    sessionStorage.setItem(_key, _value)
  } else {
    sessionStorage.setItem(_key, JSON.stringify(_value))
  }
}
/**
 * 获取sessionStorage中的值
 * @author yang.xiaolong
 * @description 2017-11-01:默认会对String类型进行解析,防止数据类型错误
 * @version     1.0.0
 * @param       {String} _key
 * @return      {Json}
 */
function getSession (_key) {
  const _info = sessionStorage.getItem('_info')
  if (_info) {
    const bytes = CryptoJS.AES.decrypt(_info.toString(), 'startimes ltp')
    const info = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return info
  } else {
    return null
  }
}
/**
 * 获取url参数
 * @author yang.xiaolong
 * @description 2017-10-25:根据key值获取url路径上的value参数
 * @version     1.0.0
 * @param       {String} name
 * @return      {String}
 */
function getUrlKey (name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [''])[1].replace(/\+/g, '%20')) || null
}
/**
 * 获取字符串的真实长度
 * @author yang.xiaolong
 * @description 2017-10-25:获取字符串的真实长度,中文字符为1,应为字符为0.5
 * @version     1.0.0
 * @param       {String} str
 * @return      {Null}
 */
function getRealLength (str) {
  let charLength = 0
  for (let i = 0; i < str.length; i++) {
    const sonChar = str.charAt(i)
    encodeURI(sonChar).length > 2 ? charLength += 1 : charLength += 0.5
  }
  return charLength
}
/**
 * post方式获取数据
 * @author yang.xiaolong
 * @description 2017-10-25:需要传入服务Ip地址,参数对象,成功的函数,失败的处理函数
 * @version     1.0.0
 * @param       {String} _url
 * @param       {obj} _params
 * @param       {func} _success
 * @param       {func} _error
 * @return      {Null}
 */
function ottRequest (_url, _params, _method, _success, _error) {
  // 增加options的封装
  const options = {
    method: _method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': 'application/json;charset=utf-8'
    }
  }
  if (_params.token) {
    options.headers.Authorization = 'Bearer ' + _params.token
    delete _params.token
  }
  if (_method === 'POST' || _method === 'PUT') {
    options.data = JSON.stringify(_params)
  } else {
    _url = _url + '?'
    for (const key in _params) {
      _url += key + '=' + _params[key] + '&'
    }
    _url = _url.substr(0, _url.length - 1)
  }
  options.url = _url
  return axios(options).then(function (res) {
    if (options.url.includes('getvalidimage')) {
      _success && _success(res)
    } else {
      _success && _success(res.data)
    }
  }).catch(function (err) {
    const locale = location.pathname.split('/')[1]
    let errCode = cnErrorCode
    if (locale === 'en') {
      errCode = enErrorCode
    }
    if (!err.response) {
      if (err.message === 'Network Error') {
        MessageBox.alert(errCode.timeout, { type: 'error' }).then(function () {
          sessionStorage.clear()
          location.href = isMobile() ? '/m/mine/login' : '/login'
        })
      } else {
        MessageBox.alert(err, { type: 'error' })
      }
    } else {
      const errResult = err.response.data
      if (err.response.status === 401 && typeof errResult === 'string') {
        MessageBox.alert(errCode.timeout, { type: 'error' }).then(function () {
          sessionStorage.clear()
          location.href = isMobile() ? '/m/mine/login' : '/login'
        })
      } else {
        MessageBox.alert(errCode[errResult.code], { type: 'error' })
        _error && _error(err)
      }
    }
  })
  // request.ajax({
  //   'url': _url,
  //   'data': _params,
  //   'method': _method,
  //   'dataType': 'json',
  //   success: function (response) {
  //     _success && _success(response)
  //   },
  //   error: function (err, status) {
  //     _error && _error(err, status)
  //   }
  // })
}

/**
 * 获取字符串长度
 * @author
 * @description 获取字符串长度 中文占一个 英文占0.5个
 * @version     1.0.0
 * @param       {String} s
 */
function getLength (s) {
  if (s === undefined) return 0
  let charLength = 0
  for (let i = 0; i < s.length; i++) {
    const sonChar = s.charAt(i)
    encodeURI(sonChar).length > 2 ? charLength += 1 : charLength += 0.5
  }
  return charLength
}
/**
 * 截取字符串
 * @author
 * @description 截取字符串 从str 中截取len 个字符，中文占一个 英文占0.5个
 * @version     1.0.0
 * @param       {String} str
 * @param       {String} len
 */
function cutStr (str, len) {
  let charLength = 0
  for (let i = 0; i < str.length; i++) {
    const sonStr = str.charAt(i)
    encodeURI(sonStr).length > 2 ? charLength += 1 : charLength += 0.5
    if (charLength >= len) {
      const subLen = charLength === len ? i + 1 : i
      return str.substr(0, subLen)
    }
  }
}

/**
 * 查找对象在数组中的下标
 * @author yang.xiaolong
 * @description 2017-12-13
 * @version     1.0.0
 * @param       {[Array]} array
 * @param       {[Object]} obj
 * @return      {[Number]}
 */
function findIndex (array, obj) {
  let index = 0
  for (let i = 0; i < array.length; i++) {
    if (obj.id === array[i].id) {
      index = i
      break
    }
  }
  return index
}
/**
 * 获取随机数
 * @author yang.xiaolong
 * @description 2017-12-13
 * @version     1.0.0
 * @param       {[Number]} min
 * @param       {[Number]} max
 * @return      {[Number]}
 */
function random (min, max) {
  return Math.floor(Math.random() * (max + 1) - min)
};

/**
 * 是否是手机浏览器
 * @return {Boolean} [description]
 */
function isMobile () {
  const ua = navigator.userAgent
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
  const isAndroid = ua.match(/(Android)\s+([\d.]+)/)
  return isIphone || isAndroid
}
/**
 * 跳转到译员门户
 * @return null
 */
function toTranslator (translatorsiteURL, type, ids) {
  if (process.browser) {
    let param = translatorsiteURL + '#/login?' + 'info=' + encodeURIComponent(sessionStorage.getItem('_info'))
    if (type) {
      param += '&type=home'
    }
    if (location.href.includes('en')) {
      param += '&language=en'
    }
    if (ids) {
      param += ids
    }
    window.location.href = param
  }
}
/**
 * 获取cookie
 * @return null
 */
function getCookie (name) {
  let arr
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (document.cookie.match(reg)) {
    arr = document.cookie.match(reg)
    return unescape(arr[2])
  } else {
    return null
  }
}
export default {
  setSession,
  getSession,
  getUrlKey,
  getRealLength,
  ottRequest,
  getLength,
  cutStr,
  findIndex,
  random,
  isMobile,
  toTranslator,
  getCookie
}

import { MessageBox } from 'element-ui'
import errCode from './error'

/**
 * 仿jquery的ajax请求
 * @author yang.xiaolong
 * @description 2017-10-25:使用方法和jquery类似
 * @version     1.0.0
 * @param       {obj} options
 * @return      {null}
 */
function ajax (options) {
  function empty () {}

  function obj2Url (obj) {
    if (obj && obj instanceof Object) {
      const arr = []
      for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (i === 'token') continue
          if (typeof obj[i] === 'function') {
            obj[i] = obj[i]()
          }
          if (obj[i] === null) {
            obj[i] = ''
          }
          arr.push(escape(i) + '=' + escape(obj[i]))
        }
      }
      return arr.join('&').replace(/%20/g, '+')
    } else {
      return obj
    }
  }
  function isMobile () {
    const sUserAgent = navigator.userAgent.toLowerCase()
    const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
    const bIsMidp = sUserAgent.match(/midp/i) == 'midp'
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
    const bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
    const bIsAndroid = sUserAgent.match(/android/i) == 'android'
    const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
    const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
      return false
    } else {
      return true
    }
  }
  const opt = {
    url: '', // 请求地址
    sync: true, // true，异步 | false,同步，会锁死浏览器，并且open方法会报浏览器警告
    method: 'GET', // 提交方法
    data: null, // 提交数据
    username: null, // 账号
    password: null, // 密码
    dataType: null, // 返回数据类型
    success: empty, // 成功返回回调
    error: empty, // 错误信息回调
    timeout: 0 // 请求超时ms
  }
  for (const i in options) {
    if (options.hasOwnProperty(i)) {
      opt[i] = options[i]
    }
  }

  const accepts = {
    script: 'text/javascript, application/javascript, application/x-javascript',
    json: 'application/json',
    xml: 'application/xml, text/xml',
    html: 'text/html',
    text: 'text/plain'
  }
  let abortTimeout = null
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      xhr.onreadystatechange = empty
      clearTimeout(abortTimeout)
      let result,
        dataType
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || xhr.status === 0) {
        if (xhr.responseType === 'arraybuffer' || xhr.responseType === 'blob') {
          result = xhr.response
        } else {
          result = xhr.responseText
          dataType = opt.dataType
            ? opt.dataType
            : xhr.getResponseHeader('content-type').split('', 1)[0]
          for (const i in accepts) {
            if (accepts.hasOwnProperty(i) && accepts[i].includes(dataType)) {
              dataType = i
            }
          }
          try {
            if (dataType === 'xml') {
              result = xhr.responseXML
            } else if (dataType === 'json') {
              result = result.trim() === ''
                ? null
                : JSON.parse(result)
            }
          } catch (e) {
            opt.error(e, xhr)
            xhr.abort()
          }
        }
        opt.success(result, xhr)
      } else {
        if (xhr.status === 401) {
          MessageBox.alert('登录超时,请重新登录', { type: 'error' }).then(function () {
            location.href = isMobile() ? '/m/mine/login' : '/login'
          })
        }
        const errResult = JSON.parse(xhr.responseText)
        MessageBox.alert(errCode[errResult.code], { type: 'error' })
        opt.error(xhr.responseText, xhr.status)
      }
    }
  }

  if (opt.method === 'GET' || opt.method === 'DELETE') {
    opt.url = opt.url + '?' + obj2Url(opt.data)
  }
  xhr.open(opt.method, opt.url, opt.sync, opt.username, opt.password)
  if (opt.data.token) {
    xhr.setRequestHeader('Authorization', 'Bearer ' + opt.data.token)
    delete opt.data.token
  }
  // if (opt.data.tenant_id) {
  //   xhr.setRequestHeader('tenant_id', opt.data.tenant_id)
  //   delete opt.data.tenant_id
  // }
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.setRequestHeader('Content-Type', 'application/json')
  if (opt.timeout > 0) {
    abortTimeout = setTimeout(function () {
      xhr.onreadystatechange = empty
      xhr.abort()
      opt.error('timeout', xhr)
    }, opt.timeout)
  }
  xhr.send((opt.method === 'POST' || opt.method === 'PUT')
    ? JSON.stringify(opt.data)
    : obj2Url(opt.data))
}

export default {
  ajax
}

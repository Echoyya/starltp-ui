import utils from '../utils/utils'
import api from '../utils/api'
import CryptoJS from 'crypto-js'

const tenantId = 1
/**
 * 发送验证码
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const send = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.send + '?phone_number=' + payload.phone_number, {}, 'POST', resolve, reject)
}
/**
 * 用户注册
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const register = (payload, resolve, reject) => {
  payload.password = CryptoJS.MD5(payload.password).toString()
  payload.phone_number = payload.codeNum ? payload.codeNum.concat(payload.phone_number) : '0086'.concat(payload.phone_number)
  delete payload.codeNum
  utils.ottRequest(api.baseUrl + api.register, {
    ...payload,
    tenant_id: tenantId
  }, 'POST', resolve, reject)
}
export const registerEmail = (payload, resolve, reject) => {
  payload.password = CryptoJS.MD5(payload.password).toString()
  utils.ottRequest(api.baseUrl + api.registerEmail, {
    ...payload,
    tenant_id: tenantId
  }, 'POST', resolve, reject)
}
/**
 * 用户登录
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const login = (payload, resolve, reject) => {
  payload.password = CryptoJS.MD5(payload.password).toString()
  utils.ottRequest(api.baseUrl + api.login, {
    ...payload,
    tenant_id: tenantId
  }, 'POST', function (res) {
    res.name = res.user_name
    resolve && resolve(res)
  }, reject)
}
export const loginEmail = (payload, resolve, reject) => {
  payload.password = CryptoJS.MD5(payload.password).toString()
  utils.ottRequest(api.baseUrl + api.loginEmail, {
    ...payload,
    tenant_id: tenantId
  }, 'POST', function (res) {
    res.name = res.user_name
    resolve && resolve(res)
  }, reject)
}
/**
 * 修改密码
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const change = (payload, resolve, reject) => {
  payload.original_password = CryptoJS.MD5(payload.original_password).toString()
  payload.new_password = CryptoJS.MD5(payload.new_password).toString()
  utils.ottRequest(api.baseUrl + api.change, {
    ...payload
  }, 'PUT', resolve, reject)
}
/**
 * 重置密码
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const reset = (payload, resolve, reject) => {
  payload.new_password = CryptoJS.MD5(payload.new_password).toString()
  payload.phone_number = payload.codeNum ? payload.codeNum.concat(payload.phone_number) : '0086'.concat(payload.phone_number)
  delete payload.codeNum
  utils.ottRequest(api.baseUrl + api.reset, {
    ...payload,
    tenant_id: tenantId
  }, 'PUT', resolve, reject)
}
export const resetEmail = (payload, resolve, reject) => {
  payload.new_password = CryptoJS.MD5(payload.new_password).toString()
  utils.ottRequest(api.baseUrl + api.resetEmail, {
    ...payload,
    tenant_id: tenantId
  }, 'PUT', resolve, reject)
}
/**
 * 获取用户信息
 * @author yang.xiaolong
 * @description 2018-1-16
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getUser = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.getUser, payload, 'GET', resolve, reject)
}
/**
 * 修改用户信息
 * @author yang.xiaolong
 * @description 2018-1-16
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const putUser = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.putUser, {
    ...payload
  }, 'PUT', resolve, reject)
}
export const putUserMail = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.putUserMail, {
    ...payload
  }, 'PUT', resolve, reject)
}
/**
 * 校验验证码是否正确
 * @author lin.xiutao
 * @description 2018-07-12
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const codeValidate = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.codeValidate, payload, 'GET', resolve, reject)
}
/**
 * 校验邮箱是否全网唯一
 * @author lin.xiutao
 * @description 2018-07-12
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const emailOnly = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.emailOnly, payload, 'GET', resolve, reject)
}

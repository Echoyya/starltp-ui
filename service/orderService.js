import utils from '../utils/utils'
import api from '../utils/api'
/**
 * 提交订单
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const postOrders = (payload, resolve, reject) => {
  const params = {
    token: payload.token,
    title: payload.title,
    orderType: 'CUSTOMIZEDORDER',
    customizedOrderItemsDto: {
      businessType: payload.businessType,
      sourceLanguage: payload.language.sourceLanguage,
      targetLanguages: payload.language.targetLanguages.toString(),
      areaOfField: payload.areaOfField,
      applicationScene: payload.applicationScene,
      request: payload.request,
      deliverDate: payload.deliverDate,
      translationContent: payload.translationContent,
      workPlace: payload.workPlace
    }
  }

  // 判断时间是否存在,存在则处理时间
  if (payload.time) {
    params.customizedOrderItemsDto.beginTime = Date.parse(payload.time[0]) / 1000
    params.customizedOrderItemsDto.endTime = Date.parse(payload.time[1]) / 1000
  }
  // 判断文件列表是否为空
  if (payload.orderFilesList && payload.orderFilesList.length > 0) {
    params.customizedOrderItemsDto.orderFilesList = payload.orderFilesList
  }
  utils.ottRequest(api.baseUrl + api.postOrders, params, 'POST', resolve, reject)
}
/**
 * 获取订单列表
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getOrders = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.getOrders, payload, 'GET', resolve, reject)
}
/**
 * 获取订单详情
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getOrderDetail = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.getOrderDetail.replace('*', payload.id), payload, 'GET', resolve, reject)
}
/**
 * 获取各个订单状态的数量
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getOrderCounts = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.getOrderCounts, payload, 'GET', resolve, reject)
}
/**
 * 取消订单
 * @author lin.xiutao
 * @description 2018-04-18
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const cancelOrder = (payload, resolve, reject) => {
  const params = { token: payload.token }
  const url = (api.baseUrl + api.cancelOrder.replace('*', payload.orderId) + '?comment=' + payload.comment)
  utils.ottRequest(url, params, 'PUT', resolve, reject)
}
/**
 * 删除订单
 * @author lin.xiutao
 * @description 2018-04-18
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const delOrder = (payload, resolve, reject) => {
  const params = { token: payload.token }
  const url = (api.baseUrl + api.delOrder.replace('*', payload.orderId) + '?comment=' + payload.comment)
  utils.ottRequest(url, params, 'PUT', resolve, reject)
}
/**
 * 删除订单获取订单分期信息
 * @author lin.xiutao
 * @description 2018-04-18
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getInstallmentQuotation = (payload, resolve, reject) => {
  const params = { token: payload.token }
  utils.ottRequest((api.baseUrl + api.getInstallmentQuotation).replace('*', payload.id), params, 'GET', resolve, reject)
}
/**
 * 下载文件
 * @author yang.xiaolong
 * @description 2019-3-7
 * @version     1.0.0
 * @param  {[type]} payload [description]
 * @param  {[type]} resolve [description]
 * @param  {[type]} reject  [description]
 * @return {[type]}         [description]
 */
export const getDownloadUrl = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.download, payload, 'GET', resolve, reject)
}

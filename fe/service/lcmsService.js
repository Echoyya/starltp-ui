import utils from '../utils/utils'
import api from '../utils/api'
/**
 * 获取cms内容
 * @author yang.xiaolong
 * @description 2018-01-04
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getContent = (payload, resolve, reject) => {
  utils.ottRequest(api.baseUrl + api.getContent, payload, 'GET', resolve, reject)
}
/**
 * 根据id查询内容
 * @author lin.xiutao
 * @description 2018-08-01
 * @version     1.0.0
 * @param       {Object} payload
 * @param       {Function} resolve
 * @param       {Function} reject
 * @return      {Null}
 */
export const getContentById = (payload, resolve, reject) => {
  const id = payload.id
  delete payload.id
  utils.ottRequest(api.baseUrl + api.getContentById.replace('*', id), payload, 'GET', resolve, reject)
}

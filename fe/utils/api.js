let baseUrl = '/'
let staticUrl = '/'
let translatorsiteURL = ''
if (process.browser) {
  baseUrl = window.baseUrl
  staticUrl = window.staticUrl
  translatorsiteURL = window.translatorsiteURL
}
if (process.env.NODE_ENV === 'development') {
  const devConfig = require('./devConfig').devConfig
  baseUrl = devConfig.baseUrl
  staticUrl = devConfig.staticUrl
  translatorsiteURL = devConfig.translatorsiteURL
}
export default {
  baseUrl,
  staticUrl,
  translatorsiteURL,
  send: '/cums-service/v1/verificationcodes/send-with-countrycode', // 发送验证1码
  register: '/cums-service/v1/users/register-by-phone-username', // 注册用户
  registerEmail: '/cums-service/v1/users/register-by-email', // 邮箱注册用户
  login: '/cums-service/v1/users/login?useTenant=false', // 登录
  loginEmail: '/cums-service/v1/users/email-login', // 邮箱登录
  reset: '/cums-service/v1/users/passwords/reset', // 重置密码
  resetEmail: '/cums-service/v1/users/passwords/reset-by-email', // 邮箱重置密码
  change: '/cums-service/v1/users/passwords/changes', // 修改密码
  getUser: '/cums-service/v1/users/id', // 获取用户信息
  putUser: '/cums-service/v1/users', // 修改用户信息
  postOrders: '/order-service/v1/orders/usr', // 提交订单
  getOrders: '/order-service/v1/orders/usr', // 获取订单列表
  getOrderDetail: '/order-service/v1/orders/*/usr', // 获取订单详情
  getOrderCounts: '/order-service/v1/orders/usr/get-count', // 获取订单数量
  upload_file: '/file-os-service/v1/files',
  changeOrderStatus: '/order-service/v1/orders/*/order-status/usr?', // 修改订单状态
  getInstallmentQuotation: '/order-service/v1/orders/*/installment-quotation/usr', // 获取订单分期信息,
  cancelOrder: '/order-service/v1/orders/*/order-cancel', // 取消订单
  delOrder: '/order-service/v1/orders/*/order-deletion', // 删除订单
  getImageCode: '/cums-service/getvalidimage', // 获取图片验证码
  codeValidate: '/cums-service/v1/img-verifiy-code/verificate', // 验证校验码是否正确
  emailOnly: '/cums-service/v1/users/email-unique', // 验证校验码是否正确
  putUserMail: '/cums-service/v1/users-mail', // 新的修改用户信息
  getContent: '/lcms-service/v1/contents', // 查询内容信息
  getContentById: '/lcms-service/v1/contents/*', // 根据id查询内容信息
  download: '/file-os-service/v1/documents/download-url' // 获取file-os-service下载地址
}

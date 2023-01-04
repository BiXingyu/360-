/*
 * @Date: 2022-11-04 13:50:23
 * @LastEditors: Zhibing Wang
 * @LastEditTime: 2022-11-04 15:06:12
 * @FilePath: \winning-unity-auth-web\public\config.js
 */
// const config = {
//   ip: 'http://127.0.0.1',
//   port: '8762',
//   subIp: 'http://127.0.0.1',
//   // nginx 部署子应用端口（ps：端口号不同，手动修改）
//   subPort: '8764'
// }
const config = {
  // ip: 'http://127.0.0.1',
  // ip:"http://10.10.50.130", // 复星130
  ip:'http://172.23.18.91',  // 谭天本地
  // ip: 'http://172.23.17.6',
  port: '8762',
  // subIp: 'http://127.0.0.1',
  subIp: 'http://172.23.17.6',
  // nginx 部署子应用端口（ps：端口号不同，手动修改）
  subPort: '8764'
}

config.prefixUrl = config.ip + ':' + config.port
config.baseUrl = config.prefixUrl + '/auth/api/v3/'
config.clooseLoop = config.prefixUrl + '/cl/api/'
config.cdrbhapp = config.prefixUrl + '/cdrbh/'
config.panorama = config.prefixUrl + '/api/v3/'
// config.iframeUrl = config.prefixUrl + '/bh/closeloop/index.html?' // 5.x闭环跳转地址
config.iframeUrl = config.prefixUrl + '/closedCycle/index.html?' // 60闭环跳转地址
config.indexUrl = config.prefixUrl + '/authAdmin/casRedirect'
window.CONFIG = config

//cas认证
config.casLoginUrl = 'http://172.17.1.222:18888/casServer/login' // cas服务登录地址（根据现场修改ip和端口号）
config.casCookie = 'JSESSIONID-auth' // 统一后台管理系统的cas服务凭证（不需要修改）
config.enableCasFilter = true //统一后台管理系统接入集成门户开关，true代表开启，false代表关闭
config.tableList = [
  { label: '院内标本表', value: 'CDR_DICT_LIS_BBLX' },
  { label: '院内指标表', value: 'CDR_DICT_LIS' },
  { label: '院内药品表', value: 'CDR_DICT_YPML' },
  { label: '院内检查表', value: 'MASTER_ITEM' },
  { label: '院内诊断表', value: 'CDR_DICT_ZDDM' },
  { label: '院内手术表', value: 'CDR_DICT_SSBM' },
  { label: '标准映射表', value: 'SP_MAPPINGS_CONFIG' }
]
// 闭环展示查询是否允许选择历史数据查询
config.showCloseloopHistoryFilter = true
config.showSystemVersionInfo = true // 是否展示版本号
config.indexLogoSizeInfo = {
  name: '公版',
  width: '50px',
  height: '50px'
}
config.loginLogoSizeInfo = {
  name: '公版',
  width: '42px',
  height: '48px'
}

/*
 * @Date: 2022-03-22 16:37:23
 * @LastEditors: Zhibing Wang
 * @LastEditTime: 2022-08-27 09:48:41
 * @FilePath: \portal_v6.0\public\config\index.js
 */
const config = {
    HospitalMessage:{
     name:'北京大学人民医院',
     // 登录页logo
     loginCss:{
       width:'1.76rem', //尺寸除以192
       height:'',
     },
    // 主页logo
       layoutCss:{
       width:'1.02rem', //尺寸除以192
       height:'',
     }
   },

  project: {
    name: "mobile360",
  },
  // 本地包 数据服务平台地址  /c
  // baseUrl1: "http://172.23.17.132:8762/", // api接口ip地址   谭天本地
  baseUrl1: "http://10.8.16.63:8762/", // api接口ip地址   本地包 1(配合xshell连正式环境的地址)
  // baseUrl1: "http://10.10.50.130:8762/", // 测试环境UAT  2
  // baseUrl1: "http://10.11.11.61:8762/", // 现场 的正式环境  3

  // 60地址
  // baseUrl2: "http://172.16.9.92:8201/", // api接口ip地址 开发环境 	
  baseUrl2: "http://10.8.16.61:8201/", // 正式环境xshell代理过去的  1
  // baseUrl2: "http://10.10.50.130:8764/", // 测试环境UAT  2
  // baseUrl2: "http://10.11.11.59:8764/", // 现场 的正式环境  3

  casLoginUrl: "http://172.17.1.205:8200/casServer/login", // cas登录地址（根据现场修改ip和端口）
  casCookie: "JSESSIONID-hirc",
};

config.authAdminPath = config.baseUrl1 + "/authAdmin/login"; // 统一权限管理系统登录地址
window.CONFIG = config;



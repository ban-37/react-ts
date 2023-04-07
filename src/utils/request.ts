import { message } from "antd";
import axios from "axios";
// 添加加载提示
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
// nprogress是个js 需要类型定义ts
// npm i --save-dev @types/nprogress
// 不显示提示转圈
NProgress.settings.showSpinner = false;

const request = axios.create({
  baseURL: "http://dida100.com:8888",
  timeout: 5000,
});
request.interceptors.request.use((config) => {
  let token = sessionStorage.getItem("token");
  NProgress.start();
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});
request.interceptors.response.use(
  (res) => {
    NProgress.done();
    if(res.status!==200){
      // 没有请求成功
      if (res.status === 401) {
        // 没有权限
        message.info("没有权限");
      } else if (res.status === 500 || res.status === 505) {
        message.info("服务器错误");
      } else if (res.status === 404) {
        message.info("404找不到请求地址");
      } else {
        message.info("请求错误");
      }
    }
    return res;
    
  },
  (err) => {
    NProgress.done();
    message.info("请求错误");
    console.error(err);
    return err;
  }
);
export default  request;
import axios from "axios";
import { message } from "antd";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: "http://dida100.com:8888",
    timeout: 2000,
});

request.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    NProgress.start();
    let _token = localStorage.getItem("token")
    if (_token) {
        config.headers["Authorization"] = "Bearer " + _token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    NProgress.done();
    message.info("error")
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    NProgress.done();
    if (response.status !== 200) {
        // 没有请求成功
        if (response.status === 401) {
            // 没有权限
            message.info("没有权限");
        } else if (response.status === 500 || response.status === 505) {
            message.info("服务器错误");
        } else if (response.status === 404) {
            message.info("404找不到请求地址");
        } else {
            message.info("请求错误");
        }
    }
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    NProgress.done();
    message.info("请求错误");
    console.error(error);
    return Promise.reject(error);
});

export default request
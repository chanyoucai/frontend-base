import axios from "axios";
// vant-ui 提示
import { Toast } from "vant";
// 可添加 qs包 序列化参数

const service = axios.create({
  // 通过环境变量获取 baseUrl
  baseURL: "",
  // 超时设置
  timeout: 6000,
  // 允许携带身份信息
  withCredentials: true,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在 localStorage 或 Vuex 中获取token
    const token = "";
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 处理响应体
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 处理异常
    console.log("error:", error);
    console.log("status:", error.response.status);
    switch (error.response.status) {
      case 401:
        console.log("401");
        // 未登录，打到登录页
        break;
      case 403:
        console.log("403");
        Toast("登录过期，请重新登录");
        // 清除token，跳转到登录页
        break;
      case 404:
        console.log("404");
        Toast("资源不存在");
        break;
      default:
        Toast.fail({
          message: error.response.data.message,
          duration: 1500,
          forbidClick: true,
        });
    }
    return Promise.reject(error.response);
  }
);

export default service;

import axios from "axios";
import { Toast } from "vant";

const request = axios.create({
  // 通过环境变量获取 baseUrl
  baseURL: "",
  timeout: 6000,
  withCredentials: true,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
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
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 对响应错误做点什么
    switch (error.response.status) {
      case 401:
        // 未登录，打到登录页
        break;
      case 403:
        Toast({
          message: "登录过期，请重新登录",
          duration: 1000,
          forbidClick: true,
        });
        // 清除token，跳转到登录页
        break;
      case 404:
        Toast({
          message: "资源不存在",
          duration: 1000,
          forbidClick: true,
        });
        break;
      default:
        Toast({
          message: error.response.data.message,
          duration: 1500,
          forbidClick: true,
        });
    }
    return Promise.reject(error.response);
  }
);

export default request;

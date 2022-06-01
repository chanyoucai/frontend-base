import http from "../utils/http";

let commonApi = "";

export default {
  // 登录
  login(data) {
    return http.post(`${commonApi}`, data);
  },
  // 用户信息
  userInfo(params) {
    return http.get(`${commonApi}/userInfo`, params);
  },
  updateInfo(data) {
    return http.put(`${commonApi}`, data);
  },
  deleteInfo(params) {
    return http.delete(`${commonApi}`, params);
  },
};

import request from "../plugins/axios";

export default {
  get() {
    return request();
  },
  post(param) {
    console.log(param);
    return request();
  },
  put() {
    return request();
  },
  delete() {
    return request();
  },
  upload() {
    return request();
  },
};

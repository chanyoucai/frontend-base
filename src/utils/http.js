import request from "../plugins/axios";

export default {
  post(url, data = {}) {
    const config = {
      method: "post",
      url,
      data,
    };
    return request(config);
  },
  put(url, data = {}) {
    const config = {
      method: "put",
      url,
      data,
    };
    return request(config);
  },
  get(url, params = {}) {
    const config = {
      method: "get",
      url,
      params,
    };
    return request(config);
  },
  delete(url, params = {}) {
    const config = {
      method: "delete",
      url,
      params,
    };
    return request(config);
  },
  // 保留上传文件方法
  // upload(url, data) {
  //   const config = {
  //     method: "post",
  //     url,
  //     data,
  //   };
  //   return request(config);
  // },
};

import axios from 'axios'
// import Router from '@/router'
// import config from '@/config'

const instance = axios.create()

instance.defaults.timeout = 10000
instance.defaults.withCredentials = true

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 请求基地址
    config.url = ''
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.authorization = token  //请求头加上token
    }
    return config
  },
  err => {
    // 错误处理
    return Promise.reject(err)
  })

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data = response.data
    return data
  },
  error => {
    // let message
    // const response = error.response
    // if (response) {
    //   const data = response.data
    //   message = data.message
    // }
    // if (!message) {
    //   message = error.message
    // }
    // if (message) {
    //   Message({
    //     message: message,
    //     type: 'error'
    //   })
    // }
    return Promise.reject(error)
  }
)

export default instance;

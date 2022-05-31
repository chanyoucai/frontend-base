const { defineConfig } = require('@vue/cli-service')
console.log('env:', process.env.VUE_APP_CUR_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   disableHostCheck: true,
  //   host: '0.0.0.0',
  //   // host: '127.0.0.1',
  //   // port: 80,
  //   // host: 'sky-admin-local.aupup.com',
  //   // host: 'sky-admin.aupup.com',
  //   port: 8000,
  //   proxy: {
  //     '/v1/api/identity-admin': {
  //       target: `http://operation-dev.aupup.com/`
  //     },
  //     '/v1/': {
  //       target: `${process.env.VUE_APP_ADMIN_BASE_URL}` // 正式环境 由运维通过容器注入完整代理地址
  //     },
  //     '/captcha/': {
  //       target: `${process.env.VUE_APP_ADMIN_BASE_URL}`
  //     }
  //   }
  // },
  css: {
    // 为便于在Vue组件中使用，全局引入variables.scss中定义的变量
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
})

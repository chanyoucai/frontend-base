const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "移动端h5",
    },
  },
  devServer: {
    client: {
      overlay: {
        // 让浏览器 overlay 同时显示警告和错误
        errors: true,
        warnings: false,
      },
    },
    host: "localhost",
    // host: "127.0.0.1",
    // port: 8080, // 端口号
    open: true, //配置后自动启动浏览器
    proxy: {
      //配置多个代理
      "/api": {
        target: "http://10.85.143.18:18084",
        changeOrigin: true, // 允许跨域
        // ws: true, // websocket 支持
        secure: false,
        pathRewrite: {
          "^/api": "/api",
        },
        onProxyReq: function (proxyReq, req, res) {
          // proxy的回调函数，在终端中打印
          console.log("onProxyReq");
          // console.log(proxyReq);
          // console.log(req);
          // console.log(res);
        },
      },
    },
  },
});

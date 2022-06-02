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
    port: 8080, // 端口号
    open: true, //配置后自动启动浏览器
    proxy: {
      //配置多个代理
      "/proxyApi": {
        target: "http://197.0.0.1:8088",
        changeOrigin: true,
        // ws: true, //websocket支持
        // secure: false,
        pathRewrite: {
          "^/proxyApi": "",
        },
        onProxyReq: function (proxyReq, req, res) {
          // proxy的回调函数
          console.log(proxyReq, req, res);
        },
      },
    },
  },
});

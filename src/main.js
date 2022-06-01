import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./utils/http";

// 引入 vant-ui
import "./plugins/vant";

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(router);
Vue.use(Argon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

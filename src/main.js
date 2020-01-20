import Vue from "vue";
import App from "./App";
import store from './store'
import router from "./router/router";
import Argon from "./plugins/argon-kit";

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Argon);

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

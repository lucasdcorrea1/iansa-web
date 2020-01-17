import Vue from "vue";
import App from "./App.vue";
import store from './store'
import router from "./router/router";
import Argon from "./plugins/argon-kit";

import './registerServiceWorker'

Vue.use(compiler) // enable compiler
Vue.use(Argon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";
import store from "./store";

import vuetify from "./plugins/vuetify";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");

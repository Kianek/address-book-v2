import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? `https://localhost:${process.env.PORT}` : "http://localhost:8080";
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

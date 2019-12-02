import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "./modules/user";
import contacts from "./modules/contacts";

export default new Vuex.Store({
  modules: {
    user,
    contacts
  }
});

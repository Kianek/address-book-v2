import { LOGIN, LOGOUT, CHANGE_EMAIL, CHANGE_PASSWORD, DELETE_ACCOUNT } from "./types.js";
import axios from 'axios';

const state = {
  isAuthenticated: false,
  user: {}
};

const mutations = {
  [LOGIN](state, payload) {
    state.isAuthenticated = true;
    state.user = payload.user;
  },
  [LOGOUT](state) {
    state.isAuthenticated = false;
    state.user = {};
  }
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', credentials)
        .then(res => {
          commit(LOGIN, { user: res.data })
          resolve(res.data)
        })
        .catch(err => reject(err))
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/auth/logout')
        .then(() => {
          commit(LOGOUT);
          resolve();
        })
        .catch(err => reject(err));
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

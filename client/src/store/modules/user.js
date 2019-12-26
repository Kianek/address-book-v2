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
  },
  [CHANGE_EMAIL](state, payload) {
    state.user = payload.user;
  },
  [CHANGE_PASSWORD](state, payload) {
    state.user = payload.user;
  },
  [DELETE_ACCOUNT](state) {
    state.isAuthenticated = false;
    state.user = {};
  }
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  getEmail(state) {
    return state.user.email;
  },
  getUserId(state) {
    return state.user.id;
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
  },
  changeEmail({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      axios.put(`/users/${userInfo.id}`, { email: userInfo.email })
        .then(res => {
          commit(CHANGE_EMAIL, { user: res.data });
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  },
  changePassword({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      axios.put(`/users/${userInfo.id}/change-password`, { passwordHash: userInfo.password })
        .then(res => {
          commit(CHANGE_PASSWORD, { user: res.data });
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  },
  deleteAccount({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/users/${userId}`)
        .then(() => {
          commit(DELETE_ACCOUNT);
          resolve();
        })
        .catch(err => reject(err))
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

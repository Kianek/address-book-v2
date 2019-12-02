const state = {
  isAuthenticated: false,
  user: {}
};

const mutations = {
  login(state) {
    state.isAuthenticated = true;
  },
  logout(state) {
    state.isAuthenticated = false;
  }
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  login({ commit }) {
    commit("login");
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

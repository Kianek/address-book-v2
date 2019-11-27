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

const mutations = {
  login() {
    // TODO: hook up axios
  },
  logout() {
    // TODO: hook up axios
  }
};

export default {
  state,
  mutations
};
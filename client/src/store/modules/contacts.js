const state = {
  contacts: [],
  selectedContact: {}
};

const getters = {
  getAllContacts: state => state.contacts,
  getSelectedContact: (state, id) => {
    return state.contacts.find(contact => contact.id === id);
  }
};

const mutations = {
  createContact: (state, payload) => {
    state.contacts = state.contacts.unshift(payload.contact);
  },
  updateContact: (state, payload) => {
    state.contacts.forEach(c => {
      if (c.id === payload.contact.id) {
        c = payload.contact;
      }
    });
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};

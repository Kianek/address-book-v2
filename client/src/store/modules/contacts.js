import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./types.js";

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
  [ADD_CONTACT](state, payload) {
    state.contacts = state.contacts.unshift(payload.contact);
  },
  [UPDATE_CONTACT](state, payload) {
    state.contacts.forEach(c => {
      if (c.id === payload.contact.id) {
        c = payload.contact;
      }
    });
  },
  [DELETE_CONTACT](state, payload) {
    state = state.contacts.filter(c => c.id !== payload.id);
  }
};

const actions = {
  addContact({ commit }, contact) {
    this.axios.post("/contacts", contact)
      .then(res => commit(ADD_CONTACT, { contact: res.data }))
      .catch(err => console.error(err));
  },
  updateContact({ commit }, updatedContact) {
    this.axios.put(`/contacts/${updatedContact.id}`, updatedContact)
      .then(res => commit(UPDATE_CONTACT, { contact: res.data }))
      .catch(err => console.error(err));
  },
  deleteContact({ commit }, id) {
    this.axios.delete(`/contacts/${id}`, id)
      .then(res => commit(DELETE_CONTACT, { id: res.data.id }))
      .catch(err => console.error(err));
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};

import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CURRENT_CONTACT, SET_LOADED_CONTACTS } from "./types.js";
import axios from "axios";

const state = {
  contacts: [],
  selectedContact: {}
};

const getters = {
  getAllContacts(state) {
    return state.contacts;
  },
  getSelectedContact: state => id => {
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
        state.selectedContact = {};
      }
    });
  },
  [SET_CURRENT_CONTACT](state, payload) {
    state.selectedContact = state.contacts.find(c => c.id === payload.id);
  },
  [SET_LOADED_CONTACTS](state, payload) {
    state.contacts = payload.contacts;
  },
  [DELETE_CONTACT](state, payload) {
    state = state.contacts.filter(c => c.id !== payload.id);
  }
};

const actions = {
  addContact({ commit }, contact) {
    axios.post("/contacts", contact)
      .then(res => commit(ADD_CONTACT, { contact: res.data }))
      .catch(err => console.error(err));
  },
  loadContacts({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/contacts")
        .then(res => {
          commit(SET_LOADED_CONTACTS, { contacts: res.data });
          resolve(res.data);
        })
        .catch(err => reject(err));

    })
  },
  updateContact({ commit }, updatedContact) {
    axios.put(`/contacts/${updatedContact.id}`, updatedContact)
      .then(res => commit(UPDATE_CONTACT, { contact: res.data }))
      .catch(err => console.error(err));
  },
  selectContact({ commit }, id) {
    commit(SET_CURRENT_CONTACT, id);
  },
  deleteContact({ commit }, id) {
    axios.delete(`/contacts/${id}`, id)
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

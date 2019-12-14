<template>
  <Page>
    <h1>Contacts</h1>
    <router-link
      to="/add"
      class="add"
    >
      <i class="fas fa-user-plus"></i> Add
    </router-link>
    <ul class="contacts-list">
      <div v-if="contacts.length <= 0">
        <p>No contacts yet. Try adding some!</p>
      </div>
      <div v-else>
        <li
          v-for="c in getAllContacts"
          :key="c.id"
        >
          <Contact :contact="c" />
        </li>
      </div>
    </ul>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Page from "@/components/layout/Page";
import Contact from "@/components/Contact";

export default {
  name: "dashboard",
  data() {
    return {
      contacts: []
    };
  },
  computed: {
    ...mapGetters(["getAllContacts"])
  },
  methods: {
    ...mapActions(["loadContacts"])
  },
  components: {
    Page,
    Contact
  },
  async mounted() {
    try {
      await this.loadContacts();
      this.contacts = this.getAllContacts;
      await this.$nextTick();
    } catch (err) {
      console.error(err);
    }
    this.loadContacts().catch(err => console.error(err));
    this.contacts = this.getAllContacts;
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";

h1 {
  margin-bottom: 2rem;
}
.add {
  background-color: $white;
  border: none;
  border-radius: 5px;
  border: solid 1px $light-gray;
  color: $black;
  padding: 0.5em;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    border: 1px solid $green;
    color: $green;
  }
}

.contacts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25rem;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 0;
  list-style-type: none;
  width: 100%;

  li {
    min-width: 200px;
    max-width: 300px;
  }
}
</style>
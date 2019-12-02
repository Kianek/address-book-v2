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
      <li
        v-for="c in contacts"
        :key="c.id"
      >
        <Contact :contact="c" />
      </li>
    </ul>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page";
import Contact from "@/components/Contact";

export default {
  name: "dashboard",
  data() {
    return {
      contacts: [
        {
          id: 1,
          firstName: "Bob",
          middleName: "B.",
          lastName: "Loblaw",
          phone: "444-444-4444",
          email: "bob@loblawlaw.com",
          line1: "123 Street St",
          line2: null,
          city: "Soylandia",
          stateOrProvince: "Pooregon",
          postalCode: "97205"
        }
      ]
    };
  },
  components: {
    Page,
    Contact
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 2rem;
}
.add {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  border: solid 1px lightgray;
  // color: #00d300;
  color: #000;
  padding: 0.5em;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    border: 1px solid #00d300;
    color: #00d300;
  }
}

.contacts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 0;
  list-style-type: none;
  width: 100%;

  li {
    width: 50%;
    min-width: 200px;
    max-width: 300px;
  }
}
</style>
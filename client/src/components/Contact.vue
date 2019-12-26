<template>
  <div class="contact">
    <div class="header">
      <div class="name">
        <h3>{{ contact.firstName }} {{ contact.middleName ? contact.middleName : null }} {{ contact.lastName }}</h3>
      </div>
      <div class="contact-controls">
        <router-link
          @click.native="select"
          :to="`/${this.contact.id}/edit`"
          class="edit"
        >
          <i class="fas fa-edit"></i>
        </router-link>
        <button
          @click="del"
          class="delete"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="contact-info">
      <p class="phone">{{ contact.phone }}</p>
      <p class="email">{{ contact.email }}</p>
      <p class="line1">{{ contact.line1 }}</p>
      <p class="line2">{{ contact.line2 }}</p>
      <p class="city">{{ contact.city }}</p>
      <p class="state">{{ contact.stateOrProvince }}</p>
      <p class="zip">{{ contact.postalCode }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    async del() {
      await this.deleteContact(this.contact.id);
    },
    async select() {
      await this.selectContact(this.contact.id);
    },
    ...mapActions(["deleteContact", "selectContact"])
  },
  props: {
    contact: {
      id: Number,
      firstName: String,
      middleName: String,
      lastName: String,
      email: String,
      phone: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      zip: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/_globals.scss";

.contact {
  border: solid 1px lightgray;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5em;
  width: 100%;

  .header {
    @extend .row;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px lightgray;
    margin-bottom: 0.75em;

    .name {
      text-align: center;
    }

    .contact-controls {
      @extend .row;
      flex-wrap: wrap;
      button,
      a {
        background-color: white;
        border: none;
        font-size: 1.5em;
        padding: 0.25em;
        transition: 0.2s;
      }

      button:hover {
        cursor: pointer;
      }

      .edit {
        color: #2dabff;

        &:hover {
          color: #2785c4;
        }
      }

      .delete {
        color: #fd3030;

        &:hover {
          color: #a70000;
        }
      }
    }
  }

  .contact-info {
    text-align: center;
  }
}
</style>
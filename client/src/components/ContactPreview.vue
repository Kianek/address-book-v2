<template>
  <div class="contact-preview">
    <div class="header">
      <div class="name">
        <h3>{{ contact.firstName }} {{ contact.middleName ? contact.middleName : null }} {{ contact.lastName }}</h3>
      </div>
      <div class="contact-controls">
        <router-link to="#" class="edit">
          <i class="fas fa-edit"></i>
        </router-link>
        <button class="delete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="contact-info">
      <p class="phone">{{ contact.phone }}</p>
      <p class="email">{{ contact.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteContact: function(e) {
      e.preventDefault();
    }
  },
  props: {
    contact: {
      firstName: String,
      middleName: String,
      lastName: String,
      email: String,
      phone: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/globals.scss";

.contact-preview {
  border: solid 1px lightgray;
  border-radius: 5px;
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
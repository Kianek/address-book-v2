<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Settings</h1>
    <div class="settings-panel">
      <router-link to="/change-email">
        Change Email
      </router-link>
      <router-link to="/change-password">
        Change Password
      </router-link>
      <button @click="showModal = true">
        <h2>Delete Account</h2>
      </button>
      <Modal
        v-model="showModal"
        title="! DANGER !"
        :onConfirm="deleteAccount"
      >
        This cannot be undone!
      </Modal>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import BackButton from "@/components/shared/BackButton.vue";
import Modal from "@/components/shared/Modal.vue";

export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    deleteAccount() {
      console.log("Deleting account");
      this.showModal = false;
    }
  },
  components: {
    Page,
    BackButton,
    Modal
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";
@import "@/_mixins.scss";
@import "@/_globals.scss";

.settings-panel {
  @extend %panel;
  text-align: center;

  a {
    border-bottom: solid 1px $light-gray;
    color: $gray;
    font-size: 1.2rem;
    padding: 0.5rem;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      box-shadow: 0 5px 4px rgba($black, 0.2);
      color: $black;
    }
  }

  button {
    background-color: lighten($red, 40%);
    border: none;
    border-top: solid 1px lighten($red, 30%);
    border-radius: 0 0 5px 5px;
    color: $red;
    margin-top: 4rem;
    padding: 1rem;
    transition: 0.2s;

    &:hover {
      background-color: rgba($red, 0.4);
      color: darken($red, 0.8);
      cursor: pointer;
    }
  }
}
</style>
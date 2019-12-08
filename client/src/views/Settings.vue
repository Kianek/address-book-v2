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
      <button>
        <h2>Delete Account</h2>
      </button>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import BackButton from "@/components/shared/BackButton.vue";

export default {
  components: {
    Page,
    BackButton
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
      box-shadow: -4px -4px 3px rgba($red, 0.3) inset,
        4px 4px 5px rgba($red, 0.2) inset;
      cursor: pointer;
    }
  }
}
</style>
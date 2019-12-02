<template>
  <Page>
    <FormBackButton url="/dashboard" />
    <h1>Settings</h1>
  </Page>
</template>

<script>
import Page from "../components/layout/Page.vue";
import FormBackButton from "../components/shared/FormBackButton.vue";

export default {
  components: {
    Page,
    FormBackButton
  }
};
</script>

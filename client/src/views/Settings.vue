<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Settings</h1>
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

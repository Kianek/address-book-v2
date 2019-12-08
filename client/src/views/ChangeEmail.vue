<template>
  <Page>
    <BackButton url="/settings" />
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import BackButton from "@/components/shared/BackButton.vue";

export default {
  components: {
    BackButton,
    Page
  }
};
</script>

<style>
</style>
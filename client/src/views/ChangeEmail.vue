<template>
  <Page>
    <BackButton url="/settings" />
    <h1>Change Email</h1>
    <Form :submit="handleSubmit">
      <Input
        :min="5"
        email
        required
        placeholder="New Email"
        v-model="email"
      />
      <SubmitButton value="Update" />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import BackButton from "@/components/shared/BackButton.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";

export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("submitting");
      this.$router.push("/settings");
    }
  },
  components: {
    BackButton,
    Page,
    Form,
    Input,
    SubmitButton
  }
};
</script>

<style>
</style>
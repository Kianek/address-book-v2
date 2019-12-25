<template>
  <Page>
    <BackButton url="/settings" />
    <h1>Change Email</h1>
    <Form :submit="handleSubmit">
      <Input
        :min="5"
        email
        placeholder="New Email"
        v-model="email"
      />
      <SubmitButton value="Update" />
      <FlashMessage
        :status="status"
        :message="message"
      />
    </Form>
  </Page>
</template>

<script>
import BackButton from "@/components/shared/BackButton.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import Page from "@/components/layout/Page.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import FlashMessage from "@/components/shared/FlashMessage.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      status: null,
      message: ""
    };
  },
  computed: {
    ...mapGetters(["getUserId"])
  },
  methods: {
    handleSubmit() {
      this.changeEmail({
        email: this.email,
        id: this.getUserId
      })
        .then(user => {
          this.status = true;
          this.message = `Email successfully changed to ${user.email}`;
          console.log(user);
        })
        .catch(() => {
          this.status = false;
          this.message = "Unable to change email...";
        });
    },
    ...mapActions(["changeEmail"])
  },
  components: {
    BackButton,
    Form,
    Input,
    Page,
    SubmitButton,
    FlashMessage
  }
};
</script>

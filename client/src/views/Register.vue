<template>
  <Page>
    <BackButton url="/" />
    <h1>Register</h1>
    <Form :submit="createAccount">
      <Input
        v-model="firstName"
        placeholder="First Name"
      />
      <Input
        v-model="lastName"
        placeholder="Last Name"
      />
      <Input
        v-model="email"
        placeholder="Email"
      />
      <Input
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <Input
        type="password"
        v-model="confirmPassword"
        placeholder="Confirm Password"
      />
      <!-- <Input
        type="submit"
        value="Create Account"
      /> -->
      <SubmitButton value="Create Account" />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import BackButton from "@/components/shared/BackButton.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    createAccount: function(e) {
      e.preventDefault();
      // Once data have been sent to the server, reset the fields
      console.log("creating account");
      this.resetFields();
    },
    resetFields: function() {
      const keys = Object.keys(this.$data);
      keys.forEach(key => (this.$data[key] = ""));
    }
  },
  components: {
    Page,
    Form,
    Input,
    BackButton,
    SubmitButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";
@import "@/_mixins.scss";

input[type="submit"] :hover {
  @include set-box-shadow($gray);
}
</style>
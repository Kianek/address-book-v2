<template>
  <Page>
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
      <Input
        type="submit"
        value="Create Account"
      />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page";
import Form from "@/components/shared/Form";
import Input from "@/components/shared/Input";

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
    Input
  }
};
</script>

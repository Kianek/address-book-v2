<template>
  <Page>
    <BackButton url="/" />
    <h1>Register</h1>
    <Form :submit="createAccount">
      <Input
        v-model="firstName"
        :min="2"
        placeholder="First Name"
      />
      <Input
        :min="2"
        v-model="lastName"
        placeholder="Last Name"
      />
      <Input
        :min="5"
        v-model="email"
        placeholder="Email"
      />
      <p
        v-show="error.status"
        class="error"
      >{{ error.message }}</p>
      <Input
        :min="6"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <Input
        :min="6"
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
      <SubmitButton
        :disabled="disableBtn"
        value="Create Account"
      />
      <FlashMessage
        :status="registration.status"
        :message="registration.message"
      />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import BackButton from "@/components/shared/BackButton.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import FlashMessage from "@/components/shared/FlashMessage.vue";

import { isEmpty } from "validator";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        status: false,
        message: "Passwords must match"
      },
      registration: {
        message: "",
        status: undefined
      },
      disableBtn: false
    };
  },
  methods: {
    createAccount: function() {
      if (this.password !== this.confirmPassword) {
        this.error.status = true;
        return;
      }

      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };

      // Make sure no fields are empty
      const anyFieldsAreEmpty = Object.values(user).some(val => isEmpty(val));
      if (anyFieldsAreEmpty) {
        this.registration.status = false;
        this.registration.message = "Please fill in all fields";
        return;
      }

      this.axios
        .post("/users", user)
        .then(res => {
          if (res.status === 201) {
            this.disableBtn = true;
            this.registration.status = true;
            this.registration.message = "Success! Please sign in.";
          } else {
            this.registration.status = false;
            this.registration.message = "Error creating account...";
          }
        })
        .catch(() => {
          this.registration.status = false;
          this.registration.message = "Error creating account...";
          return;
        });
    }
  },
  watch: {
    confirmPassword: function(val) {
      if (val !== this.password) {
        this.error.status = true;
      } else {
        this.error.status = false;
      }
    }
  },
  components: {
    Page,
    Form,
    Input,
    BackButton,
    SubmitButton,
    FlashMessage
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";
@import "@/_mixins.scss";

.error {
  color: $red;
  font-size: 1em;
}
</style>
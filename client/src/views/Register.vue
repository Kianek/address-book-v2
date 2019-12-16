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
      <p
        v-if="registration.status !== undefined"
        :class="registration.status ? 'success' : 'failure'"
      >{{ registration.message }}</p>
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import BackButton from "@/components/shared/BackButton.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";

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
      console.log("creating account");
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
      if (anyFieldsAreEmpty) return;

      this.axios
        .post("/users", user)
        .then(res => {
          if (res.status === 201) {
            this.disableBtn = true;
            this.registration.status = true;
            this.registration.message = "Success! Please sign in.";

            console.log(res);
          } else {
            this.registration.status = false;
            this.registration.message = "Error creating account...";
          }
        })
        .catch(err => {
          console.error(err);
          this.registration.status = false;
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
    SubmitButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";
@import "@/_mixins.scss";

.failure {
  color: $red;
  font-size: 1rem;
}

.success {
  color: $green;
  font-size: 1rem;
}

.error {
  color: $red;
  font-size: 1em;
}
</style>
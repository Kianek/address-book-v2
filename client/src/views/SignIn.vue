<template>
  <Page>
    <h1>Sign In</h1>
    <Form :submit="submit">
      <Input
        :min="6"
        email
        v-model="email"
        placeholder="Email"
      />
      <Input
        :min="6"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <SubmitButton
        value="Sign In"
        :loading="isLoading"
      />
      <FlashMessage
        v-if="auth.status === false"
        failure
        :message="auth.message"
      />
    </Form>
    <router-link
      class="link"
      to="/register"
    >No account? Register here.</router-link>
  </Page>
</template>

<script>
import { mapActions } from "vuex";
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import FlashMessage from "@/components/shared/FlashMessage.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      auth: {
        status: undefined,
        message: "Email or password invalid"
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit: function() {
      // If the input fields are empty, do nothing.
      if (this.email.length <= 0 || this.password.length <= 0) {
        return;
      }

      this.isLoading = !this.isLoading;
      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch(() => {
          // There was a problem authenticating, so display the flash message.
          this.auth.status = this.isLoading = false;
        });
    }
  },
  components: {
    Page,
    Form,
    Input,
    SubmitButton,
    FlashMessage
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

#sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}

.link {
  color: lightskyblue;
  margin-bottom: 1rem;
  text-decoration: underline;

  &:hover {
    color: #3d6497;
  }
}

.cursor-disabled {
  cursor: not-allowed;
}
</style>

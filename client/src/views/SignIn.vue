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

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      auth: {
        status: undefined,
        message: ""
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit: function(e) {
      e.preventDefault();
      this.isLoading = !this.isLoading;

      const emailEmpty = this.email.length <= 0;
      const passwordEmpty = this.password.length <= 0;
      if (emailEmpty || passwordEmpty) return;

      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.$router.replace("/dashboard").catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
  },
  components: {
    Page,
    Form,
    Input,
    SubmitButton
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

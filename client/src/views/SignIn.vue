<template>
  <Page>
    <h1>Sign In</h1>
    <Form :submit="submit">
      <Input
        v-model="email"
        placeholder="Email"
      />
      <Input
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <SubmitButton
        v-if="!isLoading"
        value="Sign In"
      />
      <SubmitButton
        v-else
        value="Loading..."
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
      isLoading: false
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit: function(e) {
      e.preventDefault();
      this.isLoading = !this.isLoading;
      this.email = "";
      this.password = "";

      console.log("Signing in!");
      this.login();
      setTimeout(() => this.$router.push("/dashboard"), 3000);
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

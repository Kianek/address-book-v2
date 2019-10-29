<template>
  <Page>
    <h1>Sign In</h1>
    <Form :submit="submit">
      <Input v-model="email" placeholder="Email" />
      <Input v-model="password" type="password" placeholder="Password" />
      <Input type="submit" value="Sign In" />
    </Form>
    <router-link class="link" to="/register">No account? Register here.</router-link>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import Spinner from "@/components/shared/Spinner.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      this.isLoading = !this.isLoading;
      this.email = "";
      this.password = "";

      console.log("Signing in!");
      setTimeout(() => this.$router.push("/dashboard"), 3000);
    }
  },
  components: {
    Page,
    Form,
    Input,
    Spinner
  }
};
</script>

<style scoped lang="scss">
#sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  h1 {
    text-align: center;
  }
}

.link {
  color: lightskyblue;
  margin-bottom: 1rem;
  text-decoration: underline;

  &:hover {
    color: #3d6497;
  }
}
</style>

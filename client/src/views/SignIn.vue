<template>
  <div id="sign-in">
    <h1>Sign In</h1>
    <Form :submit="submit">
      <Input v-model="email" placeholder="Email" />
      <Input v-model="password" type="password" placeholder="Password" />
      <Input type="submit" value="Sign In" />
    </Form>
    <router-link class="link" to="/register">No account? Register here.</router-link>
  </div>
</template>

<script>
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      this.email = "";
      this.password = "";
      console.log("Signing in!");
    }
  },
  components: {
    Form,
    Input
  }
};
</script>

<style scoped lang="scss">
#sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

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
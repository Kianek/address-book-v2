<template>
  <Page>
    <BackButton url="/settings" />
    <h1>Change Password</h1>
    <Form :submit="handleSubmit">
      <p
        v-show="error.status"
        class="error"
      >{{ error.message }}</p>
      <Input
        :min="6"
        required
        type="password"
        placeholder="New Password"
        v-model="password"
      />
      <Input
        :min="6"
        required
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
      <SubmitButton value="Update" />
    </Form>
  </Page>
</template>

<script>
import BackButton from "@/components/shared/BackButton.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import Page from "@/components/layout/Page.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";

export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      error: {
        status: false,
        message: "Passwords must match"
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log("submitting");

      if (this.password !== this.confirmPassword) {
        this.error.status = true;
        return;
      }
      this.$router.push("/settings");
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
    BackButton,
    Form,
    Input,
    Page,
    SubmitButton
  }
};
</script>

<style scoped lang="scss">
@import "@/_colors.scss";

.error {
  color: $red;
  font-size: 1em;
}
</style>
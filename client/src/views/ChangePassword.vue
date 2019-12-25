<template>
  <Page>
    <BackButton url="/settings" />
    <h1>Change Password</h1>
    <Form :submit="handleSubmit">
      <p
        v-show="!passwordsMatch"
        class="error"
      >Passwords must match</p>
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
      <FlashMessage
        v-show="flash.show"
        :status="flash.status"
        :message="flash.message"
      />
    </Form>
  </Page>
</template>

<script>
import BackButton from "@/components/shared/BackButton.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import Page from "@/components/layout/Page.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import FlashMessage from "@/components/shared/FlashMessage.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      passwordsMatch: true,
      pw: {
        error: false
      },
      flash: {
        status: null,
        show: false,
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        this.flash.show = true;
        this.flash.status = false;
        this.flash.message = "Passwords must match";
        return;
      } else {
        this.flash.show = false;
      }

      console.log("submitting");
      this.changePassword({ password: this.password, id: this.getUserId })
        .then(() => {
          this.flash.status = true;
          this.flash.show = true;
          this.flash.message = "Password successfully changed";
        })
        .catch(() => {
          this.flash.status = false;
          this.flash.show = true;
          this.flash.message = "Unable to change password";
        });
    },
    ...mapActions(["changePassword"])
  },
  computed: {
    ...mapGetters(["getUserId"])
  },
  watch: {
    confirmPassword: function(val) {
      if (val !== this.password) {
        this.passwordsMatch = false;
      } else {
        this.passwordsMatch = true;
      }
    }
  },
  components: {
    BackButton,
    Form,
    Input,
    Page,
    SubmitButton,
    FlashMessage
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
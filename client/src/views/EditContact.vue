<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Add Contact</h1>
    <Form :submit="handleSubmit">
      <Input
        required
        v-model="firstName"
        placeholder="First Name"
      />
      <Input
        v-model="middleName"
        placeholder="Middle Name"
      />
      <Input
        required
        v-model="lastName"
        placeholder="Last Name"
      />
      <Input
        v-model="phone"
        placeholder="Phone"
      />
      <Input
        v-model="email"
        placeholder="Email"
      />
      <Input
        v-model="line1"
        placeholder="Line 1"
      />
      <Input
        v-model="line2"
        placeholder="Line 2"
      />
      <Input
        v-model="city"
        placeholder="City"
      />
      <Input
        v-model="stateOrProvince"
        placeholder="State"
      />
      <Input
        v-model="postalCode"
        placeholder="Zip"
      />
      <SubmitButton value="Update Contact" />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import BackButton from "@/components/shared/BackButton.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";

export default {
  data() {
    return {
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      email: "",
      line1: "",
      line2: "",
      city: "",
      stateOrProvince: "",
      postalCode: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("updating contact");
      setTimeout(() => this.$router.push("/dashboard"), 3000);
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

<style scoped lang="scss">
@import "@/_colors.scss";

.back-to-dashboard {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.btn {
  background-color: $blue;
  border-radius: 5px;
  color: $white;
  padding: 0.5em 0.7em;
  text-decoration: none;
}
</style>

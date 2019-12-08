<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Add Contact</h1>
    <Form>
      <Input
        required
        min="2"
        v-model="firstName"
        placeholder="First Name"
      />
      <Input
        v-model="middleName"
        placeholder="Middle Name"
      />
      <Input
        required
        min="2"
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
        min="6"
        v-model="line1"
        placeholder="Line 1"
      />
      <Input
        min="6"
        v-model="line2"
        placeholder="Line 2"
      />
      <Input
        min="3"
        v-model="city"
        placeholder="City"
      />
      <Input
        min="3"
        v-model="stateOrProvince"
        placeholder="State"
      />
      <Input
        min="3"
        v-model="postalCode"
        placeholder="Zip"
      />
      <SubmitButton value="Create" />
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
      postalCode: "",
      errors: []
    };
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

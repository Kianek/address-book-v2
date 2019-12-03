<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Add Contact</h1>
    <Form>
      <Input
        v-model="firstName"
        placeholder="First Name"
      />
      <Input
        v-model="middleName"
        placeholder="Middle Name"
      />
      <Input
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
      postalCode: ""
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

<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Add Contact</h1>
    <Form :submit="handleSubmit">
      <Input
        label="First Name"
        required
        :min="2"
        v-model="firstName"
        placeholder="First Name"
      />
      <Input
        label="Middle Name"
        v-model="middleName"
        placeholder="Middle Name"
      />
      <Input
        label="Last Name"
        required
        :min="2"
        v-model="lastName"
        placeholder="Last Name"
      />
      <Input
        label="Phone"
        v-model="phone"
        placeholder="Phone"
      />
      <Input
        label="Email"
        v-model="email"
        placeholder="Email"
      />
      <Input
        label="Line 1"
        :min="6"
        v-model="line1"
        placeholder="Line 1"
      />
      <Input
        label="Line 2"
        :min="6"
        v-model="line2"
        placeholder="Line 2"
      />
      <Input
        label="City"
        :min="3"
        v-model="city"
        placeholder="City"
      />
      <Input
        label="State"
        :min="3"
        v-model="stateOrProvince"
        placeholder="State"
      />
      <Input
        label="Zip"
        :min="3"
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

import { isEmpty } from "validator";
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["getUserId"])
  },
  methods: {
    ...mapActions(["addContact"]),
    handleSubmit() {
      if (isEmpty(this.firstName) || isEmpty(this.lastName)) {
        // TODO: show flash message on error
        return;
      }
      const newContact = {
        firstName: this.firstName,
        middleName: this.middleName || null,
        lastName: this.lastName,
        phone: this.phone || null,
        email: this.email || null,
        line1: this.line1 || null,
        line2: this.line2 || null,
        city: this.city || null,
        stateOrProvince: this.stateOrProvince || null,
        postalCode: this.postalCode || null,
        userId: this.getUserId
      };

      this.addContact(newContact)
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
    BackButton,
    SubmitButton
  }
};
</script>

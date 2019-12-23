<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Edit Contact</h1>

    <Form :submit="handleSubmit">
      <Input
        required
        label="First Name"
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
        v-model="line1"
        placeholder="Line 1"
      />
      <Input
        label="Line 2"
        v-model="line2"
        placeholder="Line 2"
      />
      <Input
        label="City"
        v-model="city"
        placeholder="City"
      />
      <Input
        label="State"
        v-model="stateOrProvince"
        placeholder="State"
      />
      <Input
        label="Zip"
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

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: 0,
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
    async handleSubmit() {
      this.updateContact(this.$data)
        .then(() =>
          this.$router.replace("/dashboard").catch(err => console.error(err))
        )
        .catch(err => console.error(err));
    },
    loadForm() {
      const currentContact = this.getSelectedContact;

      // Create an array of the data object's keys in order to access
      // the corresponding value in the selected contact.
      const keys = Object.keys(this.$data);

      // Iterate through the keys, setting the data object's values to
      // those of the current contact.
      keys.forEach(key => (this.$data[key] = currentContact[key]));

      this.$nextTick().catch(err => console.error(err));
    },
    ...mapActions(["clearSelectedContact", "selectContact", "updateContact"])
  },
  computed: {
    ...mapGetters(["getSelectedContact"])
  },
  mounted() {
    this.selectContact(parseInt(this.$route.params.id))
      .then(() => {
        this.loadForm();
      })
      .catch(err => console.error(err));
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


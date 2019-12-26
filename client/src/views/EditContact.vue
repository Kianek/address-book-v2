<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Edit Contact</h1>

    <Form :submit="handleSubmit">
      <Input
        required
        label="First Name"
        v-model="contact.firstName"
        placeholder="First Name"
      />
      <Input
        label="Middle Name"
        v-model="contact.middleName"
        placeholder="Middle Name"
      />
      <Input
        label="Last Name"
        required
        v-model="contact.lastName"
        placeholder="Last Name"
      />
      <Input
        label="Phone"
        v-model="contact.phone"
        placeholder="Phone"
      />
      <Input
        label="Email"
        v-model="contact.email"
        placeholder="Email"
      />
      <Input
        label="Line 1"
        v-model="contact.line1"
        placeholder="Line 1"
      />
      <Input
        label="Line 2"
        v-model="contact.line2"
        placeholder="Line 2"
      />
      <Input
        label="City"
        v-model="contact.city"
        placeholder="City"
      />
      <Input
        label="State"
        v-model="contact.stateOrProvince"
        placeholder="State"
      />
      <Input
        label="Zip"
        v-model="contact.postalCode"
        placeholder="Zip"
      />
      <SubmitButton value="Update Contact" />
      <FlashMessage
        v-if="error"
        failure
        message="Error updating contact"
      />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";
import BackButton from "@/components/shared/BackButton.vue";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import FlashMessage from "@/components/shared/FlashMessage.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      contact: {
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
      },
      error: null
    };
  },
  methods: {
    async handleSubmit() {
      this.updateContact(this.contact)
        .then(() => this.$router.replace("/dashboard"))
        .catch(() => {
          this.error = true;
        });
    },
    loadForm() {
      const currentContact = this.getSelectedContact;

      // Create an array of the data object's keys in order to access
      // the corresponding value in the selected contact.
      const keys = Object.keys(this.contact);

      // Iterate through the keys, setting the data object's values to
      // those of the current contact.
      keys.forEach(key => (this.contact[key] = currentContact[key]));

      this.$nextTick();
    },
    ...mapActions(["clearSelectedContact", "selectContact", "updateContact"])
  },
  computed: {
    ...mapGetters(["getSelectedContact"])
  },
  mounted() {
    this.selectContact(parseInt(this.$route.params.id)).then(() => {
      this.loadForm();
    });
  },
  components: {
    Page,
    Form,
    Input,
    BackButton,
    SubmitButton,
    FlashMessage
  }
};
</script>


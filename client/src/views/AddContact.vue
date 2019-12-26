<template>
  <Page>
    <BackButton url="/dashboard" />
    <h1>Add Contact</h1>
    <Form :submit="handleSubmit">
      <Input
        label="First Name"
        :min="2"
        v-model="contact.firstName"
        placeholder="First Name"
      />
      <Input
        label="Middle Name (Optional)"
        v-model="contact.middleName"
        placeholder="Middle Name"
      />
      <Input
        label="Last Name"
        :min="2"
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
        email
        placeholder="Email"
      />
      <Input
        label="Line 1"
        :min="3"
        v-model="contact.line1"
        placeholder="Line 1"
      />
      <Input
        label="Line 2"
        v-model="contact.line2"
        placeholder="Line 2 (Optional)"
      />
      <Input
        label="City"
        :min="3"
        v-model="contact.city"
        placeholder="City"
      />
      <Input
        label="State"
        :min="3"
        v-model="contact.stateOrProvince"
        placeholder="State"
      />
      <Input
        label="Zip"
        :min="3"
        v-model="contact.postalCode"
        placeholder="Zip"
      />
      <SubmitButton
        :loading="contact.loading"
        value="Create"
      />
      <FlashMessage
        v-if="message.length > 0"
        failure
        :message="message"
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

import { isEmpty } from "validator";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      contact: {
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
      loading: false,
      message: ""
    };
  },
  computed: {
    ...mapGetters(["getUserId"])
  },
  methods: {
    ...mapActions(["addContact"]),
    handleSubmit() {
      // The values to filter out when validating input before submission.
      const optionalValues = ["middleName", "line2"];

      // The values required for submission of a valid contact.
      const requiredValues = Object.keys(this.contact)
        // If a given key does NOT equal any of the optional values,
        // add it to the required values.
        .filter(key => !optionalValues.some(optKey => key === optKey));

      if (requiredValues.some(key => isEmpty(this.contact[key]))) {
        this.message = "Please fill in the required fields";
        return;
      }

      this.loading = true;

      this.contact.userId = this.getUserId;
      this.addContact(this.contact)
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch(() => {
          this.loading = false;
          this.message = "Unable to add contact";
        });
    }
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

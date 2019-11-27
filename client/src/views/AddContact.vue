<template>
  <Page>
    <div class="back-to-dashboard">
      <router-link class="btn" to="/dashboard">
        <i class="fas fa-arrow-left" /> Back
      </router-link>
    </div>
    <h1>Add Contact</h1>
    <Form>
      <Input v-model="firstName" placeholder="First Name" />
      <Input v-model="middleName" placeholder="Middle Name" />
      <Input v-model="lastName" placeholder="Last Name" />
      <Input v-model="phone" placeholder="Phone" />
      <Input v-model="email" placeholder="Email" />
      <Input v-model="line1" placeholder="Line 1" />
      <Input v-model="line2" placeholder="Line 2" />
      <Input v-model="city" placeholder="City" />
      <Input v-model="stateOrProvince" placeholder="State" />
      <Input v-model="postalCode" placeholder="Zip" />
      <Input type="submit" value="Create" />
    </Form>
  </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Form from "@/components/shared/Form.vue";
import Input from "@/components/shared/Input.vue";

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
    Input
  }
};
</script>

<style scoped lang="scss">
.back-to-dashboard {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.btn {
  // TODO: Use a more attractive bg color
  background-color: #0f6fff;
  border-radius: 5px;
  color: white;
  padding: 0.5em 0.7em;
  text-decoration: none;
}
</style>

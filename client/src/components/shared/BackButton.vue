<template>
  <div class="back-to-dashboard">
    <router-link
      class="btn"
      :to="url"
    >
      <i class="fas fa-arrow-left" /> Back
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  }
};
</script>

<style scoped lang="scss">
@import "@/_colors.scss";
@import "@/_mixins.scss";

.back-to-dashboard {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.btn {
  background-color: $white;
  border: solid 1px $blue;
  border-radius: 5px;
  color: $blue;
  padding: 0.5em 0.7em;
  text-decoration: none;

  &:hover {
    border: solid 1px $blue;
    @include set-box-shadow($blue);
    transition: 0.2s;
  }
}
</style>
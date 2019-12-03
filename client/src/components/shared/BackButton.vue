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

<style lang="scss">
.back-to-dashboard {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.btn {
  background-color: #fff;
  border: solid 1px #0f6fff;
  border-radius: 5px;
  color: #0f6fff;
  padding: 0.5em 0.7em;
  text-decoration: none;

  &:hover {
    border: solid 1px #0f6fff;
    box-shadow: -1px -1px 5px rgba(15, 111, 255, 0.4),
      2px 2px 5px rgba(15, 111, 255, 0.4);
    transition: 0.2s;
  }
}
</style>
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

<style>
.back-to-dashboard {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.btn {
  background-color: #0f6fff;
  border-radius: 5px;
  color: white;
  padding: 0.5em 0.7em;
  text-decoration: none;
}
</style>
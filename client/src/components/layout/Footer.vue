<template>
  <footer>&copy; {{ date }} Keanu Allridge</footer>
</template>

<script>
export default {
  computed: {
    date: function() {
      return new Date().getUTCFullYear();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/_colors.scss";

footer {
  background-color: $coral;
  color: $white;
  padding: 1rem;
  text-align: center;
  width: 100%;
}
</style>
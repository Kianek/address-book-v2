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

<style lang="scss">
footer {
  position: fixed;
  bottom: 0;
  background-color: lightcoral;
  color: white;
  padding: 1rem;
  text-align: center;
  width: 100%;
}
</style>
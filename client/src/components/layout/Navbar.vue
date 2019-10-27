<template>
  <nav>
    <router-link class="branding" to="/">Address Book</router-link>
    <router-link class="link" to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
  background-color: lightcoral;
  display: flex;
  align-items: center;
  padding: 0 10%;
}

.branding {
  color: white;
  font-size: 1.2rem;
  margin-right: auto;
  text-decoration: none;
}

.link {
  color: white;
  text-decoration: none;

  &:hover {
    color: gray;
  }
}
</style>
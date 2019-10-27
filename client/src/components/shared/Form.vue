<template>
  <form @submit.prevent="submit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    submit: Function
  }
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 2rem;
  width: 60%;
}
</style>
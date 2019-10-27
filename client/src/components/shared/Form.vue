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
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
}

@media screen and (min-width: 600px) {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem 0;
    min-width: 200px;
    width: 40%;
  }
}
</style>
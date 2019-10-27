<template>
  <input type="submit" :value="value" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "Submit"
    }
  }
};
</script>

<style scoped lang="scss">
input {
  border: none;
  font-size: 1.2em;

  &:hover {
    cursor: pointer;
  }
}
</style>
<template>
  <input
    type="submit"
    :value="value"
  />
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

<style lang="scss" scoped>
@import "@/_colors.scss";
@import "@/_mixins.scss";

input {
  border: solid 1px $light-gray;
  border-radius: 5px;
  font-size: 1em;
  margin: 0 auto 1em;
  padding: 0.5em;
  min-width: 200px;
  width: 80%;

  &:hover {
    @include set-box-shadow($gray);

    cursor: pointer;
    transition: 0.2s;
  }
}
</style>
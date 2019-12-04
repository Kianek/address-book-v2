<template>
  <input
    :type="type"
    :value="value"
    :class="classes ? classes : ''"
    :placeholder="required ? `${placeholder}*` : placeholder"
    @change="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    classes: String,
    placeholder: String,
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    value: String
  }
};
</script>

<style scoped lang="scss">
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

  &:focus {
    @include set-focus($blue);
  }

  &.error {
    @include set_focus($red);
  }
}
</style>
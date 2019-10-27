<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
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
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style scoped lang="scss">
input {
  border: solid 1px lightgray;
  border-radius: 5px;
  font-size: 1em;
  margin: 0 auto 1em;
  padding: 0.5em;
  min-width: 200px;
  width: 80%;

  &[type="submit"] {
    cursor: pointer;
    transition: 0.2s;
  }

  &[type="submit"]:hover {
    border-color: gray;
    background-color: gray;
    color: white;
  }
}
</style>
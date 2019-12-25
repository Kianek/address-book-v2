<template>
  <div
    v-if="visible"
    id="modal"
  >
    <div class="bg">
      <div class="window">
        <h2>{{ title }}</h2>
        <p class="message">
          <slot></slot>
        </p>

        <div class="btn-bar">
          <button
            id="confirm"
            @click="onConfirm"
          >I'm Sure</button>
          <button
            id="cancel"
            @click="$emit('click', false)"
          >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "visible",
    event: "click"
  },
  props: {
    title: String,
    visible: Boolean,
    onConfirm: Function
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";
@import "@/_mixins.scss";

#modal {
  .bg {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;

    .window {
      @include set-box-shadow($black);

      background-color: $white;
      border-radius: 5px;
      margin: auto;
      min-width: 50%;
      max-width: 300px;

      h2 {
        border-bottom: solid 1px $light-gray;
      }

      .message {
        margin: 1em auto;
      }

      .btn-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        margin-bottom: 0.5em;
        width: 80%;

        button {
          border: none;
          border-bottom: solid 1px $light-gray;
          border-radius: 3px;
          color: $gray;
          font-size: 1em;
          margin-bottom: 0.5em;
          padding: 1em;
          transition: 0.2s;

          &:hover {
            box-shadow: 0 5px 4px rgba($black, 0.2);
            color: $black;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<template>
  <p
    id="flash-message"
    :class="classObject"
  >
    {{ message }}
  </p>
</template>

<script>
export default {
  computed: {
    classObject() {
      return {
        success: this.success,
        failure: this.failure,
        info: this.info
      };
    }
  },
  props: {
    message: String,
    success: {
      type: Boolean,
      default: false
    },
    failure: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/_colors.scss";

@mixin set-theme($theme-color) {
  border: solid 1px $theme-color;
  border-radius: 5px;
  background-color: lighten($theme-color, 20%);
  color: $white;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

.default {
  @include set-theme($gray);
}

.success {
  @include set-theme($green);
}

.failure {
  @include set-theme($red);
}

.info {
  @include set-theme($blue);
}
</style>
<template>
  <div>
    <p id="errorMsg">{{ error }}</p>
    <input
      :type="type"
      :value="value"
      :class="classObj"
      :placeholder="required ? `${placeholder}*` : placeholder"
      @keyup="$emit('keyup', $event.target.value)"
    />
  </div>
</template>

<script>
import { isEmail } from "validator";

export default {
  data() {
    return {
      classObj: {
        error: false
      },
      error: ""
    };
  },
  model: {
    prop: "value",
    event: "keyup"
  },
  props: {
    max: {
      type: Number,
      default: 40
    },
    min: {
      type: Number,
      default: 1
    },
    email: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    value: String
  },
  methods: {
    isInvalidEmail(val) {
      if (!isEmail(val)) {
        this.error = "Must be a valid email";
        return true;
      }

      return false;
    },
    inputIsTooShort(val) {
      if (val <= this.min) {
        this.error = `Must be at least ${this.min} character${
          this.min > 1 ? "s" : null
        }`;
        return true;
      }

      return false;
    },
    inputIsTooLong(val) {
      if (val > this.max) {
        this.error = "Too long";
        return true;
      }

      return false;
    }
  },
  watch: {
    value: function(val) {
      const errors = [this.inputIsTooShort, this.inputIsTooLong];

      // If input is an email field, add email validation
      if (this.email) {
        errors.push(this.isInvalidEmail);
      }

      // Check whether value is too short or long
      this.classObj.error = errors.some(func => func(val));

      // If no input error, remove any error message
      if (!this.classObj.error) {
        this.error = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/_colors.scss";
@import "@/_mixins.scss";

#errorMsg {
  color: $red;
  font-size: 0.5rem;
}

input {
  border: solid 1px $light-gray;
  border-radius: 5px;
  font-size: 1em;
  margin: 0 auto 1em;
  padding: 0.5em;
  min-width: 200px;
  transition: 0.2s;
  width: 80%;

  &:focus {
    @include set-focus($blue);
  }

  &.error {
    @include set_focus($red);
  }
}
</style>
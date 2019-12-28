<template>
  <div>
    <p id="label">{{ label }}</p>
    <p
      v-if="errors.length > 0"
      id="errorMsg"
    >{{ errors.join(", ") }}</p>
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
      errors: []
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
      default: 0
    },
    email: {
      type: Boolean,
      default: false
    },
    label: String,
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
        this.errors.push("Must be a valid email");
        return true;
      }

      return false;
    },
    inputIsTooShort(val) {
      if (val.length < this.min) {
        this.errors.push(`Must be at least ${this.min} characters`);
        return true;
      }

      return false;
    },
    inputIsTooLong(val) {
      if (val.length > this.max) {
        this.errors.push(`Must be less than ${this.max} characters`);
        return true;
      }

      return false;
    }
  },
  watch: {
    value: function(val) {
      if (this.required || this.min > 0) {
        const checkErrors = [this.inputIsTooShort, this.inputIsTooLong];

        // If input is an email field, add email validation
        if (this.email) {
          checkErrors.push(this.isInvalidEmail);
        }

        this.errors = [];
        // Validate the current input value
        checkErrors.forEach(func => {
          if (func(val)) {
            this.classObj.error = true;
          }
        });

        if (this.errors.length <= 0) {
          this.classObj.error = false;
        }
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

#label {
  color: $gray;
  font-weight: 600;
  margin: 0.2rem;
  text-align: center;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;

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
}
</style>
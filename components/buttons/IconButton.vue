<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      { [disabledStyle]: disabled },
      baseStyles,
      sizeStyles,
      styles,
    ]"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    // Is the button disabled?
    disabled: {
      type: Boolean,
      default: false,
    },
    // The size of the button, specifies if the button should be 'small', 'medium' or 'large'. Default is medium.
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "large", "medium"].indexOf(value) !== -1;
      },
    },
    // The background color of the button. Default is primary
    color: {
      type: String,
      default: "secondary",
      // validator: function (value) {
      //   return (
      //     [
      //       "success",
      //       "warning",
      //       "error",
      //       "info",
      //       "primary",
      //     ].indexOf(value) !== -1
      //   );
      // },
    },
  },
  computed: {
    baseStyles() {
      return "inline-flex items-center justify-center relative box-border outline-0 border-0 m-0 select-none bg-transparent no-underline !leading-none rounded-full transition-colors";
    },
    sizeStyles() {
      return {
        "p-[5px] text-lg": this.size === "small",
        "p-0.5 text-2xl": this.size === "medium",
        "p-0.75 text-[28px]": this.size === "large",
      };
    },
    styles() {
        return {
          "hover:bg-primary-100 text-primary-500": this.primary === 'primary',
          "hover:bg-warning-50 text-warning-900": this.warning === 'warning',
          "hover:bg-success-50 text-success-900": this.sucess === 'sucess',
          "hover:bg-error-50 text-error-900": this.error === 'error',
          "hover:bg-info-50 text-info-900": this.info === 'info',
          "hover:bg-secondary-50 text-secondary-900": this.secondary === 'secondary',
        }
    },
    disabledStyle() {
      return `text-secondary-700 hover:bg-transparent cursor-not-allowed opacity-40`;
    },
  },
};
</script>

<template>
  <NuxtLink
    v-if="to"
    role="button"
    :to="to"
    :class="[
      { [disabledStyle]: disabled },
      baseStyles,
      sizeStyles,
      styles,
    ]"
  >
    <slot></slot>
  </NuxtLink>
  <button
  v-else
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
    // The link to route to. If defined, it renders <NuxtLink></NuxtLink>,
    to: String,
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
      default: "primary",
      validator: function (value) {
        return (
          [
            "secondary",
            "success",
            "warning",
            "error",
            "info",
            "primary",
          ].includes(value)
        );
      },
    },
    // The button variant, specifies if the button should be 'contained', 'outlined' or 'text'. Default is text.
    variant: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "contained", "outlined"].indexOf(value) !== -1;
      },
    }
  },
  computed: {
    baseStyles() {
      return "inline-flex items-center justify-center relative box-border outline-0 border-0 m-0 select-none bg-transparent no-underline !leading-none rounded transition-colors";
    },
    sizeStyles() {
      return {
        "p-[5px] text-lg": this.size === "small",
        "p-2 text-2xl": this.size === "medium",
        "p-2.5 text-[28px]": this.size === "large",
      };
    },
    styles() {
      let classes;
      switch (this.variant) {
        case "outlined":
          classes = {
            "bg-transparent hover:bg-primary-100 text-primary-600 border-primary-300 hover:border-primary-400 border-solid border":
              this.color === "primary",
            "bg-transparent hover:bg-secondary-50 text-secondary-800 border-secondary-400 hover:border-secondary-600 border-solid border":
              this.color === "secondary",
            "bg-transparent hover:bg-success-50 text-success-800 border-success-400 hover:border-success-600 border-solid border":
              this.color === "success",
            "bg-transparent hover:bg-warning-50 text-warning-800 border-warning-400 hover:border-warning-600 border-solid border":
              this.color === "warning",
            "bg-transparent hover:bg-error-50 text-error-800 border-error-400 hover:border-error-600 border-solid border":
              this.color === "error",
            "bg-transparent hover:bg-info-50 text-info-800 border-info-400 hover:border-info-600 border-solid border":
              this.color === "info",
          };
          break;
        default:
          classes = {
            "bg-transparent hover:bg-primary-100 text-primary-500 border-0":
              this.color === "primary",
            "bg-transparent hover:bg-secondary-200 text-secondary-800 border-0":
              this.color === "secondary",
            "bg-transparent hover:bg-success-200 text-success-800 border-0":
              this.color === "success",
            "bg-transparent hover:bg-warning-200 text-warning-800 border-0":
              this.color === "warning",
            "bg-transparent hover:bg-error-200 text-error-800 border-0":
              this.color === "error",
            "bg-transparent hover:bg-info-200 text-info-800 border-0":
              this.color === "info",
          };
          break;
      }
      return classes;
    },
    disabledStyle() {
      return `text-secondary-700 hover:bg-transparent cursor-not-allowed opacity-40`;
    },
  },
};
</script>

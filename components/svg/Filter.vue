<template>
  <base-svg :size="size" :color="color">
    <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" />
  </base-svg>
</template>

<script>
import BaseSvg from "./Base.vue";

export default {
  name: "FilterIcon",
  components: {
    "base-svg": BaseSvg,
  },
  props: {
    viewBox: {
      type: String,
      default: '0 0 24 24'
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: 'inherit',
      validator: function (value) {
        return ['success', 'inherit', 'warning', 'error', 'info', 'primary', 'secondary'].indexOf(value) !== -1
      }
    }
  }
};
</script>

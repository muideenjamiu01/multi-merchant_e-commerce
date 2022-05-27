<template>
  <base-svg viewBox="0 0 22 16" :size="size" :color="color">
    <path
      d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
      fill="#ABA519"
    />
  </base-svg>
</template>

<script>
import BaseSvg from "./Base.vue";

export default {
  name: "ProfileIcon",
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

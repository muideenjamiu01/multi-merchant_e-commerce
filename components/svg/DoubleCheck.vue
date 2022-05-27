<template>
  <base-svg viewBox="0 0 24 14" :size="size" :color="color">
    <path
      d="M0.410156 8.40996L6.00016 14L7.41016 12.58L1.83016 6.99996L0.410156 8.40996ZM22.2402 0.579956L11.6602 11.17L7.50016 6.99996L6.07016 8.40996L11.6602 14L23.6602 1.99996L22.2402 0.579956ZM18.0002 1.99996L16.5902 0.579956L10.2402 6.92996L11.6602 8.33996L18.0002 1.99996Z"
      fill="#1EB62D"
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

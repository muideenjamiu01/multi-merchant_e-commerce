<template>
  <base-svg :size="size" :color="color">
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </base-svg>
</template>

<script>
import BaseSvg from "./Base.vue";
export default {
  name: "AddIcon",
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

<template>
  <base-svg viewBox="0 0 10 7" :size="size" :color="color">
    <path d="M1.18209 0.864063L4.64645 4.32842L4.99961 4.68159L5.35317 4.32881L8.82461 0.864925L9.29289 1.3332L5 5.6261L0.708359 1.33445L1.18209 0.864063Z" />
  </base-svg>
</template>

<script>
export default {
  name: "ChevronIcon",
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
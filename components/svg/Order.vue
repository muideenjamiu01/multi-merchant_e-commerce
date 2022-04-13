<template>
  <base-svg viewBox="0 0 19 18" :size="size" :color="color">
    <path d="M18.0128 14.5C18.0128 14.88 17.8027 15.21 17.4825 15.38L9.57773 19.82C9.41763 19.94 9.21751 20 9.00739 20C8.79726 20 8.59714 19.94 8.43704 19.82L0.532273 15.38C0.21208 15.21 0.00195312 14.88 0.00195312 14.5V5.5C0.00195312 5.12 0.21208 4.79 0.532273 4.62L8.43704 0.18C8.59714 0.0600001 8.79726 0 9.00739 0C9.21751 0 9.41763 0.0600001 9.57773 0.18L17.4825 4.62C17.8027 4.79 18.0128 5.12 18.0128 5.5V14.5ZM9.00739 2.15L7.11624 3.22L13.0098 6.61L14.971 5.5L9.00739 2.15ZM3.04379 5.5L9.00739 8.85L10.9686 7.75L5.08502 4.35L3.04379 5.5ZM2.00316 13.91L8.00678 17.29V10.58L2.00316 7.21V13.91ZM16.0116 13.91V7.21L10.008 10.58V17.29L16.0116 13.91Z" fill="#262626"/>
  </base-svg>
</template>

<script>
import BaseSvg from "./Base.vue";

export default {
  name: "OrderIcon",
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

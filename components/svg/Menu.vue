<template>
  <base-svg viewBox="0 0 24 24" size="small">
  <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </base-svg>
</template>

<script>
import BaseSvg from "./Base.vue";

export default {
  name: "MenuIcon",
  components: {
    "base-svg": BaseSvg,
  },
};
</script>

<template>
  <base-svg viewBox="0 0 16 16" :color="color" :size="size">
  <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" />
  </base-svg>
</template>

<script>
export default {
  name: "SearchIcon",
  props: {
    viewBox: {
      type: String,
      default: '0 0 24 24'
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    color: {
      type: String,
      default: 'inherit',
      validator (value) {
        return ['success', 'inherit', 'warning', 'error', 'info', 'primary', 'secondary'].includes(value)
      }
    }
  }
};
</script>

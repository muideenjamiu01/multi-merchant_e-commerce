<template>
  <svg aria-hidden :viewBox="viewBox" :class="['svgIcon', sizeStyle, colorStyle]">
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'BaseSvg',
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
        return ['success', 'warning', 'error', 'info', 'primary', 'secondary'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    sizeStyle () {
      return {
        'text-xl': this.size === 'small',
        'text-2xl': this.size === 'medium',
        'text-4xl': this.size === 'large'
      }
    },
    colorStyle () {
      return {
        "text-primary-600": this.color === 'primary',
        "text-secondary-800": this.color === 'secondary',
        "text-success-800": this.color === 'success',
        "text-warning-800": this.color === 'warning',
        "text-error-800": this.color === 'error',
        "text-info-800": this.color === 'info',
        "inherit": this.color === 'inherit'
      }
    }
  }
}
</script>

<style scoped>
.svgIcon {
  width: 1em;
  height: 1em;
  user-select: none;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  line-height: 0;
}
</style>

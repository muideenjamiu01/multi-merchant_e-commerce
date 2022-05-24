<template>
  <tr :class="['text-inherit table-row align-middle outline-0 even:bg-secondary-50 odd:bg-white', setSelectedBgColor]">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setSelectedBgColor() {
      return {
        'bg-secondary-100': this.selected
      }
    }
  }
}
</script>

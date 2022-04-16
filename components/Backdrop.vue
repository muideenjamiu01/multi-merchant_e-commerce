<template>
  <div v-if="isOpen" :class="['fixed top-0 right-0 left-0 bottom-0 z-10', bgOpacity]" @click="close">
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    opacity: {
      type: String,
      default: "light",
      validator (value) {
        return ["light", "dark"].includes(value);
      },
    }
  },
  computed: {
    bgOpacity() {
      return {
        'bg-black/10': this.opacity === "light",
        'bg-black/40': this.opacity === "dark",
      }
    }
  }
}
</script>

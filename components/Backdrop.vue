<template>
  <div v-if="isOpen" class="fixed top-0 right-0 left-0 bottom-0 z-10 bg-black/10" @click="close">
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
  }
}
</script>

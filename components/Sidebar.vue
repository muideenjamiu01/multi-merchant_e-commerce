<template>
  <aside v-if="merchant" class="absolute top-0 left-0 w-72 h-full overflow-x-hidden text-center p-4 hidden sm:block bg-primary-100">
    <slot />
  </aside>
  <aside v-else class="absolute top-0 left-0 w-60 h-full overflow-x-hidden text-center p-4 hidden sm:block bg-primary-100">
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    merchant: {
      type: Boolean,
      default: false
    },
  }
}
</script>
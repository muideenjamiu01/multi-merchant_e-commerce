<template>
  <aside class="fixed top-0 left-0 w-64 h-full overflow-x-hidden text-center p-4 hidden sm:block bg-primary-100">
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
<template>
  <div class=" px-4 h-14 flex items-center justify-between w-full">
    <span class="text-2xl capitalize font-medium m-0 mr-2">
      {{title}}
    </span>

    <div class="relative grow max-w-2xl mx-2">
      <slot name="search"></slot>
    </div>

    <div class="flex items-center justify-end gap-2 ml-2">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableToolbar",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

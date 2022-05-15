<template>
  <button
    :class="['inline-flex items-center justify-center relative w-full box-border outline-0 m-0 select-none whitespace-nowrap no-underline font-medium leading-[1.75] tracking-[0.02285em] transition-colors h-8 sm:h-10 shadow hover:text-primary-500 capitalize bg-transparent ', {
      'border-b-2 border-b-primary-400 text-primary-500': isCurrentTab
    }]"
    @click="$emit('click', name)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppTab",
  props: {
    name: {
      type: String,
      required: true,
    },
    currentTab: {
      type: String,
      required: true,
    }
  },
  computed: {
    isCurrentTab() {
      return this.currentTab.toLowerCase() === this.name
    }
  }
};
</script>
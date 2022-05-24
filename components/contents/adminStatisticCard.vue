<template>
  <div class="">
   <div class="flex flex-col">
	    <div class="mt-4 md:mt-0 rounded shadow-lg p-4">
      <p class="font-medium text-base">
		  <slot name="prepend"></slot>
        <slot name="default">{{ cardText }}</slot>
      </p>
      <span
        class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
        >25,130</span
      >
      <div class="flex justify-between items-center mt-2 font-normal text-sm">
        <p>This month</p>
        <p>+3042</p>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
	  return {
		  
	  }
  },
  props: {
    cardText: {
      type: String,
      default: "label",
    },
  },
};
</script>

<style></style>

<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Write a review</h1>
    </div>

    <div class="md:flex mt-6">
      <div class="md:w-1/4">
        <h2 class="md:font-light text-xl">Rate this Item</h2>
        <div class="flex gap-2 mt-4">
          <img
            src="@/assets/images/icons/star.svg"
            v-for="star in 5"
            :key="star"
            alt=""
          />
        </div>
      </div>

      <div class="md:w-2/4">
	  	<h2 class="md:font-light text-xl">Leave a review</h2>
		<div><button class="px-2 py-1 md:px-6 md:py-2 bg-primary-blue text-white rounded">Submit Review</button></div>
	  </div>

      <div class="md:w-1/4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

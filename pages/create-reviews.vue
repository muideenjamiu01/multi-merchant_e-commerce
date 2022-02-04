<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Write a review</h1>
    </div>

    <div class="md:flex gap-6  mt-6">
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
        
        <div class="">
          <div class="mb-3">
            <label
              for="Textarea"
              class="form-label inline-block mb-2 text-gray-700 md:font-light text-xl"
              >Leave a review</label
            >
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="Textarea"
              rows="3"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            class="px-2 py-1 md:px-6 md:py-2 bg-primary-blue text-white rounded"
          >
            Submit Review
          </button>
        </div>
      </div>

      <div class="md:w-1/4">
        <ContentsAddToCart />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

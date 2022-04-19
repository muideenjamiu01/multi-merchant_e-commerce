<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <nuxt-link to="/customer/reviews">
        <h1 class="text-3xl font-medium">&#8592;</h1>
      </nuxt-link>
      <h1 class="md:text-3xl font-medium">
        Write a review
      </h1>
    </div>

    <div class="md:flex gap-6 mt-6">
      <div class="md:w-1/4">
        <h2 class="md:font-light text-xl">
          Rate this Item
        </h2>
        <div class="flex gap-2 mt-4">
          <span
            @click="test(star)"
            v-for="star in rating"
            :key="star"
            class="text-xl"
          >
            <!-- &#9733; -->
            ⭐
          </span>
          <span
            @click="testBlack(star)"
            v-for="star in 5-rating"
            :key="`${star}1`"
            class="text-xl"
          >
            ✩
            <!-- &#9734; -->
          </span>
         
          <span
            @click="test5"
            class="text-xl"
          >
          <img src="@/assets/images/test-images/5star.jpg" 
            class="text-xl mt-[-5px]"
            width="40px" height="40px" alt="5 star">
            <!-- &#9734; -->
          </span>
        </div>
      </div>

      <div class="md:w-2/4">
        <div class="">
          <div class="mb-3">
            <label
              for="Textarea"
              class="form-label inline-block mb-2 text-gray-700 md:font-light text-xl"
            >Leave a review</label>
            <textarea
              v-model="input"
              id="Textarea"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="3"
              placeholder="Your message"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <app-button @click="createReview" variant="contained">
            Submit Review
          </app-button>
        </div>
      </div>

      <div class="md:w-1/4">
         <ContentsAddToCart 
          class="w-[344px] h-[176px]"
          :product ='product'
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return  {
          input: "",
          rating: 5,
          product: this.$store.state.products.singleProduct
        }
    },
    methods: {
      createReview() {
        this.$store.dispatch("reviews/postReviews", {input: this.input, rating: this.rating})
        this.$router.push("/products?category=fashion")
      },
      test(star) {
        this.rating = star
      },
      testBlack(star) {
        this.rating = star
      },
      test5() {
        this.rating = 5
      }
    },
    computed : {
    }
  }
</script>

<style lang="scss" scoped></style>

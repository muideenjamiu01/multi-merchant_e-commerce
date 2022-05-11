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
          

          //remove every mouse event listener on click
          <span>
            <span v-if="rating === 1">
              <span class="cursor-pointer mr-[15px] text-3xl " @mouseover="rating=1" @click="showRating(1)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=2" @click="showRating(2)">
                &#9734; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=3" @click="showRating(3)">
                &#9734; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=4" @click="showRating(4)">
                &#9734; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=5" @click="showRating(5)">
                &#9734; 
              </span>
            </span>
           
            <span v-if="rating === 2">
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=1" @click="showRating(1)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=2" @click="showRating(2)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=3" @click="showRating(3)">
                &#9734; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=4" @click="showRating(4)">
                &#9734; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=5" @click="showRating(5)">
                &#9734; 
              </span>
            </span>

            <span v-if="rating === 3">
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=1" @click="showRating(1)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=2" @click="showRating(2)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=3" @click="showRating(3)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=4" @click="showRating(4)">
                &#9734; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=5" @click="showRating(5)">
                &#9734; 
              </span>
            </span>

            <span v-if="rating === 4">
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=1" @click="showRating(1)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=2" @click="showRating(2)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=3" @click="showRating(3)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=4" @click="showRating(4)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=5" @click="showRating(5)">
                &#9734; 
              </span>
            </span>

            <span v-if="rating === 5">
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=1" @click="showRating(1)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=2" @click="showRating(2)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=3" @click="showRating(3)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=4" @click="showRating(4)">
                &#9733; 
              </span>
              <span class="cursor-pointer mr-[15px] text-3xl" @mouseover="rating=5" @click="showRating(5)">
                &#9733; 
              </span>
            </span>
          </span>
          <div class="mr-[5px] pt-[5px] text-base">{{rating}}/5</div>
          
          
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
          rating: 3,
          product: this.$store.state.products.singleProduct
        }
    },
    methods: {
      createReview() {
        this.$store.dispatch("reviews/postReviews", {input: this.input, rating: this.rating})
        this.$router.push("/products?category=fashion")
      },
      showRating(star) {
        this.rating = star;
      },
      
      testb() {
        console.log("bye")
      }
    },
    computed : {
      testa() {
        console.log("hello")
      },
    }
  }
</script>

<style lang="scss" scoped></style>

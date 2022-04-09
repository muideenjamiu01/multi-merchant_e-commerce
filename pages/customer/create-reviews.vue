<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <nuxt-link to="/customer/reviews">
        <img src="@/assets/images/icons/back-arrow.svg" alt="back to reviews">
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
          <img
            v-for="star in 5"
            :key="star"
            src="@/assets/images/icons/star.svg"
            alt=""
          >
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
        <ContentsAddToCart />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue"

  export default {
    data () {
      return  {
          input: ""
        }
    },
    components: {
      'app-button': AppButton
    },
    methods: {
      createReview() {
        console.log(this.input)
        this.$store.dispatch("reviews/postReviews")
        this.$router.push("/customer/reviews")
      },
      async addNewReview() {
      try {
        const response = await this.$axios
          .post("https://youstore-products.herokuapp.com/v1/product/${id}/review", {
            category: this.category,
            color: this.color,
            description: this.description,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            size: this.size,
            discount: this.discount,
          })
          .then((res) => this.updatePicture(res.data.data._id));
          this.$toast.success("Product successfully uploaded!")

      } catch (err) {
        this.$toast.error("Failed to upload review");
        console.log(err);
      } finally {
      }
    },
    },


  }
</script>

<style lang="scss" scoped></style>

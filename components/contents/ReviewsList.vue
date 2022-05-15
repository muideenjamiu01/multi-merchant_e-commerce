<template>
  <div class="mx-auto my-4 max-w-[960px]">
      <div
        v-if="loading"
        class="flex items-center justify-center w-full h-12"
      >
        <loading-spinners size="large" color="primary" />
      </div>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
        Oops... An error occurred.
      </h2>
    <ContentsReviewItem v-for="review in reviews" v-else :key="review._id" :review="review" />
  </div>
</template>

<script>
export default {
  name: "ReviewsList",
  data() {
    return {
        reviews: [],
        errors: null,
        loading: false
    }
  },
  async created() {
    if (this.$auth.loggedIn) {
      await this.$store.dispatch("wishlist/fetchWishlist");
    }

    try {
        this.loading = true
        const response = await this.$axios.get('/api/products/v1/products')

        const products = await response.data.data

        products.map((product) => {
          const name = product.name
          const image = product.images[0]

          product.reviews.forEach(review => 
            this.reviews = [...this.reviews, { name, image, ...review }]
          );
        })
    console.log(this.reviews)

    } catch(error) {
        this.errors = error.response.data.msg
    } finally {
        this.loading = false
    }
  }
};
</script>

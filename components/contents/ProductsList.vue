<template>
  <div class="flex flex-wrap items-center gap-5 my-8">
      <div
        v-if="loading"
        class="flex items-center justify-center w-full h-12"
      >
        <loading-spinners size="large" color="primary" />
      </div>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
        Oops... An error occurred.
      </h2>
    <ContentsProductCard
      v-for="(product, index) in products"
      v-else
      :key="product._id"
      :product="product"
      :index="index"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductsList",
  data() {
    return {
        products: [],
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

        this.products = await response.data.data
        console.log(this.products)
    } catch(error) {
        this.errors = error.response.data.msg
    } finally {
        this.loading = false
    }
  },
  methods: {
    ...mapActions("wishlist", ["fetchWishlist"])
  }
};
</script>

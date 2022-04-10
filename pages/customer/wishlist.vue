<template>
    <app-container maxWidth="md">
    <main class="my-8">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        Your Wishlist
      </h1>
      <div v-if="loading" class="flex justify-center w-full mt-16">
        <loading-spinners size="large" color="primary" />
      </div>
      <div v-else-if="errors" class="flex justify-center w-full mt-16">
        <p class="text-2xl text-secondary-600 text-center">
          An error occurred.
        </p>
      </div>
      <ContentsWishlist v-for="product in wishlist" v-else :key="product._id" :product="product" />
    </main>
  </app-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      wishlist: "wishlist/products",
      loading: "wishlist/loading",
      errors: "wishlist/errors",
    }),
  },
  mounted() {
    this.$store.dispatch("wishlist/fetchWishlist");
    console.log(this.wishlist)
  },
  methods: {
    ...mapActions("wishlist", ["fetchWishlist", "removeFromWishlist"]),
  },
};
</script>

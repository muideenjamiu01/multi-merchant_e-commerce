<template>
    <app-container maxWidth="md">
    <main class="my-8">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        Your Wishlist
      </h1>
      <div v-if="loading" class="flex items-center justify-center w-full h-[calc(100vh_-_56px_-_64px)]">
        <loading-spinners size="large" color="primary" />
      </div>
      <div v-else>
        <div v-for="wishlist in wishlist.data" :key="wishlist._id">
          <ContentsWishlist :products="wishlist.products" />
        </div>
      </div>
      <!-- <loading-spinner v-if="loading" size="large" />
      <p v-else-if="errors" class="text-2xl text-secondary-600 text-center">
        An error occurred.
      </p> -->
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
  },
  methods: {
    ...mapActions("wishlist", ["fetchWishlist", "removeFromWishlist"]),
  },
};
</script>

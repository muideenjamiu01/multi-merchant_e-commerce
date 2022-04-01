<template>
  <div class="px-4 py-8 flex">
    <!-- <aside>
      <ContentsCustomerProfileCard />
    </aside> -->
    <main class="w-full">
      <h1 class="text-2xl mb-10">Your Wishlist</h1>
      <div v-if="loadingStatus">
        <loading-spinner size="large" color="primary" />
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
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Spinners from "~/components/Loading/Spinners.vue";
export default {
  components: {
    Spinners,
  },
  data() {
    return {
      //   loading:false
    };
  },
  computed: {
    ...mapState({
      loadingStatus: (state) => state.wishlist.loadingStatus,
    }),

    ...mapGetters({
      wishlist: "wishlist/products",
    //   loadingStatus: "wishlist/loadingStatus",
      errors: "wishlist/errors",
    }),
  },
  mounted() {
    this.$store.dispatch("wishlist/fetchWishlist");

    console.log();
  },
  methods: {
    ...mapActions("wishlist", ["fetchWishlist", "removeFromWishlist"]),
  },
};
</script>

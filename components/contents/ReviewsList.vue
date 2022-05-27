<template>
  <div class="mx-auto my-4 max-w-[600px]">
      <!-- <div
        v-if="loading"
        class="flex items-center justify-center w-full h-12"
      >
        <loading-spinners size="large" color="primary" />
      </div>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
       {{ errors || 'Oops... An error occurred.' }}
      </h2> -->
          <h2 v-if="reviews.length === 0" class="text-2xl text-secondary-600">
            This merchants has no reviews.
          </h2>
    <ContentsReviewItem v-for="review in reviews" v-else :key="review._id" :review="review" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ReviewsList",
  computed: mapGetters({
    reviews: "merchants/getMerchantReviews",
    loading: "merchants/loading",
    errors: "merchants/errors",
  }),
  created() {
    this.$store.commit("merchants/setMerchantReviews");
  }
};
</script>

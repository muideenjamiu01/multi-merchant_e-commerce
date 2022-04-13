<template>
  <div class="px-4">
    <h1 class="font-bold">
     49 Comments from verified purchases
    </h1>
      <!-- <ContentsReviews 
      :name='reviews.customerName'
      :comment='reviews.comment'
      :createdAt='reviews.createdAt'
      :customerAvatar='reviews.customerAvatar'
      :rating='reviews.rating'
      :id='reviews.id'
      /> -->
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    let reviews = this.$store.state.singleReviews
    console.log(reviews)
    // this.$store.commit("reviews/getReview", this.product.reviews) 
  },
  methods: {
    // ...mapActions("cart", ["addProductToCart"]),
    // ...mapActions("wishlist", ["addToWishlist"]),

    // getProductImage(images) {
    //   // const photos = JSON.parse(images);
    //   // return photos[photos.length - 1];
    //   return images
    // },
    
  },
  // computed: mapGetters({ product: "products/singleProduct" })
}
</script>

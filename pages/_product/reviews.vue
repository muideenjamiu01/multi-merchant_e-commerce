<template>
   <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <nuxt-link to="/customer/create-reviews">
        <h1 class="md:text-3xl font-medium">&#8592;</h1>
      </nuxt-link>
      <h1 class="md:text-3xl font-medium">
       Verified customer feedback
      </h1>
    </div>

    <div class="md:flex gap-6 mt-6">
      <div class="md:w-1/4">
      <nuxt-link to="/customer/create-reviews">
        <app-button 
          class=""
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          uppercase
        >
          Write a review
        </app-button>
      </nuxt-link>
      </div>
      <div class="px-4 flex flex-col">
        <ContentsReviews 
          v-for="review in product.reviews"
          :key="review._id" 
          :comment='review.comment'
          :createdAt='review.createdAt'
          :rating='review.rating'
          :id='review._id'
        />
        
      </div>
      <div class="md:w-1/4">
        <ContentsAddToCart 
          :product ='product'
        />
      </div>
    </div>
  </div>
</template>
 


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data () {
    return {
      reviews : []
    }
  },
  created() {
    this.product = this.$store.state.reviews.singleReviews
    console.log(this.product)
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

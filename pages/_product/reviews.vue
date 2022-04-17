<template>
   <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <h1 class="text-3xl font-medium">
       {{product.reviews.length}} Verified customer's feedback
      </h1>
    </div>

    <div class="flex gap-6 mt-6">
      <div class="w-3/4">
        <ContentsReviews 
          class="px-4"
          v-for="review in product.reviews"
          :key="review._id" 
          :comment='review.comment'
          :createdAt='review.createdAt'
          :customerAvatar="review.customerAvatar"
          :customerName="review.customerName"
          :rating='review.rating'
          :id='review._id'
        />
      </div> 
      <div class="">
        <ContentsAddToCart 
          class="w-[344px] h-[176px]"
          :product ='product'
        />
        <nuxt-link 
          class="flex justify-center items-center" to="/customer/create-reviews">
          <app-button 
            class=""
            type="submit"
            variant="contained"
            color="success"
            size="medium"
            uppercase
          >
            Write a review
          </app-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  // import { mapGetters, mapActions } from "vuex";

  export default {
    created () {
      this.product = this.$store.state.products.singleProduct
    },
    mounted () {
       this.product = this.$store.state.products.singleProduct
    },
    methods: {
    
    },
    // computed: mapGetters({ product: "products/singleProduct" })
  }
</script>

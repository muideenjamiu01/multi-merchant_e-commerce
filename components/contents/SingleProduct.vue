<template>
  <div class="flex flex-col font-light mt-5 pl-[48px] pr-[40px] text-primary-black">
    <div class="flex flex-col md:flex-row mt-5">
      <main class="w-[70%]">
        <div  class="flex flex-col md:flex-row">
          
          <div class="w-full h-min max-w-lg min-w-[25%] border mt-5">
            <img v-if="product === undefined" src="@/assets/images/icons/vehicle.svg" alt="">
            <img v-else
              :src="getProductImage(product.images[0])"
              class="w-full h-[auto]"
              alt="product.name"
            />
          </div>
          <div class="my-5 mx-[32px]  min-w-[25%]">
            <h1 class="text-xl capitalize font-medium">Product Name: <span class="font-normal">{{ product.name }}</span></h1>
            <div class="flex items-center">
              <Rating :rating='5'  ratingLabel="AVG. Rating"/>
              <p class="text-primary-blue-dark ml-2.5 text-sm">
              </p>
            </div>
            <div class="flex mt-6">
              <p class="font-semibold text-lg">₦ {{Number(product.price).toLocaleString() }}</p>
              <p class="text-primary-gray-light text-sm font-light ml-2.5"></p>
            </div>
            <app-button
              @click="addProductToCart(product)"
              class="mt-6 w-full"
              variant="contained"
            >
              Add to cart
            </app-button>
            <div class="mt-[32px]">
          <h1 class="text-xl mb-3 font-medium">Product Description</h1>
          <p>
            {{ `${product.description[0].toUpperCase()}${product.description.slice(1)} `  }}
          </p>
        </div>
        
          </div>
        </div>
        
     
      </main>
      <aside class="max-w-[20%]">
        <div  class="min-w-88 bg-primary-blue-light py-2.5 pb-10 font-light mt-5">
          <h1 class="font-medium px-6 py-4">Seller Information</h1>
          <div class="border-t border-gray-200" />
          <div class="px-6 py-4">
            <div class="flex">
              <img width="50px" height="50px" :src="merch.avatar" :alt="merch.storeName">
              <h1 v-if="merch.storeName === undefined" class="ml-5 pt-5 text-primary-blue-dark">STORE</h1>
              <h1 v-else class="ml-5 pt-5 text-primary-blue-dark"> {{getCaps(merch.storeName)}} STORE</h1>
              
            </div>
            <p class="text-sm mt-5 font-medium">
            Merchant E-mail: <span class="font-light">{{merch.email}}</span> 
            </p>
            <p class="text-sm mt-5 font-medium">
            Phone No.: <span class="font-light">{{merch.phoneNo}}</span>
            </p>
            <p class="mt-5 text-sm font-medium">Customer Rating: <span class="font-light">{{merch.customerRating}}</span></p>
            <p class="mt-5 text-sm font-medium">Order Fulfilment Rate: <span class="font-light">{{merch.orderFufillmentRate}}</span></p>
          </div>
        </div>
        <div
          class="hidden md:block mt-5 min-w-88 bg-primary-blue-light px-7 pb-10 font-light xl:mt-0"
        >
          <h1 class="font-medium">Delivery and Shipping</h1>
          <p class="tex-xs mt-10">
            Free Shipping on Youstore orders above N12,000 in Lagos
          </p>

          <h1 class="mt-6">Choose your location</h1>

          <select
            class="focus:outline-none w-full px-6 py-2.5 mt-4 bg-transparent border border-gray-500 rounded"
          >
            <option value="">Lagos</option>
          </select>
          <select
            class="focus:outline-none w-full px-6 py-2.5 mt-4 bg-transparent border border-gray-500 rounded"
          >
            <option value="">Lekki - Ajah (Sangotedo)</option>
          </select>

          <div class="mt-5 space-y-5">
            <div class="flex space-x-4">
              <div class="">
                <img src="@/assets/images/icons/vehicle.svg" alt="" />
              </div>
              <div class="text-sm space-y-1">
                <h1 class="text-base leading-none">Door delivery</h1>
                <p>Shipping 450 NGN</p>
                <p>
                  Ready for delivery between 13 January & 14 January when you
                  order within next 2hrs 29mins
                </p>
              </div>
            </div>

            <div class="flex space-x-4">
              <div class="">
                <img src="@/assets/images/icons/station.svg" alt="" />
              </div>
              <div class="text-sm space-y-1">
                <h1 class="text-base leading-none">Pickup station</h1>
                <p>Shipping 180 NGN</p>
                <p>
                  Ready for pickup between 13 January & 14 January when you order
                  within next 2hrs 29mins
                </p>
              </div>
            </div>

            <div class="flex space-x-4">
              <div class="">
                <img src="@/assets/images/icons/return.svg" alt="" />
              </div>
              <div class="text-sm space-y-1">
                <h1 class="text-base leading-none">Return policy</h1>

                <p>
                  Free return within 15 days for Official Store items and 7 days
                  for other eligible items.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </aside>
    </div>

    <div class="mt-24 lg:flex lg:space-x-8">
      
    </div>
    <div class="mt-8">
      <h1 class="font-bold">{{product.reviews.length}} Comments from verified purchase</h1>
      <ContentsReviewSingleProduct v-for="(review, index) in product.reviews" :key="review._id"
        :customerName="review.customerName"
        :createdAt= "review.createdAt"
        :rating ="review.rating"
        :comment="review.comment"
        :customerAvatar='review.customerAvatar'
        :id='review._id'
        :index="index"
      
      />
      <NuxtLink
        :to="$route.params.product + '/reviews'"
        class="font-light text-primary-blue-dark mt-6 flex justify-end"
      >
        See all reviews
      </NuxtLink>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Rating from "./Rating";

export default {
  data() {
        return {
             merch: [],
        }
    },
    async mounted() {
        this.getOneMerchant()
        console.log(this.product)
    },
    methods: {
      getCaps(data) {
       return this.merch.storeName.toUpperCase()
      },
       async getOneMerchant() {
          const response = await this.$axios.$get(`https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/${this.product.merchantId}`)
          this.merch = response.data;
        },
        ...mapActions("cart", ["addProductToCart"]),
        ...mapActions("wishlist", ["addToWishlist"]),
        getProductImage(images) {
            return images;
        },
    },
    computed: mapGetters({
        product: "products/singleProduct",
        merchant: "merchant-products/products"
    }),
    components: { Rating }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

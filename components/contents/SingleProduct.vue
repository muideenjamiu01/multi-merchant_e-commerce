<template>
  <div class="font-light mt-[32px] pl-[48px] pr-[40px] text-primary-black">
    <div class="flex mt-[32px]">
      <main class="w-[70%]">
        <div  class="flex ">
          
          <div class="w-full h-min max-w-lg min-w-[25%] border border-[#0B4B58]">
            <img
              :src="getProductImage(product.images[0])"
              class="w-full h-[auto]"
              alt="product.name"
            />
          </div>
          <div class="mx-[32px]  min-w-[25%]">
            <h1 class="text-xl capitalize">{{ product.name }}</h1>
            <div class="flex items-center">
              <Rating rating=""  ratingLabel="AVG. Rating"/>
              <button @click="fetchSomething">fetch</button>
              <p class="text-primary-blue-dark ml-2.5 text-sm">
              </p>
            </div>
            <div class="flex mt-6">
              <p class="font-semibold text-lg">₦ {{Number(product.price).toLocaleString() }}</p>
              <p class="text-primary-gray-light text-sm font-light ml-2.5">-23%</p>
            </div>
            <app-button
              @click="addProductToCart(product)"
              class="mt-6 w-full"
              variant="contained"
            >
              Add to cart
            </app-button>
            <div class="mt-[32px]">
          <h1 class="text-xl mb-3">Product Description</h1>
          <p>
            {{ product.description }}
          </p>
        </div>
        
          </div>
        </div>
        
     
      </main>
      <aside class="max-w-[20%]">
        <div
          class="min-w-88 bg-primary-blue-light px-7 pb-10 font-light xl:mt-0"
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
        <div class="min-w-88 bg-primary-blue-light py-2.5 pb-10 font-light mt-8">
        <h1 class="font-medium px-6 py-4">Seller Information</h1>
        <div class="border-t border-gray-200" />
        <div class="px-6 py-4">
          <h1 class="text-primary-blue-dark">Mummy's choices store</h1>
          <p class="text-sm mt-5">
            Dealers in the best aenean sodales mattis rutrum. Duis id
            consectetur neque, eu ullam corper lorem. Aenean a nulla ullam
            corper, congue ligula ut, gravida lacus.
          </p>
          <p class="mt-4 text-sm">Customer Rating: Good</p>
          <p class="mt-2 text-sm">Order Fulfilment Rate: Excellent</p>
        </div>
        </div>
      </aside>
    </div>

    <div class="mt-24 lg:flex lg:space-x-8">
      
    </div>
    <div class="mt-8">
      <h1 class="font-bold">49 Comments from verified purchase</h1>
      <!-- <ContentsReviews v-for="n in 3" :key="n" /> -->
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
    async mounted() {
        console.log(this.product);
        this.getOneMerchant()
    },
    methods: {
       async getOneMerchant() {
          const response = await this.$axios.$get('https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/623c4fc948190e352f309664')
          console.log('GET_ONE_MERCHANT', response.data)
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

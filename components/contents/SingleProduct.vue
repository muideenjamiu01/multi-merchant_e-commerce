<template>
  <div class="font-light py-8 px-4 text-primary-black">
    <div class="xl:flex xl:space-x-8">
      <!-- <div class="flex flex-col space-y-4">
        <div v-for="n in 5" :key="n" class="border-2 border-black h-14 w-14" />
      </div> -->
      <div class="w-full h-96 max-w-lg">
        <img
          :src="getProductImage(product.images[0])"
          class="w-full h-full"
          alt="product.name"
        />
      </div>
      <div>
        <h1 class="text-xl capitalize">{{ product.category }}</h1>
        <div class="flex items-center">
          <p class="text-2xl font-bold">******</p>
          <p class="text-primary-blue-dark ml-2.5 text-sm">
            {{ product.inventory }} ratings
          </p>
         
        </div>
        <div class="flex mt-6">
          <p class="font-semibold text-lg">₦ {{Number(product.price).toLocaleString() }}</p>
          <p class="text-primary-gray-light text-sm font-light ml-2.5">-23%</p>
        </div>

       
         <!-- <img src="@/assets/images/icons/heart.svg" alt="wishlist button"> -->

         <app-button 
            @click="addToWishlist"  
            class="bg-primary-blue text-white">
            Add to Wishlist
          </app-button>

        <app-button
          @click="addProductToCart(product)"
          class="mt-6"
          variant="contained"
        >
          Add to cart
        </app-button>
        <div class="text-sm mt-4">
          <p>
            Proin eleifend est id velit hendrerit rhoncus. Mauris pulvinar quis
            libero eget blandit. Nullam vel nisl vitae nunc dapibus laoreet eu
            eu massa. Mauris vitae nisl felis.
          </p>
          <h1 class="uppercase mt-2.5">Key Features</h1>
          <ul class="px-3">
            <li>Regular fit</li>
            <li>Slip-on</li>
            <li>Synthetic upper</li>
            <li>Synthetic outsole</li>
          </ul>

          <h1 class="uppercase mt-4">Specifications</h1>
          <ul class="px-3">
            <li>SKU: AD002FS0J6PXKNAFAMZ</li>
            <li>Product Line: Adidas Official Store</li>
            <li>Model: FY5839</li>
            <li>Weight (kg): 0.6</li>
            <li>Color: Hazy green/ftwr white/hazy green</li>
            <li>Main Material: SYNTHETICS</li>
            <li>Shop Type: Jumia Mall</li>
          </ul>
        </div>
      </div>

      <div
        class="min-w-88 bg-primary-blue-light px-7 py-2.5 pb-10 font-light mt-8 xl:mt-0"
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
    </div>

    <div class="mt-24 lg:flex lg:space-x-8">
      <div>
        <h1 class="text-xl mb-3">Product Description</h1>
        <p>
          {{ product.description }}
        </p>
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
    </div>

    <div class="mt-8">
      <h1 class="font-bold">49 Comments from verified purchase</h1>
      <ContentsReviews v-for="n in 3" :key="n" />
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

export default {
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    getProductImage(images) {
      // const photos = JSON.parse(images);
      // return photos[photos.length - 1];
      // console.log(images)
      //  console.log(product)
      return images
      // return "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfrWOGqkDUrw7FM0SJsZ6BinOjvh2hgSbbkGvmMm-5aNTaD2fKk8f9ovJPw9vzurnsUVezIdLHXw&usqp=CAc"
    },
    addToWishlist () {
      this.$toast.success('Successfully added to wishlist')
    }
  },
  computed: mapGetters({ product: "products/singleProduct" })
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

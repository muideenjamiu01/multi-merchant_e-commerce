<template>
  <div class="container mx-auto py-4 px-2">
    <div @click="goBack" class="flex gap-4 mt-8">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Shopping Cart</h1>
    </div>
    <div class="md:flex justify-between gap-8">
      <div class="md:w-3/4" v-if="cartItems">
        <div v-for="item in cartItems" :key="item" class="md:flex gap-8 border-b p-4 mt-4">
          <div class="md:w-2/4">
            <div>
              <div class="flex gap-4">
                <div class="w-24 h-24 overflow-hidden">
                  <img
                    src="@/assets/images/icons/profile-picture.jpg"
                    alt="youveirfy logo"
                  />
                </div>
                <div class="flex flex-col">
                  <div>
                    <h3 class="text-base font-light">
                      Women's Los Angeles California Long Sleeve Sweatshirt
                      Oversized
                    </h3>
                  </div>
                  <div class="text-sm font-light">size:small</div>
                  <div class="text-sm font-light">color:Brown</div>
                  <div class="text-primary-blue text-sm font-normal">
                    <button @click="removeFromCart" class="border-r-4 pr-2">
                      Delete
                    </button>
                    <button class="pl-2">Add to wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/4">
            <div class="flex justify-center items-center gap-4">
              <button @click="counter -= 1">
                <span class="m-auto text-2xl font-thin">-</span>
              </button>
              <div
                class="text-center font-semibold text-md text-gray-400 flex items-center"
              >
                {{ counter }}
              </div>
              <button class="cursor-pointer" @click="counter += 1">
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <div class="md:w-1/4">
            <div class="flex">
              <span class="text-base font-light">14387.00</span>
            </div>
          </div>
        </div>

        <div class="mt-12 flex justify-end gap-2 font-medium text-xl">
          <h1><span class="">Subtotal (5 items):</span></h1>
          <span class="">799516 NGN</span>
        </div>

        <!-- <app-button class="mt-3" color="secondary" variant='outlined' size="small">add to cart</app-button> -->
      </div>
	  <div v-else class="text-center">
		  <h1 class=" font-semibold text-4xl text-gray-400">No Items In Cart</h1>
	  </div>
      <div class="md:w-1/4">
        <div class="mt-4 lg:mt-0 font-medium bg-primary-blue-light p-6" v-if="cartItems">
          <h1><span class="">Subtotal (5 items):</span></h1>
          <span class="flex justify-end">799516 NGN</span>

          <div class="flex justify-center items-center mt-6">
            <app-button color="primary" variant="contained" fullWidth to="/checkout"
              >Proceed to checkout</app-button
            >
            <!-- <AppButton
              buttonText=""
              color="fillbutton"
              size="md"
              class="w-full text-center"
            /> -->
          </div>
          
        </div>
		<div v-else></div>
		<div class="mt-6 bg-primary-blue-light p-4">
			<div>
				<h3 class="pt-2 text-sm font-medium text-black" >You recently viewed this items</h3>
			</div>
			<ContentsAddToCart v-for="n in 4" :key="n" />
		</div>
		
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue";

export default {
  components: {
    "app-button": AppButton,
  },
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    removeFromCart() {
      this.$store.commit("removeFromCart");
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped></style>

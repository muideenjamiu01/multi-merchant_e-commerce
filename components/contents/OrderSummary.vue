<template>
  <div>
    <div class="hidden lg:block bg-primary-blue-light w-96 p-4">
      <h1 class="pt-2">Order Summary</h1>
      <p class="my-3 text-gray-400">{{itemsCount}} items in cart</p>
      <div>
        <div
          v-for="item in cart"
          :key="item.product.id"
          class="flex justify-start items-start gap-2 mt-4"
        >
          <div>
            <img :src="item.product.images"
                	:alt="item.product.title" class="w-full h-12" />
          </div>
          <div>
            <div class="flex justify-between items-center gap-8">
              <p>{{ item.product.name }}</p>
              <p >#{{ Number(item.product.price).toLocaleString() }}</p>
            </div>
            <div>quantity: {{ item.quantity }}</div>
            <div>size:large</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-6">
        <span>Subtotal</span>
        <span  class="font-semibold text-lg"># {{Number(totalPrice).toLocaleString()}}</span>
      </div>
      
      
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
export default {
	computed: {
		...mapGetters({
      cart: "cart/cartProducts",
      totalPrice: "cart/cartTotalPrice",
      itemsCount: "cart/cartItemsCount",
    }),
    sumTotal() {
      return Number(this.totalPrice) + Number(this.shippingFee);
    },
    
  },
   mounted() {
    const cart = window.localStorage.getItem("ys-cart");
    this.$store.commit("cart/setCart", cart);
  },
   methods: {
	    ...mapActions("cart", ["addProductToCart", "removeProductFromCart"]),
	    getProductPhoto(images) {
      const photos = JSON.parse(images);
      return photos[photos.length - 1];
    },
   }
}
</script>

<style lang="scss" scoped></style>

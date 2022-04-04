<template>
  <div>
    <div @click="viewProduct(index)" class="h-48 cursor-pointer">
      <img :src="getProductImage(product.images)" class="w-[200px] h-full" :alt="product.name" />
    </div>
    <div @click="viewProduct" class="text-sm mt-2 w-full">
      <h1
        class="
          font-medium
          text-xl text-secondary-900
          hover:text-black
          cursor-pointer
          whitespace-nowrap
          overflow-hidden
          text-ellipsis 
          text-primary-blue
        "
      >
        {{ product.name }}
      </h1>
      <div class="flex items-center">
        <p class="text-2xl font-bold">******</p>
        <p class="text-primary-blue ml-2.5 w-[30px]" :style="`background-color:${product.color}`">&nbsp;</p>
      </div>
      <div class="flex items-center font-light my-2">
        <p  class="font-semibold text-lg">₦ {{ Number(product.price).toLocaleString() }}</p>
        <p class="text-primary-gray-light ml-2.5">-{{product.quantity}} %</p>
      </div>
    </div>
    <div class="flex">
      <app-button
        class="w-[100px]"
        @click="addProductToCart(product)"
        variant="contained"
        size="small"
        color="success"
      >
        Add to cart
      </app-button>
      <app-button
        class="mx-[5px] w-[100px]"
        @click="addToWishlist(product._id)"
        variant="contained"
        size="small"
        color="primary"
      >
        Add to wishlist
      </app-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    product: {},
    index: {},
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),

    viewProduct() {
      const rn = Math.ceil(Math.random() * 1000000)
      this.$router.push( 
        this.product.name.toLowerCase().split(" ").join("-") + "-" + rn
      );
      this.$store.dispatch("products/getSingleProduct", this.product);
    },
   
    getProductImage(images) {
      return images[0]
    },
  },
};
</script>

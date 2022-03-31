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
        <p class="text-primary-blue ml-2.5">213</p>
      </div>
      <div class="flex items-center font-light my-2">
        <p  class="font-semibold text-lg">#{{ Number(product.price).toLocaleString() }}</p>
        <p class="text-primary-gray-light ml-2.5">-{{product.quantity}} %</p>
      </div>
    </div>
    <app-button
      @click="addProductToCart(product)"
      variant="contained"
      size="small"
    >
      Add to cart
    </app-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    product: {},
    index: {},
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
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

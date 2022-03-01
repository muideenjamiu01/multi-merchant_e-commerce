<template>
  <div>
    <div @click="viewProduct" class="h-48 cursor-pointer">
      <img :src="product.image" class="w-full h-full" :alt="product.title" />
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
        "
      >
        {{ product.title }}
      </h1>
      <div class="flex items-center">
        <p class="text-2xl font-bold">******</p>
        <p class="text-primary-blue ml-2.5">213</p>
      </div>
      <div class="flex items-center font-light my-2">
        <p>{{ product.price }} dollars</p>
        <p class="text-primary-gray-light ml-2.5">-18%</p>
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
import AppButton from "@/components/buttons/Button.vue";

export default {
  components: {
    "app-button": AppButton,
  },
  props: ["product"],
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    viewProduct() {
      this.$router.push(
        "/" + this.product.title.toLowerCase().split(" ").join("-")
      );
    },
  },
};
</script>

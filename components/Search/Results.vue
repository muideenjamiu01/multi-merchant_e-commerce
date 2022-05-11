<template>
  <ul v-if="products.length > 0" class="m-0 py-2 px-0 relative list-none outline-0">
    <li
      v-for="product in products"
      :key="product._id"
      class=" border-0 m-0 rounded-none align-middle appearance-none">
      <app-button
        full-width
        color="secondary"
        size="large"
        class="!px-4"
        @click="() => { hide(); viewProduct(product); }"
      >
        <div class="w-12 h-12 shadow mr-2">
          <img
            :src="product.images[0]"
            :alt="product.name"
            class="w-full h-full"
          />
        </div>
        <div class="text-left grow text-inherit">
          <h4 class="font-medium truncate">{{ product.name }}</h4>
          <h6 class="text-sm">{{ product.price }}</h6>
        </div>
      </app-button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["products", "viewProduct", "hide"],
};
</script>

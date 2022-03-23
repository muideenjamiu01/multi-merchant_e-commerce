<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="font-bold mb-10 mt-8">Your Orders</h1>
      <ContentsCustomerOrderSummary />
      <div class="font-bold justify-end md:flex items-center md:space-x-6">
        <p>Price</p>
        <p>Date of Delivery</p>
        <p>Status</p>
      </div>
      <ContentsOrderslist v-for="item in products" :key="item" />
      <ContentsCustomerOrderSummary />
      <ContentsOrderslist v-for="n in 1" :key="n" />
      <ContentsCustomerOrderSummary />
      <ContentsOrderslist v-for="n in 1" :key="n" />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  middleware: "auth",
  computed: {
    ...mapGetters({
        orders:"orders/items"
     
    }),
  },
  mounted() {
	  console.log('fndsfns')
    this.$store.dispatch("orders/fetchOrders");
  },
  methods: {
    
   
    ...mapActions(["fetchOrders"]),
    getProductPhoto(images) {
      console.log(images);
      const photos = JSON.parse(images);
      return photos[photos.length - 1];
    },
  },
};
</script>

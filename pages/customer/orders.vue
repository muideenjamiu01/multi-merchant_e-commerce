<template>
  <app-container maxWidth="sm">
    <grid-container class="my-6 sm:my-8">
      <!-- <grid-item xs="fill"></grid-item> -->
      <grid-item xs="fill">
        <h1 class="text-2xl font-medium">Your Orders</h1>
        <div
          v-if="loading"
          class="flex justify-center items-center mt-24"
        >
          <LoadingSpinners size="large" color="primary" />
        </div>
        <div v-else
          v-for="order in orders.data"
          :key="order._id"
          class="border border-gray-300 rounded-lg mt-5 p-4"
        >
          <ContentsCustomerOrderSummary
            :transactionId="order._id"
            :orderDate="order.orderDate"
            :orderStatus="order.orderStatus"
            :totalCost="order.total / 100"
          />
          <div class="flex justify-between">
            <!-- -->
            <ContentsOrderslist :productName="order.products" />
          </div>
        </div>
      </grid-item>
    </grid-container>
  </app-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  middleware: "auth",
  computed: {
    ...mapGetters({
      orders: "orders/getOrders",
	   loading: "orders/loading",
    }),
  },
  mounted() {
    this.$store.dispatch("orders/fetchOrders");
  },
  methods: {
    ...mapActions(["fetchOrders"]),
    getProductPhoto(images) {
      const photos = JSON.parse(images);
      return photos[photos.length - 1];
    },
  },
};
</script>

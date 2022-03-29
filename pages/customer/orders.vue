<template>
  <app-container maxWidth="sm">
    <grid-container class="my-6 sm:my-8">
      <!-- <grid-item xs="fill"></grid-item> -->
      <grid-item xs="fill">
          <h1 class="text-2xl font-medium">Your Orders</h1>
      <div
        v-for="order in orders.data"
        :key="order._id"
        class="border-gray-900"
      >
        <ContentsCustomerOrderSummary
          :transactionId="order._id"
          :orderDate="order.orderDate"
          :totalCost="order.total"
		  
        />
        <div >
			<!-- -->
		<ContentsOrderslist
          :productName="order.products"
          :orderStatus="order.orderStatus"
        />
		</div>
        <div class="font-bold justify-end md:flex md:space-x-6">
          <p>Price</p>
          <p>Status</p>
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
    }),
  },
  mounted() {
    console.log(this.orders);
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

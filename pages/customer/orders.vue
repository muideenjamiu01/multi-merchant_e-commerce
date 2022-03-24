<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="font-bold mb-10 mt-8">Your Orders</h1>
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
    </main>
  </div>
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

<template>
  <div class="px-4 py-8 flex gap-8">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="font-bold mb-10 mt-8">Your Orders</h1>
      <div
        v-for="order in orders.data"
        :key="order._id"
        class="border border-gray-300 rounded-lg mt-5 p-4"
      >
        <ContentsCustomerOrderSummary
          :transactionId="order._id"
          :orderDate="order.orderDate"
		  :orderStatus="order.orderStatus"
		  :shippingFee="shippingFee"
          :totalCost="order.total"
		  
        />
        <div class="flex justify-between" >
			<!-- -->
		<ContentsOrderslist
          :productName="order.products"
          
        />
		<!-- <div class="font-bold justify-end md:flex md:space-x-6">
          <p>Price</p>
          <p>Status</p>
        </div> -->
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
    
    this.$store.dispatch("orders/fetchOrders");
  },
  methods: {
    ...mapActions(["fetchOrders"]),
    
  },
};
</script>

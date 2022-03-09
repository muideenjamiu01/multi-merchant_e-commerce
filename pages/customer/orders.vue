<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="font-bold mb-10 mt-8">
        Your Orders
      </h1>
      <ContentsCustomerOrderSummary />
      <div class="font-bold justify-end md:flex items-center md:space-x-6">
        <p>Price</p>
        <p>Date of Delivery</p>
        <p>Status</p>
      </div>
      <ContentsOrderslist v-for="n in 3" :key="n" />
      <ContentsCustomerOrderSummary />
      <ContentsOrderslist v-for="n in 1" :key="n" />
      <ContentsCustomerOrderSummary />
      <ContentsOrderslist v-for="n in 1" :key="n" />
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    ...mapGetters({
      orders: "orders/getOrders",
    }),
  },
  mounted() {
    const orders = window.localStorage.getItem("ys-orders");
    this.$store.commit("orders/setOrders", orders);
  },
}
</script>

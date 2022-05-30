<template>
  <div>
    <div class="w-full grid xs:grid-cols-4 md:grid-rows-none gap-x-3 mb-8">
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Orders Placed</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >{{ orders.length }}</span
        >
        <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>In progress</p>
          <p>{{ ordersInProgress.length }}</p>
        </div>
      </div>
      <!-- <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Shipped</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >1,902</span
        >
        <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>This month</p>
          <p>+3042</p>
        </div>
      </div> -->
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Dispatch</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >{{ ordersDispatched.length }}</span
        >
        <!-- <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>This month</p>
          <p>+3042</p>
        </div> -->
      </div>
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Delivered</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >{{ ordersDelivered.length }}</span
        >
        <!-- <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>This month</p>
          <p>36930</p>
        </div> -->
      </div>
    </div>

    <app-table class="mt-8 bg-white">
      <template #toolbar>
        <table-toolbar :title="title">
          <template #buttons>
            <icon-button square>
              <filter-icon size="small" color="primary" />
            </icon-button>
          </template>
        </table-toolbar>
      </template>

      <template #tr-head>
        <table-row>
          <table-cell v-for="column in columns" :key="column" variant="th">
            {{ column }}
          </table-cell>
        </table-row>
      </template>

      <template #tr-body>
        <div
          v-if="loading"
          class="flex items-center justify-center w-full mt-8"
        >
          <loading-spinners size="medium" color="secondary" />
        </div>
        <offline v-else-if="$nuxt.isOffline"></offline>
        <h2 v-else-if="error" class="text-xl mt-8 w-full text-secondary-600">
          Ooops, An has error occurred.
        </h2>

        <template v-else>
          <table-row v-for="order in orders" :key="order._id" class="truncate">
            <table-cell>{{ order._id }}</table-cell>
            <table-cell>{{ order.customerId }}</table-cell>
            <table-cell>{{ order.total }}</table-cell>
            <table-cell>{{ order.orderStatus }}</table-cell>
            <table-cell>{{ order.orderDate }}</table-cell>
          </table-row>
        </template></template
      >
    </app-table>
  </div>
</template>

<script>
import AppTable from "@/components/Table";
import TableHeader from "@/components/Table/Toolbar.vue";
import AddIcon from "@/components/svg/Add.vue";
import FilterIcon from "@/components/svg/Filter.vue";
export default {
  layout: "admin",
  components: {
    AppTable,
    TableHeader,
    AddIcon,
    FilterIcon,
  },
  data() {
    return {
      title: "Orders",
      columns: [
        "Order ID",
        "Customer ID",
        "Total Price",
        "Status",
        "Date Created",
      ],
      data: {
        _id: "29892739",
        name: "Ellie Gonçalves",
        merchant: "Global Ventures",
        customer: "Chima Ilo",
        quantiy: "18",
        status: "Delivered",
        created: new Date("2021-02-06 07:37:07.658872"),
      },
      loading: false,
      error: null,
      orders: [],
    };
  },
  computed: {
    ordersDelivered() {
      return this.orders.filter((order) => order.deliveryStatus == "Delivered");
    },
    ordersDispatched() {
      return this.orders.filter(
        (order) => order.deliveryStatus == "Dispatched"
      );
    },
    ordersInProgress() {
      return this.orders.filter((order) => order.orderStatus == "Pending");
    },
  },
  methods: {
    async getOrders() {
      this.loading = true;
      try {
        const response = await this.$axios.get("/api/order", {
          // params: {
          //   orderStatus: "Pending",
          //   deliveryStatus: "Pending",
          // },
        });
        this.orders = response.data.data;
      } catch (error) {
        this.error = error.response.data.msg;
        this.$toast.error(error.response.data.msg);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

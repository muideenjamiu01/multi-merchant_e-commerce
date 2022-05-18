<template>
  <div>
    <div class="w-full grid xs:grid-cols-4 md:grid-rows-none gap-x-3 mb-8">
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Orders Placed</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >1,530</span
        >
        <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>In progress</p>
          <p>844</p>
        </div>
      </div>
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Shipped</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >1,902</span
        >
        <!-- <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>This month</p>
          <p>+3042</p>
        </div> -->
      </div>
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Dispatch</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >1,283</span
        >
        <!-- <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>This month</p>
          <p>+3042</p>
        </div> -->
      </div>
      <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
        <p class="font-medium text-base">Delivered Today</p>
        <span
          class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold"
          >1,495</span
        >
        <div class="flex justify-between items-center mt-2 font-normal text-sm">
          <p>This month</p>
          <p>36930</p>
        </div>
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
        <table-row v-for="row in data" :key="row._id">
          <table-cell>{{ row._id }}</table-cell>
          <table-cell>{{ row.storeName }}</table-cell>
          <table-cell>{{ row.name }}</table-cell>
          <table-cell>{{ row.email }}</table-cell>
          <table-cell>{{ row.status }}</table-cell>
          <table-cell>{{
            new Date(row.lastSeen).toLocaleDateString("en-US")
          }}</table-cell>
          <table-cell>{{
            new Date(row.created).toLocaleDateString("en-US")
          }}</table-cell>
        </table-row>
      </template>
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
        "ID",
        "Name",
        "Merchant",
        "Customer",
        "Quantity",
        "Status",
        "Date Created",
      ],
      data: [],
    };
  },
};
</script>

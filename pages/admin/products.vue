<template>
    <app-table :columns="columns" :data="data">
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
        <table-row v-for="i in 20" :key="i">
          <table-cell>{{ data._id }}</table-cell>
          <table-cell>{{ data.name }}</table-cell>
          <table-cell>{{ data.merchant }}</table-cell>
          <table-cell>{{ data.category }}</table-cell>
          <table-cell>{{ data.quantity }}</table-cell>
          <table-cell>{{ data.status }}</table-cell>
          <table-cell>{{
            new Date(data.created).toLocaleDateString("en-US")
          }}</table-cell>
        </table-row>
      </template>
    </app-table>
      
</template>

<script>
import AppTable from "@/components/Table";
import TableHeader from "@/components/Table/Toolbar.vue";
import AddIcon from "@/components/svg/Add.vue";
import FilterIcon from "@/components/svg/Filter.vue";

export default {
layout: "admin",
  // middleware: "auth-merchant",
  components: {
    AppTable,
    TableHeader,
    AddIcon,
    FilterIcon,
  },
  data() {
    return {
      title: "Products",
      columns: [
        "ID",
        "Name",
        "Merchant",
        "Category",
        "Quantity",
        "Status",
        "Date Created",
      ],
      data: {
        _id: "29892739",
        name: "Ellie Gonçalves",
        merchant: "Becker & Sons.",
        category: "Computing",
        quantity: Math.floor(Math.random() * 10),
        status: "Pending",
        created: new Date("2021-02-06 07:37:07.658872"),
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

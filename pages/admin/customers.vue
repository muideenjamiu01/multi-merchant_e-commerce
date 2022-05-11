<template>
  <app-table>
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
        <table-cell>{{ row.accountName }}</table-cell>
        <table-cell>{{ row.email }}</table-cell>
        <table-cell>{{ row.phone }}</table-cell>
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
</template>

<script>
import AppTable from "@/components/Table";
import TableHeader from "@/components/Table/Toolbar.vue";
import AddIcon from "@/components/svg/Add.vue";
import FilterIcon from "@/components/svg/Filter.vue";

export default {
  layout: "merchant",
//   middleware: "auth-merchant",
  components: {
    AppTable,
    TableHeader,
    AddIcon,
    FilterIcon,
  },
  data() {
    return {
      title: "Customers",
      columns: [
        "ID",
        "Name",
        "Email",
        "Phone",
        "Status",
        "Last Seen",
        "Date Created",
      ],
      data: [],
    };
  },
};
</script>

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
      <table-row v-for="i in 20" :key="i">
        <table-cell>{{ data._id }}</table-cell>
        <table-cell>{{ data.storeName }}</table-cell>
        <table-cell>{{ data.accountName }}</table-cell>
        <table-cell>{{ data.email }}</table-cell>
        <table-cell>{{ data.status }}</table-cell>
        <table-cell>{{
          new Date(data.lastSeen).toLocaleDateString("en-US")
        }}</table-cell>
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
  // middleware: 'auth-merchant',
  components: {
    AppTable,
    TableHeader,
    AddIcon,
    FilterIcon,
  },
  data() {
    return {
      title: "Merchants",
      columns: [
        "ID",
        "Name of Store",
        "Name",
        "Email",
        "Status",
        "Last Seen",
        "Date Created",
      ],
      data: {
        _id: "19577601",
        storeName: "Conyers Park Acquisition Corp.",
        accountName: "Consuelo Abisetti",
        email: "blongmate0@w3.org",
        status: "verified",
        lastSeen: new Date("2022-04-22 10:35:23.305562"),
        created: new Date("2022-03-14 17:13:12.426191"),
      },
    };
  },
};
</script>

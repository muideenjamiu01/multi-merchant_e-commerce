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
        <table-cell>{{ data.email }}</table-cell>
        <table-cell>{{ data.phone }}</table-cell>
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
  // middleware: "auth-merchant",
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
      data: {
        _id: "29892739",
        name: "Ellie Gonçalves",
        email: "ellie.goncalves@example.com",
        phone: "08004291019",
        status: "verified",
        lastSeen: new Date("2022-03-14 17:14:29.847696"),
        created: new Date("2021-02-06 07:37:07.658872"),
      },
    };
  },
};
</script>

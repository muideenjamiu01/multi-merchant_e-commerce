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
        <table-row v-for="(product, index) in allProducts" :key="index">
          <table-cell >{{ index }}</table-cell>

          <table-cell align='left' >{{ product._id }}</table-cell>
          <table-cell align='left'>{{ `${product.name[0].toUpperCase()}${product.name.slice(1)}` }}</table-cell>
          <table-cell align='left'>{{ data.merchant }}</table-cell>
          <table-cell align='left'>{{ `${product.category[0].toUpperCase()}${product.category.slice(1)}` }}</table-cell>
          <table-cell>{{ product.quantity }}</table-cell>
          <table-cell>{{
            new Date(product.createdAt).toLocaleDateString("en-US")
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
      allProducts : [],
      title: "Products",
      columns: [
        "S/No.",
        "ID",
        "Name",
        "Merchant",
        "Category",
        "Quantity",
        "Date Created",
      ],
      data: {
        merchant: "Becker & Sons.",
      },
    };
  },
  async mounted() {
    await this.$store.dispatch('merchant-products/getAllProducts')
    this.allProducts = this.$store.getters['merchant-products/allProducts']
    console.log(this.allProducts)

  },
  
};
</script>

<style lang="scss" scoped></style>

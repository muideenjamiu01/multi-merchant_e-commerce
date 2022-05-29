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
          <table-cell >{{ index+1 }}</table-cell>

          <table-cell align='left' >{{ product._id }}</table-cell>
          <table-cell align='left'>{{ `${product.name[0].toUpperCase()}${product.name.slice(1)}` }}</table-cell>
          <table-cell align='left'>{{  data.merchant }}</table-cell>
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
  methods: {
    async getMerchantDetails(id) {
      try {
      const response = await this.$axios.get(
        // "https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/",
        `https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/${id}`
      );
      console.log('merchantname', response.data.data.storeName);
      return response.data.data.storeName
      // this.$toast.success(response.data.msg)
      // commit("setMerchantDetails", response.data.data.storeName);

      
        // commit("setPagination", {...meta, ..._links});
      } catch (error) {
        return 'manos'
        // this.$toast.error(error.response.data.msg);
        // commit("setError", error.message);
      } finally {
        // commit("setLoading", false);
      }
  },
    
  },
  async mounted() {
    await this.$store.dispatch('merchant-products/getAllProducts')
    this.allProducts = this.$store.getters['merchant-products/allProducts']
  //   // console.log(this.allProducts);
  //   const newProducts = [...this.allProducts]
  //   // console.log(newProducts)
  //   //  for (const x in newProducts) {
  //   //    console.log(x.category)
  //   //    x.nationality = "English";
  //   //   }
  //   newProducts.forEach(myFunction);

  //    function getMd (id) {
  //     try {
  //     const response = $nuxt.$axios(
  //       `https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/${id}`
  //     ).then(value => {ret})
  //     // console.log('merchantname', response.data.data.storeName);
  //     return response.data.data.storeName
  //     // return `manos ${id}`
  //     } catch {
  //       return 'man'

  //     } finally {
  //       return 'womanos'

  //     }
  //   };
   
  //  function myFunction(item, index) {
     
  //    item.merchantName =  getMd(item.merchantId);
  //   console.log( item.merchantName);
  // };
    
  },
  
  
};
</script>

<style lang="scss" scoped></style>

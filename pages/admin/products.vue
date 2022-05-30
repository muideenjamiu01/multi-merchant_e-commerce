<template>
  <div>
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
          <table-cell v-if="hasPermission('view-users')">
            <app-button
              type="button"
              variant="outlined"
              size="small"
              color="secondary"
              @click="viewUser(row._id)"
            >
              view
            </app-button>
          </table-cell>
        </table-row>
      </template>
    </app-table>

     <transition name="fade">
      <app-modal
        v-if="isModalOpen"
        :open="isModalOpen"
        :close-modal="closeModal"
      >
        <template #header>
          <div class="flex items-center flex-grow">
            <user-avatar
              :alt="customer.firstName"
              :src="customer.avatar"
              size="medium"
            />
            <h2 class="font-medium text-xl truncate ml-2">
              {{ customer.firstName + ' ' + customer.lastName }}
            </h2>
          </div>
        </template>
        <template #content>
          <div class="flex items-center my-4">
            <p class="w-[calc(50%_-_16px)] truncate">
              Orders: {{ getOrdersCount }}
            </p>
            <p class="w-[calc(50%_- 16px)] ml-8 truncate">
              Wishlist: {{ getOrdersCount + getOrdersCount }}
            </p>
          </div>

          <form class="mt-8" >
            <text-input
              v-model="input.firstName"
              type="text"
              class="min-w-[300px] !my-8"
              name="storeName"
              required
            >
              First Name
            </text-input>
            <text-input
              v-model="input.lastName"
              type="text"
              class="min-w-[300px] !my-8"
              name="name"
              required
            >
              Last Name
            </text-input>
            <text-input
              v-model="input.email"
              type="email"
              class="min-w-[300px] !my-8"
              name="email"
              required
            >
              Email
            </text-input>
            <text-input
              v-model="input.phone"
              type="text"
              class="min-w-[300px] !my-8"
              name="phone"
              required
            >
              Phone
            </text-input>
            <text-input
              v-model="input.address"
              type="text"
              class="min-w-[300px] !my-8"
              name="address"
              required
            >
              Address
            </text-input>
            <div class="flex items-center mt-8 gap-4">
              <input
                id="verified"
                v-model="input.verified"
                type="checkbox"
                class=""
              />
              <label for="verified" class=""> Verified </label>
            </div>
            <div v-if="hasPermission('sanction-users')" class="flex items-center my-4 gap-4">
              <input
                id="suspended"
                v-model="input.suspended"
                type="checkbox"
                class=""
              />
              <label for="suspended" class=""> Suspended </label>
            </div>
            <div class="flex justify-end">
              <app-button
                variant="contained"
                color="success"
                :disabled="loading"
                type="submit"
                class="pl-4 ml-3"
              >
                {{ loading ? "Submitting" : "Submit" }}
                <loading-spinners
                  v-if="loading"
                  size="small"
                  color="white"
                  class="mx-4"
                ></loading-spinners>
              </app-button>
            </div>
          </form>
        </template>
      </app-modal>
    </transition>
      </div>
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
      isModalOpen: false,
      data: {
        merchant: "Becker & Sons.",
      },
      customer: null
    };
  },
  methods: {
    viewUser(id) {
      this.isModalOpen = true
      this.customer = this.data.filter(user => user._id === id)[0]
      this.input.firstName = this.customer.firstName;
      this.input.lastName = this.customer.lastName;
      this.input.email = this.customer.email;
      this.input.phone = this.customer.phoneNo;
      this.input.address = this.customer.address;
      this.input.suspended = this.customer.isRestricted;
      this.input.verified = this.customer.isVerified;
    },
    closeModal() {
      this.customer = null
      this.isModalOpen = false
    },
    hasPermission(permission) {
      const adminPerms = this.$auth.user.permissions;
      return adminPerms && adminPerms.includes(permission);
    },
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

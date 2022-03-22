<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full">
      <section class="antialiased text-gray-600 h-screen">
        <div class="flex flex-col">
          <!-- Table -->
          <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-bold text-black">
                Customers
              </h2>
            </header>
            <div class="p-3 bg-white">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-black bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">
                          S/No.
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">
                          Name
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">
                          Email
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">
                          Phone
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">
                          Date
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    <tr v-for="(customer, index) in customers" :key="customer.id">
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="font-medium text-gray-800">
                            {{ index+1 }}
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="font-medium text-gray-800">
                            {{ customer.firstName }}{{ customer.lastName }}
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">
                          {{ customer.email }}
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium">
                          {{customer.phone}}
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-lg text-center">
                         {{customer.created_on.substring(0, 10)}}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                 <div class="pb-0 pt-3 text-center">
                  <jw-pagination 
                    class="rounded-xl text-white pb-0 pt-3" 
                    :items="pageOfItems" 
                    @changePage="onChangePage" 
                    :labels="customLabels"
                    :styles="customStyles"
                    >
                  </jw-pagination>
                </div>
        
              </div>
            </div>
          </div>
          
           
        </div>
      </section>
    </main>
    
  </div>
</template>

<script>

  import { mapGetters, mapActions } from "vuex";
  import JwPagination from "jw-vue-pagination/lib/JwPagination";
  const customStyles = {
    ul: {
        borderRadius: '10px'

    },
    li: {
        color: 'white',
        display: 'inline-flex',
        flexDirection: 'row',
        backgroundColor: '#46b2c8',
        borderRadius: '10px',
        marginLeft: '5px'
    },
    a: {
        color: 'white',
        borderRadius: '10px'
    },
   
  };
  
  const customLabels = {
      first: '<<',
      last: '>>',
      previous: '<',
      next: '>'
  };


export default {
  layout: 'merchant',
  middleware: 'auth-merchant',
  data () {
    return {
      customStyles,
      customLabels,
      pageOfItems: [],
   
    }
  },

  computed: mapGetters({
    customers: "customers/customers",
    loading: "customers/loading",
    errors: "customers/errors",
  }),
  mounted() {
      this.$store.dispatch("customers/fetchCustomers");
  },
  methods: {
    ...mapActions(["fetchCustomers"]),
        onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
  
  components: {
    JwPagination,
  },
}
</script>

<style>

</style>
   
   
<template>
  <div class="flex mt-8 px-4">
      <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="md:ml-72 md:w-[calc(100%_-_288px)]">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl">Products</h1>
        <NuxtLink to="products/newproduct">
          <app-button  size="small" variant="contained">
            Add Product
          </app-button>
        </NuxtLink>
      </div>
      <div>
        <table
          class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
        >
          <thead class="py-3 border-b font-medium text-center">
            <tr>
              <th class="pb-3 text-left text-center">
                S/No.
              </th>
              
              <th class="pb-3 text-left text-center">
                Description
              </th>
              <th class="pb-3">
                Price
              </th>
              <th class="pb-3 text-center">
                Discount (%)
              </th>
              <th class="pb-3">
                Sold
              </th>
              <th class="pb-3">
                Avg. Rating
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(product, index) in products" :key="product.id" class="border-b">
               <td> {{ index+1 }}</td>
              <td class="flex gap-4 py-3 text-left">
                  <img 
                  :src="getProductImage(product.images)" 
                  width="65px" height="65px" 
                  :alt="product.name">
                <div>
                  <h1>
                    {{product.name}}
                  </h1>
                  <p>{{product.sizes}}</p>
                  <div>Color: {{product.color}}
                    <p width="5px" height="5px" style="background-color:red; display:inline"> 
                    </p>
                  </div>
                  <p> Quantity: {{product.quantity}}</p>
                </div>
              </td>
              <td> {{product.price}}</td>
              <td>{{ Math.floor(Math.random() * 40) }}%</td>
              <td>{{ product.sold }}</td>
              <td>{{ Math.floor(Math.random() * 5) }}</td>
            </tr>
          </tbody>
         
        </table>
        <div class="pb-0 pt-3 text-center">
          <jw-pagination 
            class="rounded-xl text-white pb-0 pt-3" 
            :items="products" 
            @changePage="onChangePage" 
            :labels="customLabels"
            :styles="customStyles"
            >
          </jw-pagination>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import AppButton from "@/components/buttons/Button.vue"
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
    data () {
    return {
      customStyles,
      customLabels,
      pageOfItems: [],
      }
    },
      components: {
        'app-button': AppButton,
          JwPagination,
      },
        computed: mapGetters({
        products: "products/products",
        loading: "products/loading",
        errors: "products/errors",
      }),
        mounted() {
          this.$store.dispatch("products/fetchProducts")

      },
      methods: {
        onChangePage(p) {
          // update page of items
          this.pageOfItems = p;
        },
        ...mapActions(["fetchProducts"]),
        getProductImage(images) {
         
          return  `https://www.cnet.com/a/img/resize/bf0ae84431f323812b4579499e23ee54870e5cc6/2022/03/15/25776d32-cf18-422e-9094-f5b4f991de56/mac-studio-and-mac-studio-display-002-copy.jpg?auto=webp&fit=crop&height=236&width=420`
        },
        // getProductColor(color) {
        //   const colors = JSON.parse(color);
        //   return color[colors.length - 1];
        // },
      },
  }
</script>
<template>
  <div class="flex mt-8 px-4">
      <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="md:ml-72 md:w-[calc(100%_-_288px)]">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl">Products</h1>
        <!-- <form 
          enctype="mutipart/form-data">
          <label for="file">Update An Image</label>
          <input 
            type="file" 
            @change="selectFile"
            ref="file"
          >
         
        </form> -->
        <NuxtLink to="products/newproduct">
          <app-button  size="small" variant="contained">
            Upload A New Product
          </app-button>

        </NuxtLink>
      </div>
      <div>
        <table
          class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
        >
          <thead class="py-3 border-b font-medium text-center">
            <tr>
              <th class="pb-3 text-center">
                S/No.
              </th>
              <th class="pb-3 text-center">
                Image
              </th>
              <th class="pb-3 text-center">
                Description
              </th>
              <th class="pb-3">
                Price (NGN)
              </th>
              <th class="pb-3 text-center">
                Discount (%)
              </th>
              <th class="pb-3">
                No. of Items Sold
              </th>
              <th class="pb-3">
                Avg. Rating
              </th>
               <th class="pb-3">
                Delete Product
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(product, index) in products" :key="product._id" class="border-b">
              <td> {{ index+1 }}</td>
              <td> 
                <img 
                  :src="getProductImage(product.images)" 
                  width="65px" height="65px" 
                  :alt="product.name"
                  @dblclick="updatePicture(product._id)"
                >
              </td>
              <td class="py-3 text-left pl-[50px] w-[200px]">
                  <h1>
                    {{product.name}}
                  </h1>
                  <h1>
                    {{product.category}}
                  </h1>
                  <p>Size: {{product.size}}</p>
                  <div>Color: {{product.color}}
                    <p width="5px" height="5px" :style="getProductColor(product.color)"> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                  <p> Quantity: {{product.quantity}}</p>
              </td>
              <td>{{Number(product.price).toLocaleString()}}</td>
              <td>{{ Math.floor(Math.random() * 40) }}%</td>
              <td>{{ product.sold }}</td>
              <td>{{ Math.floor(Math.random() * 5) }}</td>
              <td><app-button variant="contained" color="error" class="my-[10px] bg-rose-300" @click="deleteProduct(product._id)">X</app-button></td>
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
          JwPagination,
      },
        computed: mapGetters({
        products: "merchant-products/products",
        loading: "products/loading",
        errors: "products/errors",
      }),
        mounted() {
          this.$store.dispatch("merchant-products/fetchProducts")
      },
      methods: {
        onChangePage(p) {
          // update page of items
          this.pageOfItems = p;
        },
        ...mapActions(["fetchProducts"]),
        getProductImage(images) {
          return images[0];
        },
        getProductColor(color) {
          return `background-color:${color}; display:inline;`;
        },
        async deleteProduct(id) {
          try {
            const response = await this.$axios.delete (
              `https://youstore-products.herokuapp.com/v1/products/${id}/remove`
            );
            console.log(response);
            this.$toast.success('Product deleted')

          } catch (error) {
            if (error.response.data.msg === "Cannot delete another merchant's product") {
              console.log(error.response.data.msg)
            this.$toast.error(error.response.data.msg)

            }
            else {
               console.log(error.response)
            }
          } finally {
            console.log("product deleted finally")
          }
        },
        selectFile() {
          this.file = this.$refs.file.files[0];
          this.$toast.success('Please select a product image by double clicking to update with this image')
        },
        async updatePicture(id) {
          const formData = new FormData();
          formData.append('images', this.file)
          try {
            const response = await this.$axios.post(`/api/products/v1/products/${id}/upload`, formData)
              this.$toast.success('Image Successfully added')
              this.$router.go(-1)
          } catch (err) {
            console.log(err);
          } finally {
            
          }
        }
      },
  }
</script>
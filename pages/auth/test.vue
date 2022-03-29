<template>
  <div>
     <form 
        enctype="mutipart/form-data">
        <label for="file">Upload File</label>
        <input 
          type="file" 
          @change="selectFile"
          ref="file"
        >
        <app-button class="my-[10px]" variant="contained"   @click="sendFile">Upload Image</app-button>
      </form>
      <h1 class="text-center" >{{$store.state.counter}}</h1>
      <app-button class="my-[10px]" variant="contained"   @click="fetchProducts">fetch products</app-button>
      <app-button class="my-[10px] bg-rose-500" variant="contained"   @click="deleteProduct">delete products</app-button>

      <app-button class="my-[10px]" variant="contained"    @click="$store.dispatch('add')">+</app-button>
      <app-button class="my-[10px]" variant="contained"   @click="$store.commit('subtract')">-</app-button>
      <table>
      <tbody class="text-center">
            <tr v-for="(product, index) in merchantProducts" :key="product._id" class="border-b">
              <td> {{ index+1 }}</td>
              <td> 
                <img 
                  :src="getProductImage(product.images)" 
                  width="65px" height="65px" 
                  :alt="product.name"
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
              <td> {{product.price}}</td>
              <td>{{ Math.floor(Math.random() * 40) }}%</td>
              <td>{{ product.sold }}</td>
              <td>{{ Math.floor(Math.random() * 5) }}</td>
             
              <td><app-button class="my-[10px]" variant="contained" color="error" @click="deleteProduct(product._id)">X</app-button></td>
            </tr>
          </tbody>
          </table>


  </div>
</template>
<script>
  import AppButton from "@/components/buttons/Button.vue"
  export default {
    data() {
          return {
            file: "",
            merchantProducts : []
          }
    },
    components: {
      "app-button": AppButton,
    },
    methods: {
      add() {
          console.log('clicked');
          this.counter++
      },
      subtract() {
        console.log('clicked');
        this.counter--
      },
      selectFile() {
        this.file = this.$refs.file.files[0];
        console.log(this.$refs)
      },
      async sendFile(id) {
        const formData = new FormData();
        formData.append('images', this.file)
        try {
          const response = await this.$axios.post(`/api/products/v1/products/6225f30adb3757e1f419aff1/upload`, formData)
            console.log(response);
            this.$toast.success('Image Successfully added')
        } catch (err) {
          console.log(err);
        } finally {}
      },
      async fetchProducts() {
        try {
          const response = await this.$axios.get(
            "/api/products/v1/products/merchant-products",
            {
              params: {
                page: 1,
                limit: 50,
              },
            }
          );
          console.log(response.data.data);
          this.$toast.success('products retrieved')
          this.merchantProducts = response.data.data
        } catch (error) {
          console.log(error)
        } finally {
        }
      },
      async deleteProduct(id) {
          try {
             const response = await this.$axios.delete (
              `https://youstore-products.herokuapp.com/v1/products/${id}/remove`
            );
            console.log(response);
            this.$toast.success('products deleted')

          } catch (error) {
          console.log(error)
          } finally {
            console.log("product deleted finally")
          }
      },
      getProductImage(images) {
        return images[0];
      },
      getProductColor(color) {
        return `background-color:${color}; display:inline;`;
      },
      
    },
  }
</script>


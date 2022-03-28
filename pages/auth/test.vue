<template>
  <div>
    <form 
    @submit.prevent="sendFile"
      enctype="mutipart/form-data">
      <label for="file">Upload File</label>
      <input 
        type="file" 
        @change="selectFile"
        ref="file"
      >
       <app-button class="my-[10px]" variant="contained"   @click="sendFile">Send File</app-button>
    </form>
      <h1 class="text-center" >{{$store.state.counter}}</h1>
      <app-button class="my-[10px]" variant="contained"   @click="fetchProducts">fetch products</app-button>
      <app-button class="my-[10px] bg-rose-500" variant="contained"   @click="deleteProduct">delete products</app-button>

      <app-button class="my-[10px]" variant="contained"    @click="$store.dispatch('add')">+</app-button>
      <app-button class="my-[10px]" variant="contained"   @click="$store.commit('subtract')">-</app-button>
  </div>
</template>
<script>
  import AppButton from "@/components/buttons/Button.vue"
  export default {
    data() {
          return {
            file: ""
          
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
      selectFile () {
        alert('file selected');
        this.file = this.$refs.file.files[0];
      },
      async sendFile () {
        const formData = new FormData();
        formData.append('file', this.file)
        try {
          const response = await this.$axios.post(
            "/api/products/v1/products/6231f72fb685982598857022/upload", formData)
            
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
                // category: "computing",
                limit: 50,
              },
            }
          );
          console.log(response.data.data);
          this.$toast.success('products retrieved')

        } catch (error) {
          console.log(error)
        } finally {
        }
      },
      async deleteProduct(id) {
          try {
            const response = await this.$axios.delete (
              "https://youstore-products.herokuapp.com/v1/products/623ecbbde47a33a2826b4d9a/remove"
            );
            console.log(response);
            this.$toast.success('products deleted')

          } catch (error) {
          console.log(error)
          } finally {
            console.log("product deleted finally")
          }
      },
      
    },
  }
</script>


<template>
  <div class="text-sm font-light pt-4 border-t border-gray-100 mb-6">
    <div class="md:flex items-center justify-between">
        <div class="md:flex">
          <div class="w-24 h-24 bg-primary-gray mr-4" />
          <div class="space-y-0.5">
            <h1 class="font-medium">
              
            </h1>
            <p>Size:</p>
            <p>Color:</p>
            <p>Quantity: </p>
          </div>
        </div>
        <td class="p-2 whitespace-nowrap">
          <p class="mx-5">
            
          </p>
        </td>
        <td class="p-2 whitespace-nowrap">
          <p class="mx-10">
            12 / 01 / 2022
          </p>
        </td>
        <td class="p-2 whitespace-nowrap">
          <p class="mx-1">
            Delivered
          </p>
        </td>
      </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data () {
    return {

    }
  },
  computed:{
	  ...mapGetters({
      product: "products/products",
	  
	  })
  },
  
  method:{
	  ...mapActions("products", ["fetchProducts"]),
	  
  }
  
}
</script>
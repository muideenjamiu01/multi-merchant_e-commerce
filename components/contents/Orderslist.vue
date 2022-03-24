<template>
  <div class="text-sm font-light pt-4 border-t border-gray-100 mb-6" >
    <div class="md:flex items-center justify-between" v-for="item in productName" :key="item._id"  >
        <div class="md:flex" >
          <div class="w-24 h-24 bg-primary-gray mr-4" />
          <div class="space-y-0.5">
            <h1 class="font-medium">
              {{item.name}}
            </h1>
            <p>Size: {{item.size}}</p>
            <p>Color:{{item.color}}</p>
            <p>Quantity:{{item.quantity}} </p>
          </div>
        </div>
        <td class="p-2 whitespace-nowrap">
          <p class="mx-5">
            {{item.price}}
          </p>
        </td>
        
        <td class="p-2 whitespace-nowrap">
          <p class="mx-1">
    			{{orderStatus}}
          </p>
        </td>
      </div>
    </div>
</template>


<script>

export default {
  data () {
    return {

    }
  },
  props:[
		"productName",
		"orderStatus"
		// "price",
		// "status",
		// "size",
		// "color",
		// "quantity",
	],
	mounted() {
		console.log(this.productName)
		console.log(this.quantity)
		console.log(this.status)
	}
  
  
}
</script>
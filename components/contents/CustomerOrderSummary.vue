<template>
  <div border-t-4 border-b-8 >
    <div>
	<p class="my-3">

      Transaction ID:{{transactionId}}
	  
    </p>
	
    <p class="my-3">
      Date of purchase:{{orderDate}}
    </p>
    <!-- <p class="my-3">
      Shipping Fee:{{shippingFee}}
    </p> -->
	<p class="my-3">Status: {{orderStatus}}</p>
    <p class="my-3">
      Total cost: {{totalCost}}
    </p>
	</div>
  </div>
</template>
<script>
export default {
	methods:{
		
	},
	props:[
		"order",
		"transactionId",
		"orderDate",
		"shippingFee",
		"orderStatus",
		"totalCost",
	],
	mounted(){
		
	}
}
</script>

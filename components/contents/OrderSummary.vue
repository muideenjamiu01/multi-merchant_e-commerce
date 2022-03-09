<template>
  <div>
    <div class="hidden lg:block bg-primary-blue-light w-96 p-4">
      <h1 class="pt-2">Order Summary</h1>
      <p class="my-3 text-gray-400">{{ item.length }} items in cart</p>
      <div>
        <div
          v-for="item in 3"
          :key="item"
          class="flex justify-start items-start gap-2 mt-4"
        >
          <div>
            <img src="" alt="" class="w-12 h-12" />
          </div>
          <div>
            <div class="flex justify-between items-center gap-8">
              <p>Women's Los Angeles C...</p>
              <p>23958.00</p>
            </div>
            <div>quantity:1</div>
            <div>size:large</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-6">
        <span>Subtotal</span>
        <span>402080.00</span>
      </div>
      <div class="flex justify-between items-center mt-4">
        <span>Delivery fee</span>
        <span>1000.00</span>
      </div>
      <p class="text-gray-400 text-xs">
        International Shipping (8-10 <br />
        Days) - Flate Rate
      </p>
      <div class="flex justify-between items-center mt-6">
        <span>Total</span>
        <span>462080.00</span>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
	computed: {
		
    
  },
   methods: {
   }
}
</script>

<style lang="scss" scoped></style>

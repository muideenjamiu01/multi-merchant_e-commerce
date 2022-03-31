<template>
  <div class="container mx-auto py-4 px-2">
    <div class="relative">
      <div class="bg-blue-400 w-full">
        <div class="relative top-16 left-6">
          <img
            src="@/assets/images/icons/profile-picture.jpg"
            alt=""
            class="w-36 h-36 rounded-full object-cover"
          >
        </div>
      </div>
    </div>
    <div class="mt-20 md:ml-48 md:mt-4">
      <div>
        <h1 class="text-2xl font-bold">
          Name of Store
        </h1>
      </div>
      <span class="text-sm font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur
        vero unde debitis vel magnam repellendus minus ducimus sunt accusantium,
        quis blanditiis error perferendis quisquam non, maiores et nisi!
        Facilis.</span>
      <div class="mt-4 md:flex gap-x-96 items-center">
        <div class="text-base font-normal">
          <div>Selling on Youstore: 3 years</div>
          <div>Order Fulfilment Rate: Excellent</div>
        </div>
        <div class="text-base font-normal">
          <div>Succesful Sales: 92 items</div>
          <div>Customer Rating: Excellent</div>
        </div>
      </div>
    </div>
    <div class="mt-8 text-base font-bold flex">
      <div
        class="w-1/2 flex justify-center border-b-4 pb-2"
        :class="selectedComponent === 'ContentsStore' ? 'text-primary-blue border-b-primary-blue': ''"
        @click="selectedComponent = 'ContentsStore'"
      >
        <button>Store</button>
      </div>
      <div
        class="w-1/2 flex justify-center border-b-4 pb-2"
        :class="selectedComponent === 'ContentsMerchantReviews' ? 'text-primary-blue border-b-primary-blue': ''"
        @click="selectedComponent = 'ContentsMerchantReviews'"
      >
        <button>Reviews</button>
      </div>
    </div>
    <!-- use of dynamic components in vue -->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
    <!-- another method with use of V-if -->
    <!-- <ContentsProductCard v-if="selectedComponent === 'ContentsProductCard'" />
	<ContentsReviews v-if="selectedComponent === 'ContentsReviews'"/> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedComponent: 'ContentsMerchantReviews',
	  
    }
  }

}
</script>

<style scoped></style>

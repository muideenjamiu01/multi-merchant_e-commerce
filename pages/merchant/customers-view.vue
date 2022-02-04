<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsMerchantProfileCard/>
    </aside>
    <main class="w-full">
        <h1 class="font-extrabold text-lg mb-3 mt-8">Vivian Fisher</h1>
        <p class="font-bold mt-4">Customer Information</p>
        <div class="flex">
            <p class="font-bold mt-4">Email Address: </p>
            <p class="ml-2 mb-3 mt-4">vivian.fisher@example.com</p>
        </div>
        <div class="flex">
            <p class="font-bold mt-4">Phone:</p>
            <p class="ml-2 mb-3 mt-4">08039599167</p>
        </div>


        <p class="font-extrabold text-lg mb-3 mt-8">Purchases</p>
        <div class="font-bold justify-end md:flex items-center md:space-x-6">
            <p>Price</p>
            <p>Date of Purchase</p>
            <p>Status</p>
        </div>
        <ContentsOrderslist v-for="n in 5" :key="n" />
      
    </main>
  </div>
</template>
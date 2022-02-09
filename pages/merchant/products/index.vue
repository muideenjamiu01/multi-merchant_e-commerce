<template>
  <div class="flex mt-8 px-4">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full text-sm">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl">Products</h1>
        <NuxtLink to="products/newproduct">
          <!-- <button class="py-2 px-4 bg-primary-blue text-white text-sm rounded">
          Add Product
        </button> -->
          <AppButton
            buttonText="Add Product"
            color="fillbutton"
            size="md"
            rounded
          />
        </NuxtLink>
      </div>
      <div>
        <table
          class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
        >
          <thead class="py-3 border-b font-medium text-center">
            <tr>
              <th class="pb-3 text-left">Transaction ID</th>
              <th class="pb-3">Price</th>
              <th class="pb-3">Discount (%)</th>
              <th class="pb-3">Sold</th>
              <th class="pb-3">Avg. Rating</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="p in 11" :key="p" class="border-b">
              <td class="flex gap-4 py-3 text-left">
                <div class="h-24 w-24 bg-primary-gray"></div>
                <div>
                  <h1>
                    Women's Los Angeles California Long Sleeve Sweatshirt
                    Oversized Bat...
                  </h1>
                  <p>Sizes: xxs, xs, sm, md, lg, xl, xxl</p>
                  <p>Colors: brown, beige, lemon green, navy blue, black</p>
                  <p>Quantity: 24</p>
                </div>
              </td>
              <td>14483.00</td>
              <td>4</td>
              <td>10</td>
              <td>3.6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: "merchant",
};
</script>

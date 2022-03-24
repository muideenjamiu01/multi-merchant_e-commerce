<template>
  <div class="px-4 py-8 flex">
      <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="md:ml-72 md:w-[calc(100%_-_288px)]">
      <h1 class="text-2xl">
        Transactions
      </h1>

      <div>
        <table
          class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
        >
          <thead class="py-3 border-b font-medium text-center">
            <tr>
              <th class="pb-3 text-left">
                Transaction ID
              </th>
              <th class="pb-3">
                Price
              </th>
              <th class="pb-3">
                Date of Purchase
              </th>
              <th class="pb-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="p in 11" :key="p" class="border-b">
              <td class="flex gap-4 py-3 text-left">
                <h1>1585297524</h1>
                <div class="h-24 w-24 bg-primary-gray" />
                <div>
                  <h1>
                    Women's Los Angeles California Long Sleeve Sweatshirt
                    Oversized Bat...
                  </h1>
                  <p>Sizes: xxs, xs, sm, md, lg, xl, xxl</p>
                  <p>Colors: brown, beige, lemon green, navy blue, black</p>
                  <p>Quantity: 2</p>
                </div>
              </td>
              <td>14483.00</td>

              <td>12/01/2022</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'merchant',
  middleware: 'auth-merchant',
}
</script>

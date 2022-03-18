<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>

    <main class="w-full">
       <h1 class="font-extrabold text-lg mb-3 mt-8">Vivian Fisher</h1>
      <p class="font-bold mt-4">Customer Information</p>
      <div class="flex">
        <p class="font-bold mt-4">Email Address:</p>
        <p class="ml-2 mb-3 mt-4">vivian.fisher@example.com</p>
      </div>
      <div class="flex">
        <p class="font-bold mt-4">Phone:</p>
        <p class="ml-2 mb-3 mt-4">08039599167</p>
      </div>
      <table
        class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
      >
      
        <thead class="py-3 border-b font-medium text-center">
          <tr>
            <th class="pb-3 text-left">Transaction ID</th>
            <th class="pb-3">Price</th>
            <th class="pb-3">Date of Purchase</th>
            <th class="pb-3">Status</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="product in pageOfItems"  :key="product.id" class="border-b">
            <td class="flex gap-4 py-3 text-left">
              <div class="h-24 w-24 bg-primary-gray" />
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
            <td> 12 / 01 / 2022</td>
            <td>Delivered</td>
            
          </tr>

           
        </tbody>
        
      </table>
       <div class="pb-0 pt-3 text-center">
              <jw-pagination
                class="rounded-xl text-white pb-0 pt-3"
                :items="products"
                @changePage="onChangePage"
                :labels="customLabels"
                :styles="customStyles"
              >
              </jw-pagination>
            </div>


     

      
     
     
    </main>
  </div>
</template>

<script>
import JwPagination from "jw-vue-pagination/lib/JwPagination";
const customStyles = {
  ul: {
    borderRadius: "10px",
  },
  li: {
    color: "white",
    display: "inline-flex",
    flexDirection: "row",
    backgroundColor: "#46b2c8",
    borderRadius: "10px",
    marginLeft: "5px",
  },
  a: {
    color: "white",
    borderRadius: "10px",
  },
};

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
};

export default {
  layout: "merchant",
  props: ["title"],
  data() {
    return {
      customStyles,
      customLabels,
      pageOfItems: [],
      products: [
        { name: "Manos", id: 1 },
        { name: "Zino", id: 2 },
        { name: "Uyo", id: 3 },
        { name: "Kaka", id: 4 },
        { name: "Chima", id: 5 },
        { name: "Charles", id: 6 },
        { name: "Feline", id: 7 },
        { name: "Samuel", id: 8 },
        { name: "Charles", id: 9 },
        { name: "Favour", id: 10 },
        { name: "Manos1", id: 11 },
        // { name: 'Zino1', id: 12 },
        // { name: 'Uyo1', id: 13 },
        // { name: 'Kaka1', id: 14 },
        // { name: 'Chima1', id: 15 },
        // { name: 'Charles1', id: 16 },
        // { name: 'Feline1', id: 17 },
        // { name: 'Samuel1', id: 18 },
        { name: "Charles1", id: 19 },
        { name: "Favour1", id: 20 },
      ],
    };
  },

  methods: {
    onChangePage(p) {
      // update page of items
      this.pageOfItems = p;
    },
  },

  components: {
    JwPagination,
  },
};
</script>

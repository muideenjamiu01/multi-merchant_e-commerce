<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4 mt-8">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Shopping Cart</h1>
    </div>
    <div class="md:flex gap-8">
      <div class="md:w-3/4">
        <div class="w-full">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="border-b">
                <tr class="text-center">
                  <th class="w-3/4 text-xs font-light"></th>
                  <th class="w-1/4 text-xs font-light">Quantity</th>
                  <th class="w-1/4 text-xs font-light">Price(NGN)</th>
                </tr>
              </thead>

              <tbody v-for="item in 5" :key="item">
                <tr>
                  <td class="text-dark font-medium text-base py-2 px-2">
                    <div class="flex gap-4">
                      <div class="w-24 h-24 overflow-hidden">
                        <img
                          src="@/assets/images/icons/profile-picture.jpg"
                          alt="youveirfy logo"
                        />
                      </div>
                      <div class="flex flex-col">
                        <div>
                          <h3 class="text-base font-light">
                            Women's Los Angeles California Long Sleeve
                            Sweatshirt Oversized 
                          </h3>
                        </div>
                        <div class="text-sm font-light">size:small</div>
                        <div class="text-sm font-light">color:Brown</div>
                        <div class="text-primary-blue text-sm font-normal">
                          <button class="border-r-4 pr-2">Delete</button>
                          <button class="pl-2">Add to wishlist</button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="">
                    <div class="flex justify-center items-center">
                      <div
                        class="flex flex-row h-8 rounded-lg relative bg-transparent"
                      >
                        <button
                          @click="counter -= 1"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <div
                          class="text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
                        >
                          {{ counter }}
                        </div>
                        <button
                          @click="counter += 1"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex justify-center">
                      <span class="text-base font-light">14387.00</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mt-12 flex  justify-end gap-2 font-medium text-xl">
          <h1><span class="">Subtotal (5 items):</span></h1>
          <span class="">799516 NGN</span>
        </div>
      </div>
      <div class="lg:w-1/4">
        <div class="font-medium bg-primary-blue-light p-4">
          <h1><span class="">Subtotal (5 items):</span></h1>
          <span class="flex justify-end">799516 NGN</span>
          <div class="flex justify-center mt-6">
            <button
              class="px-2 py-1 md:px-8 md:py-2 bg-primary-blue text-white rounded"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
        <div class="bg-primary-blue-light p-4 mt-6">
          <h1 class="text-base font-medium my-2">
            You recently viewed this items
          </h1>
          <div v-for="product in 5" :key="product" class="mt-4 flex gap-4">
            <div>
              <img src="" alt="" class="w-28 h-28" />
            </div>
            <div>
              <div>
                <h4 class="font-light text-sm">Product name</h4>
                <div class="">
                  <div class="flex justify-between">
                    <span class="font-light text-sm">stars rating </span>
                    <span class="text-primary-blue font-light text-sm"
                      >213</span
                    >
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <span class="font-light text-sm">5000.00 NGN</span>
                    </div>
                    <span class="font-light text-sm">-18%</span>
                  </div>
                  <button
                    class="px-2 py-1 md:px-6 md:py-2 bg-primary-blue text-white rounded font-medium mt-2"
                  >
                    add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>

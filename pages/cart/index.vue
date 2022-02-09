<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4 mt-8">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Shopping Cart</h1>
    </div>
    <div class="md:flex gap-8">
      <div class="md:w-3/4">
        <div class="md:flex gap-8 border-b p-4 mt-4">
          <div class="w-2/4">
            <div>
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
                      Women's Los Angeles California Long Sleeve Sweatshirt
                      Oversized
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
            </div>
          </div>
          <div class="w-1/4">
            <div class="flex justify-center items-center gap-4">
              <button @click="counter -= 1">
                <span class="m-auto text-2xl font-thin">-</span>
              </button>
              <div
                class="text-center font-semibold text-md text-gray-400 flex items-center"
              >
                {{ counter }}
              </div>
              <button @click="counter += 1" class="cursor-pointer">
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <div class="w-1/4">
            <div class="flex">
              <span class="text-base font-light">14387.00</span>
            </div>
          </div>
        </div>

        <div class="mt-12 flex justify-end gap-2 font-medium text-xl">
          <h1><span class="">Subtotal (5 items):</span></h1>
          <span class="">799516 NGN</span>
        </div>
      </div>
      <div class="md:w-1/4">
        <div class="mt-4 lg:mt-0 font-medium bg-primary-blue-light p-8">
          <h1><span class="">Subtotal (5 items):</span></h1>
          <span class="flex justify-end">799516 NGN</span>
          <div class="flex justify-center mt-6">
            <AppButton
              buttonText="Proceed to checkout"
              color="fillbutton"
              size="md"
              class="w-full"
              rounded
            />
          </div>
        </div>
        <div class="hidden lg:block bg-primary-blue-light p-2 mt-6">
          <h1 class="text-base font-medium my-2">
            You recently viewed this items
          </h1>
          <div v-for="product in 5" :key="product" class=" ">
            <ContentsAddToCart />
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

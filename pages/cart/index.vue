<template>
  <div class="container mx-auto py-4 px-2">
    <div class="flex gap-4">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Shopping Cart</h1>
    </div>
    <div class="w-3/4">
		<div class="w-full">
      <div class="inline-block overflow-x-auto">
        <table class="table-auto w-full">
          <thead class="border-b">
            <tr class="text-center">
              <th
                class="w-3/4 text-lg font-semibold py-4 lg:py-7 px-3 lg:px-4"
              ></th>
              <th class="w-1/4 text-lg font-semibold py-4 lg:py-7 px-3 lg:px-4">
                Quantity
              </th>
              <th class="w-1/4 text-lg font-semibold py-4 lg:py-7 px-3 lg:px-4">
                Price(NGN)
              </th>
            </tr>
          </thead>

          <tbody >
			  <!-- //v-for="item in 3" :key="item" -->
            <tr>
              <td class="text-dark font-medium text-base py-2 px-2">
                <div class="flex gap-4">
                  <div class="w-20 h-25 overflow-hidden">
                    <img
                      src="@/assets/images/icons/profile-picture.jpg"
                      alt="youveirfy logo"
                    />
                  </div>
                  <div class="flex flex-col">
                    <div>
                      <h3>
                        Women's Los Angeles California Long Sleeve Sweatshirt
                        Oversized Bat Crew...
                      </h3>
                    </div>
                    <div>size:small</div>
                    <div>color:Brown</div>
                    <div class="text-primary-blue">
                      <button class="border-r-4 pr-2">Delete</button>
                      <button class="pl-2">Add to wishlist</button>
                    </div>
                  </div>
                </div>
              </td>
              <td class="">
                <div class="flex justify-center items-center">
                  <div class="flex flex-row h-10 rounded-lg relative bg-transparent">
                    <button @click="counter -= 1" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"> <span class="m-auto text-2xl font-thin">-</span></button>
                    <div class=" text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 ">{{ counter }}</div>
                    <button @click="counter += 1" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"> <span class="m-auto text-2xl font-thin">+</span></button>
                  </div>
                </div>
              </td>
              <td>
                <div class="flex justify-center">
                  <span>14387.00</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
	</div>
	<div class="w-1/4"></div>
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

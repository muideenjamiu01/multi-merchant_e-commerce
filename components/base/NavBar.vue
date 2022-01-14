<template>
  <div class="py-3 px-6 md:px-12 flex items-center justify-between">
    <div class="w-24 xs:w-40 h-10 bg-primary-blue rounded cursor-pointer"></div>
    <div
      class="bg-primary-blue-light px-3 py-2 hidden lg:flex justify-between items-center rounded w-96"
    >
      <input
        type="text"
        placeholder="Search Youstore"
        class="focus:outline-none bg-transparent w-full"
      />
      <img class="cursor-pointer" src="@/assets/images/icons/search-icon.svg" />
    </div>

    <div class="flex items-center gap-5">
      <h1 class="text-primary-blue text-lg cursor-pointer hidden md:block">
        Become a seller
      </h1>
      <div>
        <div class="w-7 h-7 rounded-full bg-black cursor-pointer"></div>
      </div>
      <img
        class="cursor-pointer"
        src="@/assets/images/icons/cart-icon.svg"
        alt=""
      />
    </div>
  </div>
</template>

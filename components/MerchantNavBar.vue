<template>
  <div class="flex justify-between items-center space-x-8 py-4 px-4">
	   <div>
        <nuxt-link to="/"
          ><img
            src="../assets/images/logos/login-logo.svg"
            class="hidden sm:block"
            alt="login-logo" />
          <img
            src="@/assets/images/logos/small-logo.svg"
            class="sm:hidden w-10 h-10"
            alt=""
        /></nuxt-link>
      </div>
    <div
      class="bg-primary-blue-light px-3 py-2 hidden lg:flex justify-between items-center rounded w-full max-w-xl"
    >
     
      <input
        type="text"
        placeholder="Search Youstore"
        class="focus:outline-none bg-transparent w-full"
      />
      <img class="cursor-pointer" src="@/assets/images/icons/search-icon.svg" />
    </div>
    <div class="flex gap-4 items-center">
      <div>
        <img src="@/assets/images/icons/bell.svg" alt="" />
      </div>

      <div class="w-10 h-10 rounded-full bg-primary-blue-light"></div>
    </div>
  </div>
</template>
